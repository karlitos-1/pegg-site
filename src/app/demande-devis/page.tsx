"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Clock, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DemandeDevis() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    budget: "",
    delai: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Demande de devis envoyée ! Nous vous répondrons dans les 24 heures."
    );
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      entreprise: "",
      service: "",
      budget: "",
      delai: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://ext.same-assets.com/2339639548/869598825.false")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demander un <span className="text-[#e2630c]">Devis</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Partagez-nous votre projet et recevez un devis personnalisé
              gratuit sous 24h
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Réponse Rapide
                </h3>
                <p className="text-gray-600">
                  Devis détaillé envoyé sous 24h maximum
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  100% Gratuit
                </h3>
                <p className="text-gray-600">
                  Aucun frais caché, devis sans engagement
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Conseil Expert
                </h3>
                <p className="text-gray-600">
                  Recommandations personnalisées incluses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Parlons de votre projet
                  </h2>
                  <p className="text-lg text-gray-600">
                    Remplissez ce formulaire pour recevoir un devis personnalisé
                    et gratuit
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        required
                        value={formData.telephone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            telephone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                        placeholder="+242 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="entreprise"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        value={formData.entreprise}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            entreprise: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service souhaité *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="creation-web">
                          Création de site web
                        </option>
                        <option value="app-mobile">Application mobile</option>
                        <option value="marketing-digital">
                          Marketing digital
                        </option>
                        <option value="seo">Référencement SEO</option>
                        <option value="reseaux-sociaux">
                          Gestion réseaux sociaux
                        </option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                      >
                        <option value="">Sélectionnez votre budget</option>
                        <option value="moins-500k">
                          Moins de 500 000 FCFA
                        </option>
                        <option value="500k-1m">
                          500 000 - 1 000 000 FCFA
                        </option>
                        <option value="1m-2m">
                          1 000 000 - 2 000 000 FCFA
                        </option>
                        <option value="2m-5m">
                          2 000 000 - 5 000 000 FCFA
                        </option>
                        <option value="plus-5m">Plus de 5 000 000 FCFA</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="delai"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Délai souhaité
                    </label>
                    <select
                      id="delai"
                      value={formData.delai}
                      onChange={(e) =>
                        setFormData({ ...formData, delai: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent"
                    >
                      <option value="">Sélectionnez un délai</option>
                      <option value="urgent">
                        Urgent (moins de 2 semaines)
                      </option>
                      <option value="1-mois">1 mois</option>
                      <option value="2-3-mois">2-3 mois</option>
                      <option value="plus-3-mois">Plus de 3 mois</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent resize-none"
                      placeholder="Décrivez votre projet, vos objectifs, vos besoins spécifiques..."
                      maxLength={500}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                      {formData.message.length}/500 caractères
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-[#006a34] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200 text-lg"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi demander un devis */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pourquoi demander un devis chez{" "}
                <span className="text-[#006a34]">Pegg Site</span> ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Réponse rapide
                </h3>
                <p className="text-gray-600">
                  Devis personnalisé sous 24h maximum
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gratuit et sans engagement
                </h3>
                <p className="text-gray-600">
                  Aucun frais, aucune obligation d'achat
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Accompagnement personnalisé
                </h3>
                <p className="text-gray-600">
                  Conseils adaptés à vos besoins spécifiques
                </p>
              </div>
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
