import { ServiceCategory, Package } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'جلسات المساج',
    services: [
      {
        name: 'مساج استرخائي',
        description: 'جلسة مساج تساعد على تخفيف التوتر والإرهاق.',
        duration: '60 دقيقة',
        price: '400 جنيه مصرى',
      },
      {
        name: 'مساج سويدي',
        description: 'مساج علاجي لتحسين الدورة الدموية وإرخاء العضلات.',
        duration: '75 دقيقة',
        price: '500 جنيه مصرى',
      },
      {
        name: 'مساج الأحجار الساخنة',
        description: 'استخدام الأحجار البازلتية الساخنة لإراحة أعمق للعضلات.',
        duration: '90 دقيقة',
        price: '600 جنيه مصرى',
      },
      {
        name: 'مساج رياضي',
        description: 'مثالي للرياضيين لتخفيف آلام العضلات وتحسين الأداء.',
        duration: '60 دقيقة',
        price: '550 جنيه مصرى',
      },
    ],
  },
  {
    title: 'الحمام المغربي',
    services: [
      {
        name: 'حمام مغربي تقليدي',
        description: 'تجربة الحمام المغربي الأصيل لتنظيف وتقشير البشرة.',
        duration: '90 دقيقة',
        price: '700 جنيه مصرى',
      },
      {
        name: 'حمام مغربي ملكي',
        description: 'يشمل أقنعة طبيعية وزيوت عطرية لتغذية البشرة بعمق.',
        duration: '120 دقيقة',
        price: '1000 جنيه مصرى',
      },
    ],
  },
  {
    title: 'العناية بالبشرة والجسم',
    services: [
      {
        name: 'تنظيف بشرة عميق',
        description: 'جلسة متكاملة لتنظيف البشرة وإزالة الشوائب.',
        duration: '75 دقيقة',
        price: '500 جنيه مصرى',
      },
      {
        name: 'بديكير ومانيكير',
        description: 'عناية كاملة باليدين والقدمين لمظهر صحي وجذاب.',
        duration: '60 دقيقة',
        price: '300 جنيه مصرى',
      },
    ],
  },
];

export const packages: Package[] = [
  {
    name: 'باقة الاسترخاء الكامل',
    description: 'تشمل جلسة مساج استرخائي، حمام مغربي تقليدي، وبديكير ومانيكير لتجربة راحة متكاملة.',
    duration: '3.5 ساعات',
    originalPrice: '1400 جنيه',
    discountedPrice: '1100 جنيه',
    imageUrl: 'https://i.postimg.cc/k47tVqjP/ai-package-relax.jpg',
  },
  {
    name: 'باقة الحيوية والنشاط',
    description: 'مثالية لاستعادة الطاقة. تشمل مساج رياضي متخصص وجلسة تنظيف بشرة عميق.',
    duration: '2.5 ساعات',
    originalPrice: '1050 جنيه',
    discountedPrice: '850 جنيه',
    imageUrl: 'https://i.postimg.cc/t4G258zG/ai-package-vitality.jpg',
  },
  {
    name: 'الباقة الملكية الفاخرة',
    description: 'تجربة ملوكية لا مثيل لها. تشمل حمام مغربي ملكي، مساج بالأحجار الساخنة، وعناية فائقة بالجسم.',
    duration: '4 ساعات',
    originalPrice: '1600 جنيه',
    discountedPrice: '1300 جنيه',
    imageUrl: 'https://i.postimg.cc/d11GqGjQ/ai-package-royal.jpg',
  },
];