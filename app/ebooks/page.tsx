import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredEbooks } from '../../lib/marketplace-data';

export default function EbooksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Ebooks</p>
          <h1 className="section-title">Téléchargez des ebooks utiles et pratiques</h1>
          <p className="max-w-2xl text-slate-600">Guides, marketing digital et tutoriels locaux pour accompagner les entrepreneurs béninois.</p>
        </section>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredEbooks.map((ebook) => (
            <article key={ebook.id} className="card-surface grid gap-4 p-6 sm:grid-cols-[140px_1fr] sm:items-center">
              <img src={ebook.coverUrl} alt={ebook.title} className="h-40 w-full rounded-3xl object-cover sm:h-44 sm:w-36" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Ebook numérique</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">{ebook.title}</h2>
                <p className="mt-2 text-sm text-slate-600">Auteur : {ebook.author}</p>
                <div className="mt-5 flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>{ebook.price.toLocaleString('fr-FR')} FCFA</span>
                  <Link href="/contact" className="text-brand-600 hover:text-brand-700">Télécharger</Link>
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
