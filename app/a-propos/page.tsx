import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">À propos</p>
          <h1 className="section-title">Une marketplace made in Bénin</h1>
          <p className="max-w-3xl text-slate-600 leading-8">
            Marketplace est une plateforme conçue pour rapprocher les consommateurs béninois des vendeurs locaux.
            Produits physiques, services et ebooks sont regroupés dans une expérience fluide et adaptée aux connexions mobiles africaines.
          </p>
        </section>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-900">Valeurs locales</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Support aux entrepreneurs béninois, simplicité d'utilisation et transparence sur les commissions.</p>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-900">Performance</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Pages rapides, mobile-first, animations légères et interface intuitive pour tous les utilisateurs.</p>
          </div>
          <div className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-900">Sécurité</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Authentification sécurisée, validation administrative et liens de téléchargement protégés pour les ebooks.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
