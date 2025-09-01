import type { MenuItem, Branch } from './types';

export const NAV_LINKS = [
  { name: 'Anasayfa', href: '#home' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'Menü', href: '#menu' },
  { name: 'Şubeler', href: '#branches' },
  { name: 'Franchise', href: '#franchise' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: 'Klasik Acıktım Burger',
    category: 'Burger',
    description: '150gr dana köftesi, cheddar peyniri, karamelize soğan, domates, ve özel Acıktım sos.',
    price: '350 TL',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800'
  },
  {
    id: 2,
    name: 'Spicy Chicken Wings',
    category: 'Başlangıç',
    description: 'Acı sos ile marine edilmiş, çıtır tavuk kanatları, yanında blue cheese sos ile.',
    price: '280 TL',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800'
  },
  {
    id: 3,
    name: 'Sezar Salata',
    category: 'Salata',
    description: 'Izgara tavuk parçaları, taze marul, kruton, parmesan ve Sezar sos.',
    price: '250 TL',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800'
  },
  {
    id: 4,
    name: 'Fettuccine Alfredo',
    category: 'Makarna',
    description: 'Kremalı mantar sosu, tavuk parçaları ve parmesan peyniri ile hazırlanmış taze fettuccine.',
    price: '320 TL',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-31b29d1dc3e9?q=80&w=800'
  },
  {
    id: 5,
    name: 'Margarita Pizza',
    category: 'Pizza',
    description: 'Domates sosu, mozzarella peyniri ve taze fesleğen ile klasik İtalyan lezzeti.',
    price: '300 TL',
    imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800'
  },
  {
    id: 6,
    name: 'Çikolatalı Sufle',
    category: 'Tatlı',
    description: 'Akışkan çikolatası ve yanında bir top vanilyalı dondurma ile sıcak sufle.',
    price: '180 TL',
    imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800'
  },
  {
    id: 7,
    name: 'BBQ Kaburga',
    category: 'Ana Yemek',
    description: 'Ağır ateşte pişirilmiş, kemiğinden ayrılan dana kaburga, özel BBQ sos ve patates kızartması ile.',
    price: '480 TL',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800'
  },
  {
    id: 8,
    name: 'Somon Izgara',
    category: 'Ana Yemek',
    description: 'Taze Norveç somonu, kuşkonmaz ve bebek patates ile birlikte ızgarada pişirilir.',
    price: '450 TL',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800'
  },
  {
    id: 9,
    name: 'Akdeniz Salata',
    category: 'Salata',
    description: 'Beyaz peynir, cherry domates, salatalık, zeytin ve taze yeşillikler, nar ekşili sos ile.',
    price: '230 TL',
    imageUrl: 'https://images.unsplash.com/photo-1551248429-40974011e723?q=80&w=800'
  }
];

export const BRANCHES: Branch[] = [
    { id: 1, city: 'İstanbul', name: 'Beşiktaş', address: 'Sinanpaşa Mah. Şair Nedim Cad. No:14, Beşiktaş' },
    { id: 2, city: 'İstanbul', name: 'Kadıköy', address: 'Caferağa Mah. Mühürdar Cad. No:70, Kadıköy' },
    { id: 3, city: 'Ankara', name: 'Kızılay', address: 'Karanfil Sokak No:25, Kızılay, Çankaya' },
    { id: 4, city: 'İzmir', name: 'Alsancak', address: 'Kültür Mah. 1388 Sk. No: 11, Konak' },
];