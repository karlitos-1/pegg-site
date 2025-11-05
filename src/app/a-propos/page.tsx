import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Award, Clock, Heart, Lightbulb, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function APropos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center border-b-4 border-[#e2630c]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/a-propos/ar.jpg")',
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              À propos de <span className="text-[#e2630c]">Pegg Site</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Votre partenaire digital de confiance pour transformer vos idées
              en succès numériques
            </p>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#006a34] mb-6">
                  Notre Histoire
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Fondée en 2020 à Pointe-Noire,{" "}
                  <strong className="text-[#006a34]">Pegg Site</strong> est née
                  de la passion de créer des solutions digitales innovantes pour
                  les entreprises congolaises et africaines. Notre mission est
                  de démocratiser l'accès aux technologies numériques et
                  d'accompagner nos clients dans leur transformation digitale.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Depuis nos débuts, nous avons aidé plus de 150 entreprises à
                  développer leur présence en ligne, générer des leads qualifiés
                  et augmenter leur chiffre d'affaires grâce à des stratégies
                  digitales sur mesure.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-bold text-[#006a34] mb-4">
                    Nos Certifications & Partenariats
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-[#e2630c] mr-3" />
                      <span className="text-gray-700">
                        Partenaire certifié Google Ads & Analytics
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-[#e2630c] mr-3" />
                      <span className="text-gray-700">
                        Meta Business Partner certifié
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-[#e2630c] mr-3" />
                      <span className="text-gray-700">
                        Certification ISO 2701 - Sécurité des données
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#e2630c] mb-1">
                      150+
                    </div>
                    <div className="text-sm text-gray-600">
                      Projets réalisés
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#e2630c] mb-1">
                      4
                    </div>
                    <div className="text-sm text-gray-600">
                      Années d'expérience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#e2630c] mb-1">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">
                      Clients satisfaits
                    </div>
                  </div>
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

        {/* Notre Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre <span className="text-[#006a34]">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Accompagner les entreprises dans leur transformation digitale en
                créant des solutions innovantes, performantes et adaptées à
                leurs besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Nous utilisons les dernières technologies pour créer des
                  solutions digitales avant-gardistes et performantes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Passion
                </h3>
                <p className="text-gray-600">
                  Chaque projet est mené avec passion et dévouement pour
                  garantir des résultats exceptionnels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-24 h-24 bg-[#e2630c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qualité
                </h3>
                <p className="text-gray-600">
                  Nous nous engageons à livrer des produits de haute qualité qui
                  dépassent les attentes de nos clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre <span className="text-[#006a34]">Équipe</span>
              </h2>
              <p className="text-lg text-gray-600">
                Une équipe de professionnels passionnés et expérimentés, dédiée
                à votre succès digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://ext.same-assets.com/2339639548/3527774627.false"
                  alt="Jean-Claude PEGG"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jean-Claude PEGG
                </h3>
                <p className="text-[#e2630c] font-semibold mb-3">
                  Directeur Général
                </p>
                <p className="text-sm text-gray-600">
                  Expert en stratégie digitale avec 8 ans d'expérience
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://ext.same-assets.com/2339639548/2578751592.false"
                  alt="Marie NKOUNKOU"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Marie NKOUNKOU
                </h3>
                <p className="text-[#e2630c] font-semibold mb-3">
                  Développeuse Web Senior
                </p>
                <p className="text-sm text-gray-600">
                  Spécialiste React, Node.js et applications mobiles
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://ext.same-assets.com/2339639548/3262279963.false"
                  alt="David MBEMBA"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  David MBEMBA
                </h3>
                <p className="text-[#e2630c] font-semibold mb-3">
                  Spécialiste Marketing Digital
                </p>
                <p className="text-sm text-gray-600">
                  Expert SEO, SEM et réseaux sociaux
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://ext.same-assets.com/2339639548/416741871.false"
                  alt="Grace LOUBAKI"
                  width={200}
                  height={200}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Grace LOUBAKI
                </h3>
                <p className="text-[#e2630c] font-semibold mb-3">
                  Designer UX/UI
                </p>
                <p className="text-sm text-gray-600">
                  Créatrice d'expériences utilisateur exceptionnelles
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos <span className="text-[#006a34]">Valeurs</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Écoute Client
                </h3>
                <p className="text-gray-600">
                  Nous plaçons nos clients au cœur de nos préoccupations et
                  adaptons nos solutions à leurs besoins.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque projet pour garantir des
                  résultats exceptionnels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  Nous travaillons en étroite collaboration avec nos clients
                  pour co-créer des solutions innovantes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#006a34] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ponctualité
                </h3>
                <p className="text-gray-600">
                  Nous respectons nos engagements et livrons nos projets dans
                  les délais convenus.
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
