"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/a-propos" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-cream-100 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/accueil/peggsitelogo.png"
              alt="Pegg Site"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-semibold text-forest-700 hover:text-primary-600 transition-colors">
              Pegg Site
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "text-primary-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-600"
                    : "text-forest-700 hover:text-primary-600 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/demande-devis"
              className="bg-[#e2630c] text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 whitespace-nowrap"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-forest-700 hover:text-primary-600 p-2 relative z-50 transition-colors"
            >
              <i
                className={`ri-${
                  mobileMenuOpen ? "close" : "menu"
                }-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation avec indication active */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-3 mt-3 px-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen
                      ? `${index * 100}ms`
                      : "0ms",
                  }}
                  className={`block px-5 py-3 text-base font-medium rounded-lg transition-all duration-300 transform ${
                    mobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  } ${
                    isActive
                      ? "text-white bg-primary-600 shadow-lg border border-primary-700"
                      : "text-forest-700 hover:text-primary-600 hover:bg-primary-100 hover:scale-105"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/demande-devis"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${navItems.length * 100}ms`
                  : "0ms",
              }}
              className={`block mt-4 bg-accent-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent-600 hover:scale-105 text-center shadow-md transition-transform duration-300 transform ${
                mobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
