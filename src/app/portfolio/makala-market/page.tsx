import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function MakalaMarketPage() {
  const projectInfo = [
    { label: "Client", value: "Makala Market SARL", icon: "ri-building-line" },
    { label: "Durée", value: "4 mois", icon: "ri-calendar-line" },
    { label: "Équipe", value: "5 développeurs", icon: "ri-team-line" },
    { label: "Lancement", value: "Mars 2023", icon: "ri-rocket-line" },
  ];

  const results = [
    {
      metric: "250%",
      label: "Augmentation des ventes",
      icon: "ri-line-chart-line",
    },
    { metric: "5000+", label: "Utilisateurs actifs", icon: "ri-user-line" },
    { metric: "200+", label: "Vendeurs partenaires", icon: "ri-store-line" },
    { metric: "98%", label: "Satisfaction client", icon: "ri-star-line" },
  ];

  const technologies = [
    {
      name: "React.js",
      description: "Interface utilisateur dynamique",
      icon: "ri-reactjs-line",
    },
    {
      name: "Node.js",
      description: "Backend performant",
      icon: "ri-nodejs-line",
    },
    {
      name: "MongoDB",
      description: "Base de données NoSQL",
      icon: "ri-database-2-line",
    },
    {
      name: "Stripe",
      description: "Paiements sécurisés",
      icon: "ri-bank-card-line",
    },
  ];

  const features = [
    {
      title: "Catalogue produits multi-vendeurs",
      description:
        "Gestion complète des produits avec catégories, filtres et recherche avancée.",
      icon: "ri-shopping-bag-3-line",
    },
    {
      title: "Système de paiement sécurisé",
      description: "Intégration Stripe pour des transactions sûres et rapides.",
      icon: "ri-secure-payment-line",
    },
    {
      title: "Tableau de bord vendeur",
      description:
        "Interface complète pour les vendeurs avec statistiques et gestion des commandes.",
      icon: "ri-dashboard-line",
    },
    {
      title: "Application mobile responsive",
      description: "Expérience optimisée sur tous les appareils mobiles.",
      icon: "ri-smartphone-line",
    },
    {
      title: "Système de notation et avis",
      description:
        "Les clients peuvent noter et commenter les produits et vendeurs.",
      icon: "ri-star-smile-line",
    },
    {
      title: "Suivi de commande en temps réel",
      description: "Notifications et suivi GPS de la livraison.",
      icon: "ri-map-pin-line",
    },
  ];

  const screenshots = [
    {
      url: "https://ext.same-assets.com/pegg-site/makala-home.jpg",
      title: "Page d'accueil",
    },
    {
      url: "https://ext.same-assets.com/pegg-site/makala-products.jpg",
      title: "Catalogue produits",
    },
    {
      url: "https://ext.same-assets.com/pegg-site/makala-dashboard.jpg",
      title: "Tableau de bord",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006a34] to-[#004d26] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-[#e2630c] px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold">E-commerce</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  E-commerce Makala Market
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  Plateforme e-commerce complète pour la vente de produits
                  locaux au Congo-Brazzaville
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Stripe
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-[#e2630c] hover:bg-[#c55409] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Projet similaire ?
                  </Link>
                  <Link
                    href="/portfolio"
                    className="bg-white hover:bg-gray-100 text-[#006a34] px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Voir tous les projets
                  </Link>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ext.same-assets.com/pegg-site/makala-market.jpg"
                  alt="Makala Market"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Project */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              À propos du projet
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Makala Market est une plateforme e-commerce innovante qui
                connecte les vendeurs locaux congolais avec des clients à
                travers tout le pays. Le projet visait à digitaliser le commerce
                local et faciliter les transactions en ligne.
              </p>
              <p className="mb-4">
                Nous avons développé une solution complète comprenant une
                interface client intuitive, un tableau de bord vendeur complet,
                un système de paiement sécurisé et une gestion logistique
                intégrée.
              </p>
              <p>
                La plateforme supporte plusieurs centaines de vendeurs et traite
                des milliers de commandes chaque mois, contribuant
                significativement à l'économie digitale du Congo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Informations du projet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <i className={`${info.icon} text-5xl text-[#006a34] mb-4`} />
                  <div className="text-gray-600 mb-2">{info.label}</div>
                  <div className="text-xl font-bold text-gray-900">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#006a34] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Résultats obtenus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <i
                    className={`${result.icon} text-5xl mb-4 text-[#e2630c]`}
                  />
                  <div className="text-5xl font-bold mb-3">{result.metric}</div>
                  <div className="text-lg text-white/90">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Technologies utilisées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <i className={`${tech.icon} text-6xl text-[#006a34] mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Fonctionnalités principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-[#006a34]/10 text-[#006a34] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-3xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-[#006a34]">
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-3xl text-[#e2630c]" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic leading-relaxed">
                "Pegg Site a transformé notre vision en une plateforme
                e-commerce performante qui dépasse toutes nos attentes. Leur
                expertise technique et leur compréhension de nos besoins ont été
                exceptionnelles. Nous avons triplé nos ventes en seulement 6
                mois !"
              </blockquote>
              <div className="text-center">
                <div className="font-bold text-xl text-gray-900 mb-1">
                  Jean MAKAYA
                </div>
                <div className="text-gray-600">PDG, Makala Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Aperçu de la plateforme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">
                      {screenshot.title}
                    </h3>
                  </div>
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
              Vous avez un projet e-commerce ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Créons ensemble votre plateforme e-commerce de succès
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
