import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AssistantButton } from '../../../components/AssistantButton';
import { featuredServices } from '../../../lib/marketplace-data';
import { ArrowLeft, MessageCircle, Star, Clock, MapPin } from 'lucide-react';

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = featuredServices.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" />
            Retour aux services
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-slate-100">
              <img src="/api/placeholder/600/600" alt={service.title} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{service.category}</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">{service.title}</h1>
              <p className="mt-2 text-lg text-slate-600">Proposé par {service.vendor}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-600">(4.9 • 89 avis)</span>
              </div>
            </div>

            <div className="text-4xl font-semibold text-slate-950">
              {service.price.toLocaleString('fr-FR')} FCFA
              {service.negotiable && <span className="ml-2 text-sm font-normal text-slate-600">(négociable)</span>}
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                Description détaillée du service. Ce professionnel offre des services de qualité adaptés au marché béninois.
                Intervention rapide et professionnelle garantie.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock className="h-5 w-5 text-brand-600" />
                <span>Délai: 2-5 jours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin className="h-5 w-5 text-brand-600" />
                <span>Cotonou & environs</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                <MessageCircle className="h-4 w-4" />
                Commander le service
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-700">
                <MessageCircle className="h-4 w-4" />
                Poser une question
              </button>
            </div>

            <div className="rounded-[2rem] bg-brand-50 p-6">
              <h3 className="font-semibold text-slate-950">À propos du prestataire</h3>
              <p className="mt-3 text-sm text-slate-600">
                Professionnel expérimenté avec plus de 5 ans d'expérience dans le domaine.
                Références disponibles sur demande.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AssistantButton />
    </div>
  );
}