import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Lock, Download, Search, BarChart3 } from "lucide-react";

interface Lead {
  id: string;
  email: string;
  tool_slug: string;
  url_checked: string;
  created_at: string;
}

const AdminLeads = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [storedPassword, setStoredPassword] = useState(() => localStorage.getItem("admin_pw") || "");

  const fetchLeads = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("admin-leads", {
        headers: { "x-admin-password": pw },
      });
      if (fnError) throw fnError;
      if (Array.isArray(data)) {
        setLeads(data);
        setAuthenticated(true);
        localStorage.setItem("admin_pw", pw);
        setStoredPassword(pw);
      } else if (data?.error === "Unauthorized") {
        setError("Onjuist wachtwoord");
      } else {
        setLeads(data || []);
        setAuthenticated(true);
      }
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

  const filtered = useMemo(() => {
    if (!search) return leads;
    const q = search.toLowerCase();
    return leads.filter(
      (l) =>
        l.email.toLowerCase().includes(q) ||
        l.tool_slug.toLowerCase().includes(q) ||
        l.url_checked.toLowerCase().includes(q)
    );
  }, [leads, search]);

  const stats = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    const todayLeads = leads.filter((l) => l.created_at.slice(0, 10) === today);
    const toolCounts: Record<string, number> = {};
    leads.forEach((l) => {
      toolCounts[l.tool_slug] = (toolCounts[l.tool_slug] || 0) + 1;
    });
    const topTool = Object.entries(toolCounts).sort((a, b) => b[1] - a[1])[0];
    return { total: leads.length, today: todayLeads.length, topTool: topTool ? `${topTool[0]} (${topTool[1]})` : "–" };
  }, [leads]);

  const exportCSV = () => {
    const header = "Email,Tool,URL,Datum\n";
    const rows = filtered.map((l) => `"${l.email}","${l.tool_slug}","${l.url_checked}","${new Date(l.created_at).toLocaleString("nl-NL")}"`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tool-leads-${new Date().toISOString().slice(0, 10)}.csv`;
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
            <Input
              type="password"
              placeholder="Wachtwoord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          <BarChart3 className="w-6 h-6" /> Tool Leads
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => fetchLeads(storedPassword)} disabled={loading}>
            {loading ? "Laden..." : "Vernieuwen"}
          </Button>
          <Button variant="outline" size="sm" onClick={exportCSV}>
            <Download className="w-4 h-4 mr-1" /> CSV
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              localStorage.removeItem("admin_pw");
              setAuthenticated(false);
              setLeads([]);
            }}
          >
            Uitloggen
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Totaal leads", value: stats.total },
          { label: "Vandaag", value: stats.today },
          { label: "Populairste tool", value: stats.topTool },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Zoek op e-mail, tool of URL..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="border border-border rounded-lg overflow-hidden">
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
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                  Geen leads gevonden
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.email}</TableCell>
                  <TableCell>{lead.tool_slug}</TableCell>
                  <TableCell className="max-w-[300px] truncate">{lead.url_checked}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleString("nl-NL")}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground">{filtered.length} resultaten</p>
    </div>
  );
};

export default AdminLeads;
