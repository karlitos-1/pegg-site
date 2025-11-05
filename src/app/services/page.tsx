import Footer from "@/components/Footer";
import Header from "@/components/Header";

import {
  CheckCircle,
  Clock,
  Database,
  Globe,
  GraduationCap,
  Headphones,
  Monitor,
  Palette,
  Search,
  Server,
  Share2,
  Shield,
  Smartphone,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Création de Sites Web",
    price: "À partir de 300 000 FCFA",
    description:
      "Sites web modernes, responsives et optimisés pour tous les appareils",
    duration: "Durée : 2-4 semaines",
    features: [
      "Design responsive et moderne",
      "Optimisation SEO de base",
      "Hébergement inclus (1 an)",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Boutiques en ligne",
    price: "À partir de 500 000 FCFA",
    description:
      "Plateformes de vente en ligne complètes avec paiement sécurisé",
    duration: "Durée : 3-6 semaines",
    features: [
      "Catalogue produits illimité",
      "Panier et commandes",
      "Paiement mobile money",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Smartphone,
    title: "Développement d'Applications Mobiles",
    price: "À partir de 800 000 FCFA",
    description: "Applications natives et hybrides pour iOS et Android",
    duration: "Durée : 6-12 semaines",
    features: [
      "Applications natives iOS/Android",
      "Interface utilisateur intuitive",
      "Intégration API",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital & Publicité",
    price: "À partir de 150 000 FCFA/mois",
    description: "Stratégies marketing complètes pour booster votre visibilité",
    duration: "Durée : Contrat mensuel",
    features: [
      "Stratégie marketing personnalisée",
      "Gestion réseaux sociaux",
      "Campagnes publicitaires",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Search,
    title: "SEO & Référencement",
    price: "À partir de 100 000 FCFA/mois",
    description:
      "Optimisation pour les moteurs de recherche et visibilité Google",
    duration: "Durée : 3-6 mois minimum",
    features: [
      "Audit SEO complet",
      "Optimisation technique",
      "Création de contenu SEO",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Share2,
    title: "Gestion des Réseaux Sociaux",
    price: "À partir de 80 000 FCFA/mois",
    description: "Animation et gestion professionnelle de vos comptes sociaux",
    duration: "Durée : Contrat mensuel",
    features: [
      "Création de contenu visuel",
      "Publication programmée",
      "Community management",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    price: "À partir de 200 000 FCFA",
    description: "Création d'identité de marque forte et mémorable",
    duration: "Durée : 2-3 semaines",
    features: [
      "Logo professionnel",
      "Charte graphique complète",
      "Cartes de visite",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support Technique",
    price: "À partir de 50 000 FCFA/mois",
    description: "Maintenance continue et support technique pour vos projets",
    duration: "Durée : Contrat mensuel",
    features: [
      "Mises à jour sécurité",
      "Sauvegardes automatiques",
      "Support technique prioritaire",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Server,
    title: "Maintenance Informatique",
    price: "À partir de 75 000 FCFA/mois",
    description: "Maintenance et dépannage de vos équipements informatiques",
    duration: "Durée : Contrat mensuel",
    features: [
      "Maintenance préventive",
      "Dépannage sur site",
      "Installation logiciels",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement Digital",
    price: "À partir de 100 000 FCFA/session",
    description: "Formation de vos équipes aux outils et stratégies digitales",
    duration: "Durée : 1-3 jours",
    features: [
      "Formation sur mesure",
      "Ateliers pratiques",
      "Support pédagogique",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Target,
    title: "Consultation & Stratégie Digitale",
    price: "À partir de 150 000 FCFA",
    description:
      "Audit et conseil stratégique pour votre transformation digitale",
    duration: "Durée : 1-2 semaines",
    features: [
      "Audit digital complet",
      "Stratégie personnalisée",
      "Plan d'action détaillé",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Database,
    title: "Systèmes de Gestion (CRM/ERP)",
    price: "À partir de 1 000 000 FCFA",
    description: "Solutions de gestion d'entreprise sur mesure",
    duration: "Durée : 8-16 semaines",
    features: [
      "Gestion clients (CRM)",
      "Gestion des ressources (ERP)",
      "Tableaux de bord",
      "+2 autres fonctionnalités",
    ],
  },
  {
    icon: Globe,
    title: "Hébergement & Noms de Domaine",
    price: "À partir de 30 000 FCFA/an",
    description: "Solutions d'hébergement fiables et sécurisées",
    duration: "Durée : Abonnement annuel",
    features: [
      "Hébergement haute performance",
      "Certificat SSL inclus",
      "Sauvegardes quotidiennes",
      "+2 autres fonctionnalités",
    ],
  },
];

function ShoppingCart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/services/ar.jpg")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Services <span className="text-[#e2630c]">Digitaux</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Des solutions complètes pour propulser votre entreprise dans l'ère
              numérique
            </p>
          </div>
        </section>

        {/* Garanties */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Livraison Garantie
                </h3>
                <p className="text-gray-600">
                  Respect des délais convenus ou remboursement partiel
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Support 24/7
                </h3>
                <p className="text-gray-600">
                  Assistance technique continue après livraison
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Garantie Qualité
                </h3>
                <p className="text-gray-600">
                  Satisfaction garantie ou révisions gratuites
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#e2630c] font-bold mb-3">
                      {service.price}
                    </p>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {service.duration}
                    </p>

                    <h4 className="font-semibold text-gray-900 mb-2">
                      Inclus :
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-[#006a34] mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-2">
                      <Link
                        href="/services"
                        className="block text-center bg-[#006a34] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200"
                      >
                        Voir les détails
                      </Link>
                      <Link
                        href="/demande-devis"
                        className="block text-center border-2 border-[#006a34] text-[#006a34] px-6 py-2 rounded-lg font-semibold hover:bg-[#006a34] hover:text-white transition-all duration-200"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Pegg Site */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pourquoi choisir{" "}
                <span className="text-[#006a34]">Pegg Site</span> ?
              </h2>
              <p className="text-lg text-gray-600">
                Notre expertise et notre approche personnalisée font la
                différence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Expertise Reconnue
                </h3>
                <p className="text-gray-600">
                  Plus de 4 ans d'expérience et 150+ projets réussis dans le
                  digital
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Support Dédié
                </h3>
                <p className="text-gray-600">
                  Accompagnement personnalisé et support technique réactif
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation Continue
                </h3>
                <p className="text-gray-600">
                  Technologies modernes et solutions innovantes adaptées à vos
                  besoins
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tarifs Transparents
                </h3>
                <p className="text-gray-600">
                  Devis détaillés sans surprise et options de paiement flexibles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Processus */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre{" "}
                <span className="text-[#006a34]">Processus de Travail</span>
              </h2>
              <p className="text-lg text-gray-600">
                Une méthodologie éprouvée pour garantir le succès de votre
                projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#e2630c] rounded-full opacity-20 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  Analyse de vos besoins et définition des objectifs du projet
                </p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#e2630c] rounded-full opacity-20 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Planification
                </h3>
                <p className="text-gray-600">
                  Élaboration de la stratégie et du plan de développement
                  détaillé
                </p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#e2630c] rounded-full opacity-20 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Développement
                </h3>
                <p className="text-gray-600">
                  Création et développement de votre solution avec suivi
                  régulier
                </p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#e2630c] rounded-full opacity-20 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lancement
                </h3>
                <p className="text-gray-600">
                  Mise en ligne, formation et accompagnement post-lancement
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
