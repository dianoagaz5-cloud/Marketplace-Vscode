'use client';

import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredEbooks } from '../../lib/marketplace-data';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function EbooksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container space-y-12 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Ebooks</p>
          <h1 className="section-title">Téléchargez des ebooks utiles et pratiques</h1>
          <p className="max-w-2xl text-slate-600">Guides, marketing digital et tutoriels locaux pour accompagner les entrepreneurs béninois.</p>
        </motion.section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2"
        >
          {featuredEbooks.map((ebook) => (
            <motion.div key={ebook.id} variants={item}>
              <article className="card-surface grid gap-4 p-6 sm:grid-cols-[140px_1fr] sm:items-center group cursor-pointer hover:shadow-xl transition duration-300">
                <div className="overflow-hidden rounded-3xl">
                  <img 
                    src={ebook.coverUrl} 
                    alt={ebook.title} 
                    className="h-40 w-full rounded-3xl object-cover sm:h-44 sm:w-36 group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700 font-semibold">Ebook numérique</p>
                    <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition">{ebook.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">Auteur : {ebook.author}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-lg font-semibold text-brand-600">{ebook.price.toLocaleString('fr-FR')} FCFA</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition"
                    >
                      <Download className="h-4 w-4" />
                      Télécharger
                    </motion.button>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
