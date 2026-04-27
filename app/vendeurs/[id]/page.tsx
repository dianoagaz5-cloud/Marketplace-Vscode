import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AssistantButton } from '../../../components/AssistantButton';
import { popularVendors, featuredProducts } from '../../../lib/marketplace-data';
import { ArrowLeft, MapPin, Star, MessageCircle, ShoppingBag } from 'lucide-react';

interface VendorPageProps {
  params: {
    id: string;
  };
}

export default function VendorPage({ params }: VendorPageProps) {
  const vendor = popularVendors.find(v => v.id === params.id);

  if (!vendor) {
    notFound();
  }

  // Get products from this vendor
  const vendorProducts = featuredProducts.filter(p => p.vendor === vendor.name);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <Link href="/vendeurs" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" />
            Retour aux vendeurs
          </Link>
        </div>

        {/* Vendor Header */}
        <div className="mb-12 overflow-hidden rounded-[2rem] bg-slate-100">
          <div className="aspect-[3/1] bg-slate-200">
            <img src={vendor.bannerUrl} alt={vendor.name} className="h-full w-full object-cover" />
          </div>
          <div className="p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-slate-950">{vendor.name}</h1>
                <p className="mt-2 text-lg text-slate-600">{vendor.specialty}</p>
                <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{vendor.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 (156 avis)</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-700">
                  <MessageCircle className="h-4 w-4" />
                  Contacter
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                  <ShoppingBag className="h-4 w-4" />
                  Voir les produits
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Description */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-slate-950">À propos de {vendor.name}</h2>
            <p className="mt-4 text-slate-600">
              {vendor.name} est un vendeur de confiance spécialisé dans {vendor.specialty.toLowerCase()}.
              Nous proposons des produits de qualité adaptés au marché béninois, avec un service client
              réactif et des délais de livraison respectés.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-brand-50 p-4">
                <p className="font-semibold text-brand-950">Livraison</p>
                <p className="mt-1 text-sm text-brand-700">Dans toute la zone {vendor.city}</p>
              </div>
              <div className="rounded-xl bg-green-50 p-4">
                <p className="font-semibold text-green-950">Paiement</p>
                <p className="mt-1 text-sm text-green-700">MTN MoMo, Moov Money</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-950">Statistiques</h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Produits actifs</span>
                  <span className="font-semibold">{vendorProducts.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Ventes ce mois</span>
                  <span className="font-semibold">127</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Temps de réponse</span>
                  <span className="font-semibold">&lt; 2h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Products */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Produits de {vendor.name}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {vendorProducts.map((product) => (
              <article key={product.id} className="card-surface overflow-hidden">
                <div className="h-56 bg-slate-100">
                  <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{product.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-base font-semibold text-slate-900">
                    <span>{product.price.toLocaleString('fr-FR')} FCFA</span>
                    <Link href={`/boutique/${product.id}`} className="text-brand-600 hover:text-brand-700">Détails</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <AssistantButton />
    </div>
  );
}