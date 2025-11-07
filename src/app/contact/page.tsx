"use client";

import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Message envoyé avec succès ! Nous vous contacterons bientôt.");
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      sujet: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/contact/ar.jpg")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez-<span className="text-[#e2630c]">nous</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Notre équipe est à votre écoute pour répondre à toutes vos
              questions et vous accompagner dans vos projets digitaux
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#006a34] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Téléphone
                      </h3>
                      <p className="text-gray-600">+242 06 989 9982</p>
                      <p className="text-sm text-gray-500">
                        Lundi - Vendredi : 8h - 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#e2630c] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600">+242 069 899 982</p>
                      <p className="text-sm text-gray-500">Disponible 24h/7j</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#006a34] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">contact@pegg.site</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#e2630c] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Adresse
                      </h3>
                      <p className="text-gray-600">
                        Pointe-Noire
                        <br />
                        République du Congo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Suivez-nous
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1877F2] rounded-lg flex items-center justify-center hover:bg-[#166FE5] transition-colors duration-300"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#095BA8] transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      required
                      value={formData.nom}
                      onChange={(e) =>
                        setFormData({ ...formData, nom: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      value={formData.telephone}
                      onChange={(e) =>
                        setFormData({ ...formData, telephone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                      placeholder="+242 XX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="sujet"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      required
                      value={formData.sujet}
                      onChange={(e) =>
                        setFormData({ ...formData, sujet: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="information">Demande d'information</option>
                      <option value="devis">Demande de devis</option>
                      <option value="support">Support technique</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent resize-none"
                      placeholder="Votre message..."
                      maxLength={500}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#006a34] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200 text-lg"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre localisation
              </h2>
              <p className="text-lg text-gray-600">
                Retrouvez-nous à Pointe-Noire, République du Congo
              </p>
            </div>

            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127296.01682755798!2d11.8!3d-4.783333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a337f41be28b1%3A0x84b04e9390c20d5!2sPointe-Noire%2C%20Congo!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Pegg Site"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#006a34] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Vous avez un projet digital en tête ? Discutons-en ensemble et
              trouvons la solution parfaite pour votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demande-devis"
                className="bg-[#e2630c] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#006a34] px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
