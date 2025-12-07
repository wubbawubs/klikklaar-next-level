import { Link } from "react-router-dom";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const footerLinks = {
  product: [
    { name: "Wat je krijgt", href: "/wat-je-krijgt" },
    { name: "Hoe het werkt", href: "/hoe-het-werkt" },
    { name: "Prijzen", href: "/prijzen" },
  ],
  industries: [
    { name: "Kappers", href: "/voorbeelden#kappers" },
    { name: "Tandartsen", href: "/voorbeelden#tandartsen" },
    { name: "Coaches", href: "/voorbeelden#coaches" },
    { name: "Alle branches", href: "/voorbeelden" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img src={klikklaarLogo} alt="KlikKlaar SEO" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Automatische website-verbeteringen voor lokale ondernemers. Meer klanten, zonder gedoe.
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

          {/* Company */}
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
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3 lg:mb-4 text-sm">Juridisch</h4>
            <ul className="space-y-2 lg:space-y-3">
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
            © {new Date().getFullYear()} KlikKlaar. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-slate-500">
            Gemaakt met ❤️ voor lokale ondernemers in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
