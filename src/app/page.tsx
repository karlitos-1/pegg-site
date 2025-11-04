import Footer from "@/components/Footer";
import Header from "@/components/Header";

import {
  CheckCircle,
  Clock,
  Monitor,
  Search,
  Share2,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 106, 52, 0.85), rgba(0, 106, 52, 0.85)), url("https://ext.same-assets.com/2339639548/1174603474.false")',
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Votre <span className="text-[#e2630c]">Vision Digitale</span>
                  <br />
                  Notre <span className="text-[#e2630c]">Expertise</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  PeggSite transforme vos idées en solutions digitales
                  performantes. Sites web, applications, marketing digital -
                  nous créons votre succès en ligne.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/demande-devis"
                    className="bg-white text-[#006a34] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Demander un devis gratuit
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#006a34] transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Découvrir nos services
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-2xl p-8">
                <Image
                  src="https://ext.same-assets.com/2339639548/1174603474.false"
                  alt="Équipe PeggSite"
                  width={600}
                  height={400}
                  className="rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Votre Partenaire Digital
                </h3>
                <p className="text-gray-600 mb-6">
                  Une équipe d'experts passionnés à votre service pour
                  transformer vos idées en succès digital.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Expertise reconnue depuis 4 ans
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                      150+ projets réalisés avec succès
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-[#e2630c] rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">
                      Support 24/7 et suivi personnalisé
                    </span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block bg-[#006a34] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200 text-center"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Des <span className="text-[#006a34]">Résultats</span> qui
                parlent
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre expertise se mesure par la satisfaction de nos clients et
                l'impact de nos solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  150+
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Projets réalisés
                </div>
                <div className="text-sm text-gray-600">
                  Sites web, apps, campagnes
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  98%
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Clients satisfaits
                </div>
                <div className="text-sm text-gray-600">
                  Taux de satisfaction élevé
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  4
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Années d'expérience
                </div>
                <div className="text-sm text-gray-600">Expertise confirmée</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e2630c] mb-2">
                  24/7
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  Support client
                </div>
                <div className="text-sm text-gray-600">Assistance continue</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Qui sommes-nous ?
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>PeggSite</strong> est une agence digitale innovante
                  basée à Pointe-Noire, spécialisée dans la création de
                  solutions web sur mesure. Nous accompagnons les entreprises
                  dans leur transformation digitale avec passion et expertise.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Notre mission : faire de votre présence en ligne un véritable
                  levier de croissance grâce à des technologies modernes et des
                  stratégies marketing efficaces.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#006a34] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Garantie Qualité
                      </h4>
                      <p className="text-sm text-gray-600">
                        Satisfaction garantie ou remboursé
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#e2630c] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Livraison Rapide
                      </h4>
                      <p className="text-sm text-gray-600">
                        Respect des délais convenus
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-block bg-[#006a34] text-white px-6 py-2 rounded-lg">
                  <span className="text-2xl font-bold">+4 ans</span>
                  <span className="ml-2">d'expertise</span>
                </div>
              </div>

              <div>
                <Image
                  src="https://ext.same-assets.com/2339639548/6386136.false"
                  alt="Bureau PeggSite"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos <span className="text-[#006a34]">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des solutions digitales complètes pour propulser votre business
                vers le succès
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Création de Sites Web
                </h3>
                <p className="text-gray-600 mb-4">
                  Sites web modernes, responsives et optimisés pour convertir
                  vos visiteurs en clients. Design sur mesure et développement
                  professionnel.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Applications Mobiles
                </h3>
                <p className="text-gray-600 mb-4">
                  Développement d'applications mobiles natives et hybrides pour
                  iOS et Android. Interface intuitive et performance optimale.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Marketing Digital
                </h3>
                <p className="text-gray-600 mb-4">
                  Stratégies marketing complètes : SEO, publicité en ligne,
                  réseaux sociaux et campagnes ciblées pour booster votre
                  visibilité.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Référencement SEO
                </h3>
                <p className="text-gray-600 mb-4">
                  Optimisation pour les moteurs de recherche afin d'améliorer
                  votre positionnement Google et attirer plus de clients
                  qualifiés.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>

              {/* Service 5 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Gestion Réseaux Sociaux
                </h3>
                <p className="text-gray-600 mb-4">
                  Animation et gestion professionnelle de vos comptes Facebook,
                  Instagram, LinkedIn pour engager votre communauté.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>

              {/* Service 6 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#006a34] to-[#e2630c] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cybersécurité
                </h3>
                <p className="text-gray-600 mb-4">
                  Protection complète de vos données avec solutions antivirus,
                  firewall, sauvegardes sécurisées et formation de vos équipes.
                </p>
                <Link
                  href="/services"
                  className="text-[#006a34] font-semibold hover:text-[#005028] inline-flex items-center"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-[#006a34] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#005028] transition-colors duration-200"
              >
                Voir tous nos services
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce que disent nos{" "}
                <span className="text-[#e2630c]">clients</span>
              </h2>
              <p className="text-lg text-gray-600">
                La satisfaction de nos clients est notre plus belle récompense
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "PeggSite a transformé notre présence en ligne. Notre site
                  e-commerce génère maintenant 40% de notre chiffre d'affaires
                  !"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Marie Dubois</p>
                  <p className="text-sm text-[#006a34]">Boutique Élégance</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Excellent travail sur notre site web et nos réseaux sociaux.
                  Nous avons doublé notre clientèle en 6 mois."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    Jean-Claude Moukala
                  </p>
                  <p className="text-sm text-[#006a34]">
                    Restaurant Le Palmier
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Une équipe professionnelle qui comprend nos besoins. Le
                  référencement de notre site s'est considérablement amélioré."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-[#006a34]">Consulting Pro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies <span className="text-[#006a34]">Modernes</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous utilisons les dernières technologies pour créer des
                solutions performantes et évolutives
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {["React", "Node.js", "Mobile", "Database", "Cloud", "SEO"].map(
                (tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <p className="font-semibold text-gray-900">{tech}</p>
                  </div>
                )
              )}
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
