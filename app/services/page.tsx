'use client';

import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredServices } from '../../lib/marketplace-data';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

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

export default function ServicesPage() {
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
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Services</p>
          <h1 className="section-title">Réservez des services fiables au Bénin</h1>
          <p className="max-w-2xl text-slate-600">Développeurs, designers, réparateurs et livreurs. Chaque fiche service est optimisée pour la conversion et le contact direct.</p>
        </motion.section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-3"
        >
          {featuredServices.map((service) => (
            <motion.div key={service.id} variants={item}>
              <article className="card-surface p-6 group cursor-pointer hover:shadow-xl transition duration-300 h-full">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{service.category}</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Vendeur : {service.vendor}</p>
                <div className="mt-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-400 text-brand-400" />
                  ))}
                  <span className="text-xs text-slate-500">4.7</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{service.negotiable ? '✓ Prix négociable' : '✓ Prix fixe'} • Portfolio possible</p>
                <div className="mt-5 flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>{service.price.toLocaleString('fr-FR')} FCFA</span>
                  <ChevronRight className="h-5 w-5 text-brand-600 group-hover:translate-x-1 transition" />
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
