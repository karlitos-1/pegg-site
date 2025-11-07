import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: "ri-code-s-slash-line",
      title: "Création de Sites Web",
      price: "À partir de 300 000 FCFA",
      description:
        "Conception et développement de sites web modernes, responsifs et optimisés pour tous les appareils. De la vitrine au site corporate.",
      link: "/services/creation-site-web",
    },
    {
      icon: "ri-shopping-cart-line",
      title: "E-commerce & Boutiques en ligne",
      price: "À partir de 500 000 FCFA",
      description:
        "Création de boutiques en ligne complètes avec gestion des produits, paiements sécurisés et suivi des commandes.",
      link: "/services",
    },
    {
      icon: "ri-smartphone-line",
      title: "Développement d'Applications Mobiles",
      price: "À partir de 800 000 FCFA",
      description:
        "Applications mobiles natives et multiplateformes pour iOS et Android, performantes et intuitives.",
      link: "/services",
    },
    {
      icon: "ri-megaphone-line",
      title: "Marketing Digital & Publicité",
      price: "À partir de 150 000 FCFA/mois",
      description:
        "Campagnes publicitaires ciblées sur Google Ads, Facebook Ads et Instagram pour maximiser votre visibilité.",
      link: "/services",
    },
    {
      icon: "ri-search-line",
      title: "SEO & Référencement",
      price: "À partir de 100 000 FCFA/mois",
      description:
        "Optimisation de votre site pour les moteurs de recherche et amélioration de votre positionnement sur Google.",
      link: "/services",
    },
    {
      icon: "ri-share-line",
      title: "Gestion des Réseaux Sociaux",
      price: "À partir de 80 000 FCFA/mois",
      description:
        "Gestion complète de vos réseaux sociaux : création de contenu, publication et engagement avec votre audience.",
      link: "/services",
    },
    {
      icon: "ri-palette-line",
      title: "Branding & Identité Visuelle",
      price: "À partir de 200 000 FCFA",
      description:
        "Création de votre identité visuelle complète : logo, charte graphique, supports de communication.",
      link: "/services",
    },
    {
      icon: "ri-tools-line",
      title: "Maintenance & Support Technique",
      price: "À partir de 50 000 FCFA/mois",
      description:
        "Maintenance régulière de votre site web : mises à jour, sauvegardes, corrections et support technique.",
      link: "/services",
    },
    {
      icon: "ri-computer-line",
      title: "Maintenance Informatique",
      price: "À partir de 75 000 FCFA/mois",
      description:
        "Support et maintenance de votre infrastructure informatique : serveurs, réseaux, postes de travail.",
      link: "/services",
    },
    {
      icon: "ri-graduation-cap-line",
      title: "Formation & Accompagnement Digital",
      price: "À partir de 100 000 FCFA/session",
      description:
        "Formation sur mesure pour vous et vos équipes : outils digitaux, gestion de site, réseaux sociaux.",
      link: "/services",
    },
    {
      icon: "ri-lightbulb-line",
      title: "Consultation & Stratégie Digitale",
      price: "À partir de 150 000 FCFA",
      description:
        "Audit et conseil stratégique pour définir votre stratégie digitale et optimiser votre présence en ligne.",
      link: "/services",
    },
    {
      icon: "ri-database-2-line",
      title: "Systèmes de Gestion (CRM/ERP)",
      price: "À partir de 1 000 000 FCFA",
      description:
        "Développement de systèmes de gestion sur mesure pour optimiser vos processus métier.",
      link: "/services",
    },
    {
      icon: "ri-server-line",
      title: "Hébergement & Noms de Domaine",
      price: "À partir de 30 000 FCFA/an",
      description:
        "Hébergement web fiable et sécurisé, noms de domaine et certificats SSL pour votre site internet.",
      link: "/services",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#006a34] to-[#004d26] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos Services Digitaux
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Solutions complètes pour votre transformation digitale au
              Congo-Brazzaville
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demande-devis"
                className="bg-[#e2630c] hover:bg-[#c55409] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#006a34] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Découvrez nos 13 services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous vos besoins digitaux, de la création
              de sites web au marketing digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-[#006a34]/10 text-[#006a34] p-4 rounded-lg">
                    <i className={`${service.icon} text-3xl`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <div className="text-[#e2630c] font-bold text-lg mb-4">
                  {service.price}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href={service.link}
                    className="bg-[#006a34] hover:bg-[#005528] text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Voir les détails
                  </Link>
                  <Link
                    href="/demande-devis"
                    className="bg-white hover:bg-gray-50 text-[#e2630c] border-2 border-[#e2630c] text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Demander un devis
                  </Link>
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et
              obtenir un devis gratuit
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/demande-devis"
                className="bg-[#e2630c] hover:bg-[#c55409] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/portfolio"
                className="bg-white hover:bg-gray-100 text-[#006a34] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
