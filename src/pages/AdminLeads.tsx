import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Lock, Download, Search, BarChart3, Users, Phone } from "lucide-react";

interface ToolLead {
  id: string;
  email: string;
  tool_slug: string;
  url_checked: string;
  created_at: string;
}

interface SalesLead {
  id: string;
  name: string;
  phone: string;
  landing_page: string;
  q1_rekeningnummer: boolean;
  q2_doelgroep: boolean;
  q3_hoofdinkomen: boolean;
  created_at: string;
}

const AdminLeads = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [toolLeads, setToolLeads] = useState<ToolLead[]>([]);
  const [salesLeads, setSalesLeads] = useState<SalesLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"tool" | "sales">("tool");
  const [storedPassword, setStoredPassword] = useState(() => localStorage.getItem("admin_pw") || "");

  const fetchLeads = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const [toolRes, salesRes] = await Promise.all([
        supabase.functions.invoke("admin-leads", {
          headers: { "x-admin-password": pw },
        }),
        supabase.functions.invoke("admin-leads", {
          headers: { "x-admin-password": pw },
          body: null,
          method: "GET",
        }),
      ]);

      // For the sales leads, we need to call with type=sales query param
      // Edge functions don't support query params via invoke easily, so we'll fetch separately
      const salesResponse = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-leads?type=sales`,
        {
          headers: {
            "x-admin-password": pw,
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
        }
      );

      if (toolRes.error) throw toolRes.error;

      if (Array.isArray(toolRes.data)) {
        setToolLeads(toolRes.data);
      } else if (toolRes.data?.error === "Unauthorized") {
        setError("Onjuist wachtwoord");
        setLoading(false);
        return;
      }

      if (salesResponse.ok) {
        const salesData = await salesResponse.json();
        if (Array.isArray(salesData)) setSalesLeads(salesData);
      }

      setAuthenticated(true);
      localStorage.setItem("admin_pw", pw);
      setStoredPassword(pw);
    } catch {
      setError("Kon leads niet ophalen");
    } finally {
      setLoading(false);
    }
  };

  // Auto-login if password stored
  useState(() => {
    if (storedPassword) fetchLeads(storedPassword);
  });

  const filteredTool = useMemo(() => {
    if (!search) return toolLeads;
    const q = search.toLowerCase();
    return toolLeads.filter(
      (l) =>
        l.email.toLowerCase().includes(q) ||
        l.tool_slug.toLowerCase().includes(q) ||
        l.url_checked.toLowerCase().includes(q)
    );
  }, [toolLeads, search]);

  const filteredSales = useMemo(() => {
    if (!search) return salesLeads;
    const q = search.toLowerCase();
    return salesLeads.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.phone.toLowerCase().includes(q) ||
        l.landing_page.toLowerCase().includes(q)
    );
  }, [salesLeads, search]);

  const toolStats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todayLeads = toolLeads.filter((l) => l.created_at.slice(0, 10) === today);
    const toolCounts: Record<string, number> = {};
    toolLeads.forEach((l) => {
      toolCounts[l.tool_slug] = (toolCounts[l.tool_slug] || 0) + 1;
    });
    const topTool = Object.entries(toolCounts).sort((a, b) => b[1] - a[1])[0];
    return { total: toolLeads.length, today: todayLeads.length, topTool: topTool ? `${topTool[0]} (${topTool[1]})` : "–" };
  }, [toolLeads]);

  const salesStats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todayLeads = salesLeads.filter((l) => l.created_at.slice(0, 10) === today);
    const pageCounts: Record<string, number> = {};
    salesLeads.forEach((l) => {
      pageCounts[l.landing_page] = (pageCounts[l.landing_page] || 0) + 1;
    });
    const topPage = Object.entries(pageCounts).sort((a, b) => b[1] - a[1])[0];
    return { total: salesLeads.length, today: todayLeads.length, topPage: topPage ? `${topPage[0]} (${topPage[1]})` : "–" };
  }, [salesLeads]);

  const exportCSV = () => {
    if (tab === "tool") {
      const header = "Email,Tool,URL,Datum\n";
      const rows = filteredTool.map((l) => `"${l.email}","${l.tool_slug}","${l.url_checked}","${new Date(l.created_at).toLocaleString("nl-NL")}"`).join("\n");
      downloadCSV(header + rows, `tool-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    } else {
      const header = "Naam,Telefoon,Landing Page,Rekeningnummer,Doelgroep,Hoofdinkomen,Datum\n";
      const rows = filteredSales.map((l) =>
        `"${l.name}","${l.phone}","${l.landing_page}","${l.q1_rekeningnummer ? "Ja" : "Nee"}","${l.q2_doelgroep ? "Ja" : "Nee"}","${l.q3_hoofdinkomen ? "Ja" : "Nee"}","${new Date(l.created_at).toLocaleString("nl-NL")}"`
      ).join("\n");
      downloadCSV(header + rows, `sales-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    }
  };

  const downloadCSV = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4 p-8">
          <div className="flex items-center gap-2 justify-center text-foreground">
            <Lock className="w-5 h-5" />
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchLeads(password);
            }}
            className="space-y-3"
          >
            <Input type="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Laden..." : "Inloggen"}
            </Button>
            {error && <p className="text-sm text-destructive text-center">{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="w-6 h-6" /> Admin Dashboard
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => fetchLeads(storedPassword)} disabled={loading}>
            {loading ? "Laden..." : "Vernieuwen"}
          </Button>
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="w-4 h-4 mr-1" /> CSV
          </Button>
          <Button variant="ghost" size="sm" onClick={() => { localStorage.removeItem("admin_pw"); setAuthenticated(false); setToolLeads([]); setSalesLeads([]); }}>
            Uitloggen
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setTab("tool")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === "tool" ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          <Search className="w-4 h-4 inline mr-1" /> Tool Leads ({toolLeads.length})
        </button>
        <button
          onClick={() => setTab("sales")}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${tab === "sales" ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
        >
          <Phone className="w-4 h-4 inline mr-1" /> Sales Leads ({salesLeads.length})
        </button>
      </div>

      {/* Stats */}
      {tab === "tool" ? (
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Totaal leads", value: toolStats.total },
            { label: "Vandaag", value: toolStats.today },
            { label: "Populairste tool", value: toolStats.topTool },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Totaal sales leads", value: salesStats.total },
            { label: "Vandaag", value: salesStats.today },
            { label: "Populairste pagina", value: salesStats.topPage },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input className="pl-9" placeholder={tab === "tool" ? "Zoek op e-mail, tool of URL..." : "Zoek op naam, telefoon of pagina..."} value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        {tab === "tool" ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Tool</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Datum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTool.length === 0 ? (
                <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">Geen leads gevonden</TableCell></TableRow>
              ) : filteredTool.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.email}</TableCell>
                  <TableCell>{lead.tool_slug}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{lead.url_checked}</TableCell>
                  <TableCell className="whitespace-nowrap">{new Date(lead.created_at).toLocaleString("nl-NL")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Naam</TableHead>
                <TableHead>Telefoon</TableHead>
                <TableHead>Pagina</TableHead>
                <TableHead>Rek.nr</TableHead>
                <TableHead>Doelgroep</TableHead>
                <TableHead>Hoofdinkomen</TableHead>
                <TableHead>Datum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSales.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">Geen leads gevonden</TableCell></TableRow>
              ) : filteredSales.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.landing_page}</TableCell>
                  <TableCell>{lead.q1_rekeningnummer ? "✓" : "✗"}</TableCell>
                  <TableCell>{lead.q2_doelgroep ? "✓" : "✗"}</TableCell>
                  <TableCell>{lead.q3_hoofdinkomen ? "✓" : "✗"}</TableCell>
                  <TableCell className="whitespace-nowrap">{new Date(lead.created_at).toLocaleString("nl-NL")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
      <p className="text-sm text-muted-foreground">{tab === "tool" ? filteredTool.length : filteredSales.length} resultaten</p>
    </div>
  );
};

export default AdminLeads;
