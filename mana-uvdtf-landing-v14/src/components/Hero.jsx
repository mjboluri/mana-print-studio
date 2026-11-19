import { ArrowLeft } from 'lucide-react'
import { assetPath } from '../data/siteContent'
import WaveEdge from './WaveEdge'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow"><i /> چاپ و تولید لیبل اختصاصی</span>
          <h1>چاپ <em>UV DTF</em><br />مانا</h1>
          <p className="hero-lead">راهکاری حرفه‌ای برای چاپ روی انواع سطوح صاف و سخت</p>
          <p className="hero-description">
            چاپ لیبل برجسته و باکیفیت با جلوه‌ای لمسی، رنگ‌های زنده و اجرای سریع؛
            برای اینکه هویت برند شما روی محصول، دقیق و متمایز دیده شود.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              مشاوره و ثبت سفارش <ArrowLeft size={17} />
            </a>
            <a className="button button-outline" href="#portfolio">مشاهده نمونه‌کارها</a>
          </div>
        </div>

        <div className="hero-art hero-device-art">
          <img
            src={assetPath('mana-hero-printer-final.webp')}
            alt="دستگاه چاپ UV DTF مانا"
            width="1672"
            height="941"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <WaveEdge fill="#eef3f8" variant="one" />
    </section>
  )
}
