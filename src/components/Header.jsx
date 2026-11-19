import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { assetPath, navigationItems } from '../data/siteContent'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-topline">
        <div className="container topline-inner">
          <span className="topline-note"><i /> چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند</span>
          <span className="topline-signature">MANA <b> / </b> UV DTF</span>
        </div>
      </div>

      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="مانا، صفحه اصلی">
          <img src={assetPath('mana-mark.webp')} alt="" width="48" height="46" />
          <span>مانا</span>
        </a>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'بستن منو' : 'باز کردن منو'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={isMenuOpen ? 'nav nav-open' : 'nav'} aria-label="منوی اصلی">
          {navigationItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <a
          className="header-phone"
          href="#contact"
          aria-label="رفتن به بخش ارتباط با مانا"
          title="ارتباط با مانا"
        >
          <Phone size={19} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
