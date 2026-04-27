import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AssistantButton } from '../../../components/AssistantButton';
import { featuredEbooks } from '../../../lib/marketplace-data';
import { ArrowLeft, Download, Star, BookOpen, FileText } from 'lucide-react';

interface EbookPageProps {
  params: {
    id: string;
  };
}

export default function EbookPage({ params }: EbookPageProps) {
  const ebook = featuredEbooks.find(e => e.id === params.id);

  if (!ebook) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-10">
        <div className="mb-8">
          <Link href="/ebooks" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft className="h-4 w-4" />
            Retour aux ebooks
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-slate-100">
              <img src={ebook.coverUrl} alt={ebook.title} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Ebook</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">{ebook.title}</h1>
              <p className="mt-2 text-lg text-slate-600">Par {ebook.author}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-slate-600">(4.7 • 203 avis)</span>
              </div>
            </div>

            <div className="text-4xl font-semibold text-slate-950">
              {ebook.price.toLocaleString('fr-FR')} FCFA
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                Description détaillée de l'ebook. Ce guide pratique vous aidera à maîtriser les concepts essentiels
                pour réussir dans votre domaine. Format PDF de haute qualité, accessible immédiatement après achat.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <FileText className="h-5 w-5 text-brand-600" />
                <span>Format PDF</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <BookOpen className="h-5 w-5 text-brand-600" />
                <span>120 pages</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                <Download className="h-4 w-4" />
                Acheter et télécharger
              </button>
            </div>

            <div className="rounded-[2rem] bg-brand-50 p-6">
              <h3 className="font-semibold text-slate-950">Ce que vous apprendrez</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Concepts fondamentaux et avancés</li>
                <li>• Études de cas pratiques</li>
                <li>• Conseils d'experts du domaine</li>
                <li>• Ressources complémentaires</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-green-50 p-6">
              <h3 className="font-semibold text-green-950">Garantie satisfait ou remboursé</h3>
              <p className="mt-3 text-sm text-green-700">
                Si le contenu ne correspond pas à vos attentes, vous pouvez demander un remboursement
                dans les 30 jours suivant l'achat.
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