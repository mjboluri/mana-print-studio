import { assetPath, portfolioSamples } from '../data/siteContent'
import WaveEdge from './WaveEdge'

export default function Portfolio() {
  return (
    <section className="portfolio section-space" id="portfolio">
      <div className="container portfolio-layout portfolio-layout-compact">
        <div className="portfolio-showcase">
          <div className="portfolio-grid portfolio-grid-compact">
            {portfolioSamples.map((sample) => (
              <figure
                className={`sample-card sample-card-compact ${sample.className}`}
                key={sample.src}
              >
                <img
                  src={assetPath(sample.src)}
                  alt={sample.alt}
                  width={sample.width}
                  height={sample.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="portfolio-intro portfolio-intro-compact">
          <span className="eyebrow"><i /> نمونه‌کارها</span>
          <h2>نمونه‌ای از<br />چاپ‌های مانا <em>UV DTF</em></h2>
        </div>
      </div>
      <WaveEdge fill="#071b34" variant="three" />
    </section>
  )
}
