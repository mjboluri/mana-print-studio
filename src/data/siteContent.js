import {
  Box,
  Coffee,
  FlaskConical,
  Gift,
  Hand,
  Layers3,
  Package,
  Palette,
  Printer,
  Settings2,
  Sparkles,
  Zap,
} from 'lucide-react'

export const siteInfo = {
  phone: '09123174245',
  phoneDisplay: '۰۹۱۲۳۱۷۴۲۴۵',
  address: 'کرج. بلوار نبوت. مجتمع گالریا',
  email: 'mana.priint.studio@gmail.com',
  instagram: 'mana.printstudio',
  instagramUrl: 'https://www.instagram.com/mana.printstudio',
}

export const assetPath = (fileName) => `${import.meta.env.BASE_URL}assets/${fileName}`

export const navigationItems = [
  ['خانه', '#home'],
  ['درباره مانا', '#about'],
  ['خدمات', '#services'],
  ['نمونه‌کارها', '#portfolio'],
  ['تماس با ما', '#contact'],
]

export const highlights = [
  [Layers3, 'چاپ برجسته و باکیفیت'],
  [Hand, 'بافت لمسی و سه‌بعدی'],
  [Palette, 'رنگ‌های زنده و جزئیات دقیق'],
  [Zap, 'اجرای سریع، بدون قالب اختصاصی'],
]

export const services = [
  {
    Icon: Layers3,
    title: 'چاپ لیبل برجسته و باکیفیت',
    description: 'مناسب برای ایجاد جلوه‌ای برجسته و حرفه‌ای روی انواع محصولات و بسته‌بندی‌ها.',
  },
  {
    Icon: Printer,
    title: 'انواع چاپ‌های رولی',
    description: 'ارائه انواع خدمات چاپ رولی، پلات و بنر با کیفیت بالا، رنگ‌های زنده و وضوح مناسب',
  },
  {
    Icon: Palette,
    title: 'رنگ‌های زنده',
    description: 'چاپ با جزئیات بالا و نمایش شفاف رنگ‌ها برای هویت بصری دقیق‌تر برند.',
  },
  {
    Icon: Zap,
    title: 'بدون نیاز به قالب اختصاصی',
    description: 'اجرای سریع و کم‌هزینه‌تر، بدون نیاز به ساخت قالب اختصاصی.',
  },
]

export const applications = [
  [FlaskConical, 'بطری و ظروف'],
  [Package, 'بسته‌بندی'],
  [Sparkles, 'لوازم آرایشی'],
  [Coffee, 'ماگ و لیوان'],
  [Gift, 'محصولات تبلیغاتی'],
  [Settings2, 'محصولات صنعتی'],
  [Box, 'هدایای اختصاصی'],
]

export const portfolioSamples = [
  {
    src: 'portfolio-04-jl-collective-transfer.webp',
    alt: 'نمونه چاپ لیبل ترنسفر JL Collective',
    className: 'jl-transfer',
    width: 941,
    height: 941,
  },
  {
    src: 'portfolio-02-lumina-candle.webp',
    alt: 'نمونه چاپ لیبل روی شمع و ظروف Lumina',
    className: 'lumina-candle',
    width: 941,
    height: 941,
  },
  {
    src: 'portfolio-05-skincare-transfer.webp',
    alt: 'نمونه چاپ لیبل محصولات آرایشی و مراقبت پوست',
    className: 'skincare-transfer',
    width: 941,
    height: 941,
  },
]
