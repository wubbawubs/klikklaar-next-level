import { Link } from "react-router-dom";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const footerLinks = {
  product: [
    { name: "Wat je krijgt", href: "/wat-je-krijgt" },
    { name: "Hoe het werkt", href: "/hoe-het-werkt" },
    { name: "Prijzen", href: "/prijzen" },
    { name: "Kennisbank", href: "/kennisbank" },
  ],
  services: [
    { name: "Lokale SEO", href: "/lokale-seo" },
    { name: "AI SEO", href: "/ai-seo" },
    { name: "GEO SEO", href: "/geo-seo" },
    { name: "Technische SEO", href: "/technische-seo" },
    { name: "Google Mijn Bedrijf", href: "/google-mijn-bedrijf-optimalisatie" },
  ],
  kennisbank: [
    { name: "Lokale SEO Gids", href: "/kennisbank/lokale-seo" },
    { name: "Technische SEO Gids", href: "/kennisbank/technische-seo" },
    { name: "Content Optimalisatie", href: "/kennisbank/content-optimalisatie" },
  ],
  industries: [
    { name: "Personal Trainers", href: "/seo-personal-trainers" },
    { name: "Coaches", href: "/seo-coaches" },
    { name: "Kappers", href: "/seo-kappers" },
    { name: "Alle branches", href: "/branches" },
  ],
  locations: [
    { name: "SEO Amsterdam", href: "/seo-amsterdam" },
    { name: "SEO Rotterdam", href: "/seo-rotterdam" },
    { name: "SEO Utrecht", href: "/seo-utrecht" },
    { name: "Alle steden", href: "/steden" },
  ],
  company: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Algemene voorwaarden", href: "/voorwaarden" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container px-4 sm:px-6 py-10 lg:py-16">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img src={klikklaarLogo} alt="KlikKlaarSEO" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Automatische SEO & AI-vindbaarheid voor ondernemers. Meer klanten, zonder gedoe.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Product</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kennisbank */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Kennisbank</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.kennisbank.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Branches</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Steden</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal combined */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Bedrijf</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800 mt-3">
                <span className="text-xs text-slate-500 font-medium">Juridisch</span>
              </li>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 lg:mt-14 pt-6 lg:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} KlikKlaarSEO. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-slate-500">
            Gemaakt met ❤️ voor ondernemers in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
