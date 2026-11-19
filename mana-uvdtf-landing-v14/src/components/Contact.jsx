import { Phone } from 'lucide-react'
import { siteInfo } from '../data/siteContent'
import WaveEdge from './WaveEdge'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-panel">
        <div>
          <span className="eyebrow eyebrow-light"><i /> ارتباط با مانا</span>
          <h2>برای چاپ ایده‌هایتان آماده‌ایم.</h2>
          <p>برای مشاوره و هماهنگی سفارش با مانا در ارتباط باشید.</p>
        </div>
        <a className="contact-number" href={`tel:${siteInfo.phone}`} dir="ltr" aria-label="تماس با مانا">
          <Phone size={19} aria-hidden="true" /> {siteInfo.phoneDisplay}
        </a>
      </div>
      <WaveEdge fill="#041225" variant="three" />
    </section>
  )
}
