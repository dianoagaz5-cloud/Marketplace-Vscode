'use client';

import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { popularVendors } from '../../lib/marketplace-data';
import { motion } from 'framer-motion';
import { ChevronRight, Star, MapPin } from 'lucide-react';

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

export default function VendorsPage() {
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
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Vendeurs</p>
          <h1 className="section-title">Découvrez des boutiques et profils locaux</h1>
          <p className="max-w-2xl text-slate-600">Chaque vendeur possède une vitrine, des avis et un espace marchand clair, adapté au marché béninois.</p>
        </motion.section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 lg:grid-cols-3"
        >
          {popularVendors.map((vendor) => (
            <motion.div key={vendor.id} variants={item}>
              <article className="card-surface overflow-hidden group cursor-pointer hover:shadow-xl transition duration-300">
                <div className="h-44 bg-slate-100 overflow-hidden relative">
                  <img 
                    src={vendor.bannerUrl} 
                    alt={vendor.name} 
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 overflow-hidden flex-shrink-0">
                      <img 
                        src={vendor.profileUrl} 
                        alt={vendor.name} 
                        className="h-full w-full rounded-2xl object-cover" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-semibold text-slate-900">{vendor.name}</p>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-3 w-3" />
                        <span>{vendor.city}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{vendor.specialty}</p>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-brand-400 text-brand-400" />
                    ))}
                    <span className="text-xs text-slate-500">4.9</span>
                  </div>
                  <Link 
                    href={`/vendeurs/${vendor.name}`} 
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 group/link"
                  >
                    Visiter la vitrine
                    <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition" />
                  </Link>
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
