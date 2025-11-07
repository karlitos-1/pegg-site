"use client";

import Footer from "@/components/Footer";
import { Navigation } from "@/components/navigation";
import { Clock, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DemandeDevisPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    budget: "",
    delai: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Devis submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const advantages = [
    {
      icon: "ri-time-line",
      title: "Réponse Rapide",
      description: "Recevez votre devis détaillé sous 24 heures maximum",
    },
    {
      icon: "ri-verified-badge-line",
      title: "100% Gratuit",
      description: "Aucun engagement, demandez autant de devis que vous voulez",
    },
    {
      icon: "ri-user-star-line",
      title: "Conseil Expert",
      description:
        "Nos experts vous conseillent sur la meilleure solution pour votre projet",
    },
  ];

  const whyChooseUs = [
    {
      icon: "ri-pencil-ruler-2-line",
      title: "Devis personnalisé",
      description:
        "Chaque projet est unique. Nous analysons vos besoins spécifiques pour vous proposer une solution sur mesure adaptée à vos objectifs et votre budget.",
    },
    {
      icon: "ri-eye-line",
      title: "Transparence totale",
      description:
        "Nous détaillons chaque poste de dépense pour que vous sachiez exactement ce que vous payez. Pas de frais cachés, pas de mauvaises surprises.",
    },
    {
      icon: "ri-hand-heart-line",
      title: "Accompagnement complet",
      description:
        "De la conception à la mise en ligne, notre équipe vous accompagne à chaque étape de votre projet avec professionnalisme et réactivité.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/devis/ar.jpg")',
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Remplissez le formulaire
                  </h2>
                  <p className="text-xl text-gray-600">
                    Plus vous nous donnez de détails, plus notre devis sera
                    précis
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                        placeholder="+242 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="entreprise"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                        placeholder="Nom de votre entreprise (optionnel)"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="creation-site-web">
                        Création de Sites Web
                      </option>
                      <option value="e-commerce">
                        E-commerce & Boutiques en ligne
                      </option>
                      <option value="app-mobile">
                        Développement d'Applications Mobiles
                      </option>
                      <option value="marketing-digital">
                        Marketing Digital & Publicité
                      </option>
                      <option value="seo">SEO & Référencement</option>
                      <option value="reseaux-sociaux">
                        Gestion des Réseaux Sociaux
                      </option>
                      <option value="branding">
                        Branding & Identité Visuelle
                      </option>
                      <option value="maintenance">
                        Maintenance & Support Technique
                      </option>
                      <option value="maintenance-info">
                        Maintenance Informatique
                      </option>
                      <option value="formation">
                        Formation & Accompagnement Digital
                      </option>
                      <option value="consultation">
                        Consultation & Stratégie Digitale
                      </option>
                      <option value="crm-erp">
                        Systèmes de Gestion (CRM/ERP)
                      </option>
                      <option value="hebergement">
                        Hébergement & Noms de Domaine
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Budget estimé *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Sélectionnez votre budget</option>
                        <option value="0-300k">Moins de 300 000 FCFA</option>
                        <option value="300k-500k">
                          300 000 - 500 000 FCFA
                        </option>
                        <option value="500k-1m">
                          500 000 FCFA - 1 000 000 FCFA
                        </option>
                        <option value="1m-2m">
                          1 000 000 - 2 000 000 FCFA
                        </option>
                        <option value="2m+">Plus de 2 000 000 FCFA</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="delai"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Délai souhaité *
                      </label>
                      <select
                        id="delai"
                        name="delai"
                        value={formData.delai}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Sélectionnez un délai</option>
                        <option value="urgent">Urgent (moins d'un mois)</option>
                        <option value="1-2-mois">1 à 2 mois</option>
                        <option value="2-3-mois">2 à 3 mois</option>
                        <option value="3-6-mois">3 à 6 mois</option>
                        <option value="6-mois+">Plus de 6 mois</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Description du projet *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006a34] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, public cible, etc."
                    />
                  </div>

                  <div className="bg-[#006a34]/5 border-l-4 border-[#006a34] p-6 rounded-lg">
                    <p className="text-gray-700">
                      <i className="ri-information-line text-[#006a34] mr-2" />
                      En soumettant ce formulaire, vous acceptez d'être contacté
                      par notre équipe pour discuter de votre projet. Vos
                      données sont protégées et ne seront jamais partagées avec
                      des tiers.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#006a34] hover:bg-[#005528] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="ri-send-plane-line" />
                    Recevoir mon devis gratuit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi demander un devis */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Pourquoi demander un devis chez Pegg Site ?
                </h2>
                <p className="text-xl text-gray-600">
                  Nous nous engageons à vous offrir le meilleur service
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-[#e2630c]/10 text-[#e2630c] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <i className={`${item.icon} text-3xl`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#006a34] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Des questions avant de demander un devis ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#e2630c] hover:bg-[#c55409] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/services"
                  className="bg-white hover:bg-gray-100 text-[#006a34] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Voir nos services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
