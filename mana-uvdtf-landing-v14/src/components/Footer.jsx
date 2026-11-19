import { ArrowUpLeft, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { assetPath, navigationItems, siteInfo } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="#home" aria-label="مانا، صفحه اصلی">
            <img src={assetPath('mana-mark.webp')} alt="" width="43" height="40" />
            <span>مانا</span>
          </a>
          <p className="footer-slogan">چاپ لیبل UV DTF برای برندهایی که دیده می‌شوند.</p>
          <p className="footer-description">ایده‌هایت را به بهترین شکل چاپ کن.</p>
        </div>

        <div className="footer-contact">
          <h3>اطلاعات تماس</h3>
          <div className="footer-contact-item" dir="rtl">
            <Phone size={17} aria-hidden="true" />
            <span dir="ltr">{siteInfo.phoneDisplay}</span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <MapPin size={17} aria-hidden="true" />
            <span><b>آدرس:</b> {siteInfo.address}</span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <Mail size={17} aria-hidden="true" />
            <span>
              <b>ایمیل:</b>{' '}
              <a href={`mailto:${siteInfo.email}`} dir="ltr">{siteInfo.email}</a>
            </span>
          </div>
          <div className="footer-contact-item" dir="rtl">
            <Instagram size={17} aria-hidden="true" />
            <span>
              <b>اینستاگرام:</b>{' '}
              <a href={siteInfo.instagramUrl} target="_blank" rel="noreferrer" dir="ltr">
                {siteInfo.instagram}
              </a>
            </span>
          </div>
        </div>

        <div className="footer-shortcuts">
          <h3>دسترسی سریع</h3>
          {navigationItems.slice(0, 4).map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#contact">درخواست مشاوره</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© تمامی حقوق این وب‌سایت متعلق به مانا است.</span>
        <a href="#home">بازگشت به بالا <ArrowUpLeft size={15} /></a>
      </div>
    </footer>
  )
}
