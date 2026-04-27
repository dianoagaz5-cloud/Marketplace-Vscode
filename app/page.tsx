import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AssistantButton } from '../components/AssistantButton';
import { categories, featuredProducts, featuredServices, featuredEbooks, popularVendors } from '../lib/marketplace-data';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="card-surface group overflow-hidden p-6 transition hover:-translate-y-1 hover:bg-brand-50/80">
      <p className="text-sm font-semibold text-brand-700">{title}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-700">
        Voir plus
        <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main 
        className="container space-y-24 py-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.section 
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">
              Compatible Bénin • FCFA • Motion léger
            </span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Achetez et vendez facilement au Bénin.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Une marketplace professionnelle, mobile-first et conçue pour les vendeurs et acheteurs locaux.
                Produits physiques, services, ebooks et chat direct dans une interface claire.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/boutique" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-700">
                Explorer la boutique
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 hover:text-brand-700">
                Je veux vendre
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-600/10 p-8 text-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_35%)]" />
            <div className="relative space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Ventes flash</p>
                <p className="mt-4 text-3xl font-semibold">-30% sur la sélection mobile</p>
                <p className="mt-3 text-sm leading-6 text-white/80">Livraison rapide Cotonou & Abomey-Calavi.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-sm text-white/80">Temps restant</p>
                  <p className="mt-3 text-3xl font-semibold">03:12:45</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5">
                  <p className="text-sm text-white/80">Livraison</p>
                  <p className="mt-3 text-3xl font-semibold">Gratuite à partir de 150 000 FCFA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="space-y-8"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Produits populaires</p>
              <h2 className="section-title">Choix du jour</h2>
            </div>
            <Link href="/boutique" className="text-sm font-semibold text-brand-600 transition hover:text-brand-700">Voir tous</Link>
          </div>
          <motion.div 
            className="grid gap-6 md:grid-cols-3"
            variants={stagger}
          >
            {featuredProducts.map((product) => (
              <motion.article 
                key={product.id} 
                className="card-surface overflow-hidden"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <div className="h-56 bg-slate-100">
                  <img src={product.imageUrl} alt={product.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{product.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Vendu par {product.vendor}</p>
                  <div className="mt-4 flex items-center justify-between text-base font-semibold text-slate-900">
                    <span>{product.price.toLocaleString('fr-FR')} FCFA</span>
                    <Link href={`/boutique/${product.id}`} className="text-brand-600 hover:text-brand-700">Détails</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Services populaires</p>
                <h2 className="section-title">Trouver un expert</h2>
              </div>
              <Link href="/services" className="text-sm font-semibold text-brand-600 transition hover:text-brand-700">Voir tous</Link>
            </div>
            <motion.div 
              className="grid gap-5 sm:grid-cols-2"
              variants={stagger}
            >
              {featuredServices.map((service) => (
                <motion.div 
                  key={service.id} 
                  className="card-surface p-6"
                  variants={fadeInUp}
                  whileHover={hoverScale}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{service.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.negotiable ? 'Prix négociable' : 'Prix fixe'} • {service.vendor}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-900">
                    <span>{service.price.toLocaleString('fr-FR')} FCFA</span>
                    <Link href={`/services/${service.id}`} className="text-brand-600 hover:text-brand-700">Commander</Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="rounded-[2rem] bg-brand-600/5 p-8 ring-1 ring-brand-100">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Guide rapide</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Marketplace simple pour débutants.</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Inscrivez-vous comme client ou vendeur, publiez des produits, services ou ebooks et discutez directement avec vos clients.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-semibold">Commission claire</p>
                <p className="mt-1 text-slate-600">Pourcentage ou montant fixe, avec seuil de retrait à 15 000 FCFA.</p>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="font-semibold">Paiements locaux</p>
                <p className="mt-1 text-slate-600">MTN MoMo, Moov Money, Celtiis Cash (intégration simulée).</p>
              </div>
            </div>
          </div>
        </section>

        <motion.section 
          className="space-y-8"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Ebooks recommandés</p>
              <h2 className="section-title">Lecture & formation</h2>
            </div>
            <Link href="/ebooks" className="text-sm font-semibold text-brand-600 transition hover:text-brand-700">Voir tous</Link>
          </div>
          <motion.div 
            className="grid gap-6 md:grid-cols-2"
            variants={stagger}
          >
            {featuredEbooks.map((ebook) => (
              <motion.article 
                key={ebook.id} 
                className="card-surface grid gap-4 p-6 sm:grid-cols-[120px_1fr] sm:items-center"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <img src={ebook.coverUrl} alt={ebook.title} className="h-32 w-full rounded-3xl object-cover sm:h-40 sm:w-32" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Ebook</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{ebook.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{ebook.author}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-900">
                    <span>{ebook.price.toLocaleString('fr-FR')} FCFA</span>
                    <Link href={`/ebooks/${ebook.id}`} className="text-brand-600 hover:text-brand-700">Acheter</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          className="space-y-8"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Catégories</p>
              <h2 className="section-title">Explorer par thème</h2>
            </div>
          </div>
          <motion.div 
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
          >
            {categories.map((category) => (
              <motion.div 
                key={category.name} 
                className="card-surface p-6"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-2xl">{category.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          className="space-y-8"
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Vendeurs populaires</p>
              <h2 className="section-title">Boutiques recommandées</h2>
            </div>
            <Link href="/vendeurs" className="text-sm font-semibold text-brand-600 transition hover:text-brand-700">Voir tous</Link>
          </div>
          <motion.div 
            className="grid gap-6 lg:grid-cols-3"
            variants={stagger}
          >
            {popularVendors.map((vendor) => (
              <motion.article 
                key={vendor.id} 
                className="card-surface overflow-hidden"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <div className="h-44 bg-slate-100">
                  <img src={vendor.bannerUrl} alt={vendor.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-700">{vendor.city}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{vendor.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{vendor.specialty}</p>
                  <Link href={`/vendeurs/${vendor.id}`} className="mt-5 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700">
                    Visiter la vitrine
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </motion.main>
      <Footer />
      <AssistantButton />
    </div>
  );
}
