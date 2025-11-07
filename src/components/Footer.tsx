import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <img
              src="/images/accueil/peggsitelogo.png"
              alt="Pegg Site"
              className="h-28 w-auto mb-6 mx-auto md:mx-0"
              style={{ imageRendering: "auto" }} // pour conserver qualité HD
            />
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed mx-auto md:mx-0">
              Votre partenaire digital pour un avenir connecté. Nous
              transformons vos idées en solutions digitales performantes.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                {
                  href: "#",
                  icon: "ri-facebook-fill",
                  label: "Facebook",
                  color: "bg-blue-600 hover:bg-blue-500",
                },
                {
                  href: "#",
                  icon: "ri-linkedin-fill",
                  label: "LinkedIn",
                  color: "bg-blue-700 hover:bg-blue-600",
                },
                {
                  href: "#",
                  icon: "ri-instagram-fill",
                  label: "Instagram",
                  color: "bg-pink-500 hover:bg-pink-400",
                },
                {
                  href: "https://wa.me/24206989982",
                  icon: "ri-whatsapp-fill",
                  label: "WhatsApp",
                  color: "bg-green-500 hover:bg-green-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${social.color} text-white text-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-110`}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cream-200">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Création de sites web",
                "Applications mobiles",
                "Marketing digital",
                "Réseaux sociaux",
                "SEO & SEA",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="relative group text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {service}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cream-200">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-mail-line text-primary-400"></i>
                <a
                  href="mailto:contact@pegg.site"
                  className="hover:underline transition"
                >
                  contact@pegg.site
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-phone-line text-primary-400"></i>
                <a
                  href="tel:+24206989982"
                  className="hover:underline transition"
                >
                  +242 06 989 9982
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-map-pin-line text-primary-400"></i>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pointe-Noire,+République+du+Congo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
                >
                  Pointe-Noire, République du Congo
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-time-line text-primary-400"></i>
                <span>Lun-Ven: 8h-18h</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-time-line text-primary-400"></i>
                <span>Sam: 8h-15h</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <i className="ri-headphone-line text-primary-400"></i>
                <span>Service client: 24h/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-14 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Pegg Site – Agence digitale. Tous droits réservés. | Design
            by{" "}
            <a
              href="https://pegg.site"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary-400 font-semibold"
            >
              Pegg Site
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
