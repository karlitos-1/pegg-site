"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Makala Market",
    category: "E-commerce",
    image: "https://ext.same-assets.com/2339639548/2773651635.false",
    description:
      "Plateforme e-commerce complète pour la vente de produits locaux avec système de paiement mobile money.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "App Mobile BankoCongo",
    category: "Applications Mobiles",
    image: "https://ext.same-assets.com/2339639548/4180533129.false",
    description:
      "Application mobile de services bancaires avec fonctionnalités de transfert d'argent et gestion de compte.",
    technologies: ["React Native", "Firebase", "API REST"],
  },
  {
    id: 3,
    title: "Site Vitrine Hôtel Meridien",
    category: "Sites Vitrine",
    image: "https://ext.same-assets.com/2339639548/3048386361.false",
    description:
      "Site web élégant pour un hôtel de luxe avec système de réservation en ligne et galerie photo.",
    technologies: ["WordPress", "PHP", "MySQL"],
  },
  {
    id: 4,
    title: "Campagne Digital Telecel",
    category: "Marketing Digital",
    image: "https://ext.same-assets.com/2339639548/568313467.false",
    description:
      "Stratégie marketing digital complète avec augmentation de 300% de l'engagement sur les réseaux sociaux.",
    technologies: ["Facebook Ads", "Google Ads", "Analytics"],
  },
  {
    id: 5,
    title: "Plateforme EdTech EduCongo",
    category: "Sites Web",
    image: "https://ext.same-assets.com/2339639548/4263733787.false",
    description:
      "Plateforme d'apprentissage en ligne pour l'éducation avec cours vidéo et système d'évaluation.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
  },
  {
    id: 6,
    title: "App Logistique TransCongo",
    category: "Applications Mobiles",
    image: "https://ext.same-assets.com/2339639548/1315890379.false",
    description:
      "Application de gestion logistique pour le suivi des livraisons et optimisation des routes.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
  },
  {
    id: 7,
    title: "Site Corporate SNPC",
    category: "Sites Vitrine",
    image: "https://ext.same-assets.com/2339639548/960752939.false",
    description:
      "Site web corporate moderne pour une entreprise pétrolière avec présentation des activités et actualités.",
    technologies: ["React", "Strapi", "PostgreSQL"],
  },
  {
    id: 8,
    title: "Boutique en ligne Fashion Congo",
    category: "E-commerce",
    image: "https://ext.same-assets.com/2339639548/322294308.false",
    description:
      "Boutique de mode en ligne avec catalogue produits, panier d'achat et système de paiement sécurisé.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    id: 9,
    title: "Système de Gestion Hospitalière MediCongo",
    category: "Sites Web",
    image: "https://ext.same-assets.com/2339639548/290090350.false",
    description:
      "Plateforme complète de gestion hospitalière avec dossiers patients, planification des rendez-vous et facturation.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
  },
];

const testimonials = [
  {
    name: "Jean MAKAYA",
    role: "PDG, Makala Market",
    image: "https://ext.same-assets.com/2339639548/2660696870.false",
    content:
      "Pegg Site a transformé notre vision en une plateforme e-commerce exceptionnelle. Nos ventes ont augmenté de 250% depuis le lancement.",
  },
  {
    name: "Marie LOUBAKI",
    role: "Directrice, Hôtel Meridien",
    image: "https://ext.same-assets.com/2339639548/4094138992.false",
    content:
      "Un travail remarquable ! Notre nouveau site web reflète parfaitement l'élégance de notre hôtel. Les réservations en ligne ont doublé.",
  },
  {
    name: "David NKOUNKOU",
    role: "CTO, EduCongo",
    image: "https://ext.same-assets.com/2339639548/719823424.false",
    content:
      "L'équipe Pegg Site a créé une plateforme d'apprentissage innovante qui révolutionne l'éducation en ligne au Congo. Excellent travail !",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous les projets");

  const categories = [
    "Tous les projets",
    "Sites Web",
    "Applications Mobiles",
    "E-commerce",
    "Sites Vitrine",
    "Marketing Digital",
  ];

  const filteredProjects =
    activeFilter === "Tous les projets"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/portfolio/ar.jpg")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-[#e2630c]">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Découvrez nos réalisations et les succès de nos clients à travers
              des projets innovants et performants
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  150+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Projets réalisés
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  98%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Clients satisfaits
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  50+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Sites web créés
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  25+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Apps développées
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-[#006a34] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[#e2630c] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/portfolio/makala-market"
                      className="block text-center bg-[#006a34] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200"
                    >
                      Voir le projet
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce que disent nos{" "}
                <span className="text-[#006a34]">clients</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#006a34]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#006a34] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre projet sera le prochain succès ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Rejoignez nos clients satisfaits et transformez votre vision en
                réalité
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/demande-devis"
                  className="bg-[#e2630c] hover:bg-[#c55409] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Démarrer mon projet
                </Link>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-[#006a34] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Discuter de mon idée
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
