import { services } from '../data/siteContent'
import WaveEdge from './WaveEdge'

export default function AboutServices() {
  return (
    <section className="services-section section-space" id="services">
      <div className="container services-layout">
        <div className="services-intro" id="about">
          <span className="eyebrow eyebrow-light"><i /> درباره مانا</span>
          <h2>ایده‌هایت را<br /><em>به بهترین شکل</em> چاپ کن.</h2>
          <p>
            مانا با تمرکز بر چاپ لیبل UV DTF، راهکاری حرفه‌ای برای برندها،
            تولیدکنندگان و کسب‌وکارهایی ارائه می‌کند که به کیفیت، جزئیات و جلوه نهایی محصول اهمیت می‌دهند.
          </p>
          <p className="service-tagline">چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند.</p>
        </div>

        <div className="service-list">
          {services.map(({ Icon, title, description }, index) => (
            <article className="service-row" key={title}>
              <span className="service-index">۰{index + 1}</span>
              <span className="service-icon"><Icon size={23} strokeWidth={1.6} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <WaveEdge fill="#f2f6fa" variant="one" />
    </section>
  )
}
