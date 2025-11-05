import { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaFileInvoice,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

export default function FloatingMobileMenu() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      href: "https://pegg.site/contact",
      icon: <FaEnvelope size={20} />,
      label: "Contact",
    },
    {
      href: "https://pegg.site/quote",
      icon: <FaFileInvoice size={20} />,
      label: "Devis",
    },
    {
      href: "https://wa.me/242069899982",
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
    },
  ];

  return (
    // Bloc uniquement visible sur mobile
    <div className="fixed right-2 top-1/2 -translate-y-1/2 flex flex-col items-end z-50 lg:hidden">
      {/* Bouton principal pour ouvrir/fermer */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#006a34] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Boutons dépliables */}
      {open && (
        <div className="mt-4 flex flex-col gap-3">
          {buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-[#006a34] hover:bg-[#009e4c] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
            >
              {btn.icon}
              <span className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-md whitespace-nowrap transition-all duration-300">
                {btn.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
