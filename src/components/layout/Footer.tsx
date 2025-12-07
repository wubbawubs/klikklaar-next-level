import { Link } from "react-router-dom";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const footerLinks = {
  product: [
    { name: "Wat je krijgt", href: "/deliverables" },
    { name: "Hoe het werkt", href: "/how-it-works" },
    { name: "Prijzen", href: "/pricing" },
  ],
  industries: [
    { name: "Kappers", href: "/use-cases/kappers" },
    { name: "Tandartsen", href: "/use-cases/tandartsen" },
    { name: "IT Bedrijven", href: "/use-cases/it" },
    { name: "E-commerce", href: "/use-cases/ecommerce" },
  ],
  company: [
    { name: "Over ons", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Algemene voorwaarden", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 sm:px-6 py-12 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <img src={klikklaarLogo} alt="KlikKlaar SEO" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm max-w-xs">
              Automatische website-verbeteringen voor lokale ondernemers. Meer klanten, zonder gedoe.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Branches</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Bedrijf</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Juridisch</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} KlikKlaar. Alle rechten voorbehouden.
          </p>
          <p className="text-xs sm:text-sm text-primary-foreground/60">
            Gemaakt met ❤️ voor lokale ondernemers in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
