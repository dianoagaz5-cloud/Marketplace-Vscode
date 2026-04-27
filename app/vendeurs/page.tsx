import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { popularVendors } from '../../lib/marketplace-data';

export default function VendorsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Vendeurs</p>
          <h1 className="section-title">Découvrez des boutiques et profils locaux</h1>
          <p className="max-w-2xl text-slate-600">Chaque vendeur possède une vitrine, des avis et un espace marchand clair, adapté au marché béninois.</p>
        </section>
        <div className="grid gap-6 lg:grid-cols-3">
          {popularVendors.map((vendor) => (
            <article key={vendor.id} className="card-surface overflow-hidden">
              <div className="h-44 bg-slate-100">
                <img src={vendor.bannerUrl} alt={vendor.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100">
                    <img src={vendor.profileUrl} alt={vendor.name} className="h-full w-full rounded-2xl object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{vendor.name}</p>
                    <p className="text-sm text-slate-500">{vendor.city}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{vendor.specialty}</p>
                <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Voir la boutique
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
