import { applications } from '../data/siteContent'
import WaveEdge from './WaveEdge'

export default function Applications() {
  return (
    <section className="applications section-space" id="applications">
      <div className="container">
        <div className="applications-heading">
          <div>
            <span className="eyebrow"><i /> زمینه‌های کاربرد</span>
            <h2>روی سطوح مختلف، برای ایده‌های متفاوت</h2>
          </div>
          <p>مناسب انواع سطوح صاف و سخت</p>
        </div>
        <div className="application-list">
          {applications.map(([Icon, title]) => (
            <div className="application-item" key={title}>
              <Icon size={23} strokeWidth={1.6} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <WaveEdge fill="#ffffff" variant="two" />
    </section>
  )
}
