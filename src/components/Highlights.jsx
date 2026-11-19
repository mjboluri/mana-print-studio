import WaveEdge from './WaveEdge'
import { highlights } from '../data/siteContent'

export default function Highlights() {
  return (
    <section className="highlights" aria-label="ویژگی‌های چاپ مانا">
      <div className="container highlights-inner">
        {highlights.map(([Icon, label]) => (
          <div className="highlight" key={label}>
            <span className="highlight-icon"><Icon size={27} strokeWidth={1.7} /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <WaveEdge fill="#f7f9fc" variant="two" />
    </section>
  )
}
