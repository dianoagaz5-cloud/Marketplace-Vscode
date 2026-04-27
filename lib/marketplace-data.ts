export type Category = {
  name: string;
  icon: string;
  description: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  vendor: string;
};

export type Service = {
  id: string;
  title: string;
  category: string;
  price: number;
  negotiable: boolean;
  vendor: string;
};

export type Ebook = {
  id: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
};

export type Vendor = {
  id: string;
  name: string;
  city: string;
  specialty: string;
  bannerUrl: string;
  profileUrl: string;
};

export const categories: Category[] = [
  { name: 'Électronique', icon: '⚡', description: 'Smartphones, accessoirs et gadgets.' },
  { name: 'Mode', icon: '👗', description: 'Textiles, chaussures et accessoires.' },
  { name: 'Immobilier', icon: '🏠', description: 'Logement, bureau, et locations.' },
  { name: 'Services', icon: '🛠️', description: 'Réparation, design et développement.' },
  { name: 'Livraison', icon: '🚚', description: 'Expédition locale et nationale.' }
];

export const featuredProducts: Product[] = [
  {
    id: 'p1',
    title: 'Smartphone 5G pro',
    price: 245000,
    category: 'Électronique',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    vendor: 'Benin Tech'
  },
  {
    id: 'p2',
    title: 'Sac traditionnel',
    price: 75000,
    category: 'Mode',
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    vendor: 'WaxMarket'
  },
  {
    id: 'p3',
    title: 'Casque audio Bluetooth',
    price: 92000,
    category: 'Électronique',
    imageUrl: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=900&q=80',
    vendor: 'AudioPlus'
  }
];

export const featuredServices: Service[] = [
  {
    id: 's1',
    title: 'Développement de site e-commerce',
    category: 'Développement',
    price: 150000,
    negotiable: true,
    vendor: 'DevBenin'
  },
  {
    id: 's2',
    title: 'Design de logo & identité',
    category: 'Design',
    price: 85000,
    negotiable: false,
    vendor: 'CreativeLab'
  },
  {
    id: 's3',
    title: 'Réparation smartphone rapide',
    category: 'Réparation',
    price: 45000,
    negotiable: false,
    vendor: 'FixExpress'
  }
];

export const featuredEbooks: Ebook[] = [
  {
    id: 'e1',
    title: 'Guide pratique pour vendre au Bénin',
    author: 'Amina S.',
    price: 15000,
    coverUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'e2',
    title: 'Marketing digital local',
    author: 'Yves K.',
    price: 18000,
    coverUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de165ee?auto=format&fit=crop&w=800&q=80'
  }
];

export const popularVendors: Vendor[] = [
  {
    id: 'v1',
    name: 'Dakar Store',
    city: 'Cotonou',
    specialty: 'Électronique & accessoires',
    bannerUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    profileUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'v2',
    name: 'Maison Trajectoire',
    city: 'Abomey-Calavi',
    specialty: 'Mode traditionnelle',
    bannerUrl: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80',
    profileUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'v3',
    name: 'Studio Tech',
    city: 'Porto-Novo',
    specialty: 'Services numériques',
    bannerUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    profileUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
  }
];
