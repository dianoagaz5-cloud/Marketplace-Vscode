import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredProducts } from '../../lib/marketplace-data';

export default function BoutiquePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Boutique</p>
          <h1 className="section-title">Produits physiques prêts à livrer au Bénin</h1>
          <p className="max-w-2xl text-slate-600">Trouvez des articles vérifiés, des vendeurs locaux et des offres avec livraison standard ou gratuite selon le montant.</p>
        </section>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.id} className="card-surface overflow-hidden">
              <img src={product.imageUrl} alt={product.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{product.category}</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h2>
                <p className="mt-3 text-sm text-slate-600">Vendeur : {product.vendor}</p>
                <div className="mt-5 flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>{product.price.toLocaleString('fr-FR')} FCFA</span>
                  <Link href="/contact" className="text-brand-600 hover:text-brand-700">Commander</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
