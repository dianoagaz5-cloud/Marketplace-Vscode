'use client';

import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { featuredProducts } from '../../lib/marketplace-data';
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

export default function BoutiquePage() {
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
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Boutique</p>
          <h1 className="section-title">Produits physiques prêts à livrer au Bénin</h1>
          <p className="max-w-2xl text-slate-600">Trouvez des articles vérifiés, des vendeurs locaux et des offres avec livraison standard ou gratuite selon le montant.</p>
        </motion.section>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Link href={`/vendeurs/${product.vendor}`}>
                <article className="card-surface overflow-hidden group cursor-pointer hover:shadow-xl transition duration-300">
                  <div className="h-56 w-full bg-slate-100 overflow-hidden relative">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-700">{product.category}</p>
                    <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-brand-600 transition">{product.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">Vendeur : {product.vendor}</p>
                    <div className="mt-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-brand-400 text-brand-400" />
                      ))}
                      <span className="text-xs text-slate-500">4.8</span>
                    </div>
                    <div className="mt-5 flex items-center justify-between text-base font-semibold text-slate-900">
                      <span>{product.price.toLocaleString('fr-FR')} FCFA</span>
                      <ChevronRight className="h-5 w-5 text-brand-600 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
