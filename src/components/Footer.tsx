import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#006a34] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://ext.same-assets.com/2339639548/2562101035.png"
                alt="Pegg Site Logo"
                className="h-8 w-8"
              />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "Pacifico, serif" }}
              >
                Pegg Site
              </span>
            </Link>
            <p className="text-green-100 text-sm leading-relaxed">
              Votre partenaire digital à Pointe-Noire pour la création de sites
              web, applications mobiles et stratégies marketing innovantes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/creation-site-web"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Création Sites Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Maintenance Informatique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#e2630c]"></i>
                <span className="text-green-100 text-sm">
                  Pointe-Noire, République du Congo
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#e2630c]"></i>
                <a
                  href="tel:+24206989982"
                  className="text-green-100 text-sm hover:text-white transition-colors duration-200"
                >
                  +242 06 989 9982
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#e2630c]"></i>
                <a
                  href="mailto:contact@pegg.site"
                  className="text-green-100 text-sm hover:text-white transition-colors duration-200"
                >
                  contact@pegg.site
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-time-line text-[#e2630c]"></i>
                <span className="text-green-100 text-sm">
                  Lun - Ven: 8h - 18h
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <i className="ri-instagram-fill text-white"></i>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                >
                  <i className="ri-twitter-fill text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © 2024 Pegg Site. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <Link
                href="/contact"
                className="text-green-100 hover:text-white text-sm transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/contact"
                className="text-green-100 hover:text-white text-sm transition-colors duration-200"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
