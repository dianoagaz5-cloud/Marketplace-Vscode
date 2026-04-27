import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AssistantButton } from '../../../components/AssistantButton';
import { featuredProducts } from '../../../lib/marketplace-data';
import { ArrowLeft, ShoppingCart, MessageCircle, Star } from 'lucide-react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = featuredProducts.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <Link href="/boutique" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" />
            Retour à la boutique
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-slate-100">
              <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Additional product images would go here */}
              <div className="aspect-square overflow-hidden rounded-xl bg-slate-100">
                <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{product.category}</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">{product.title}</h1>
              <p className="mt-2 text-lg text-slate-600">Vendu par {product.vendor}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-600">(4.8 • 127 avis)</span>
              </div>
            </div>

            <div className="text-4xl font-semibold text-slate-950">
              {product.price.toLocaleString('fr-FR')} FCFA
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                Description détaillée du produit. Ce produit est de haute qualité et répond aux standards du marché béninois.
                Livraison rapide dans les principales villes du Bénin.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                <ShoppingCart className="h-4 w-4" />
                Ajouter au panier
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-700">
                <MessageCircle className="h-4 w-4" />
                Contacter le vendeur
              </button>
            </div>

            <div className="rounded-[2rem] bg-brand-50 p-6">
              <h3 className="font-semibold text-slate-950">Informations de livraison</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Livraison standard</span>
                  <span>2-3 jours ouvrés</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison express</span>
                  <span>24h (Cotonou)</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de port</span>
                  <span>À partir de 2 000 FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AssistantButton />
    </div>
  );
}