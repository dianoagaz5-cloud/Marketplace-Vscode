import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredServices } from '../../lib/marketplace-data';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Services</p>
          <h1 className="section-title">Réservez des services fiables au Bénin</h1>
          <p className="max-w-2xl text-slate-600">Développeurs, designers, réparateurs et livreurs. Chaque fiche service est optimisée pour la conversion et le contact direct.</p>
        </section>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <article key={service.id} className="card-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{service.category}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Vendeur : {service.vendor}</p>
              <p className="mt-3 text-sm text-slate-600">{service.negotiable ? 'Prix négociable' : 'Prix fixe'} • Portfolio possible</p>
              <div className="mt-5 flex items-center justify-between text-base font-semibold text-slate-900">
                <span>{service.price.toLocaleString('fr-FR')} FCFA</span>
                <Link href="/contact" className="text-brand-600 hover:text-brand-700">Contacter</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
