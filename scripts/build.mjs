import { build } from 'vite'

const target = process.argv[2] ?? 'host'

if (target === 'host') {
  await build({ base: './' })
} else if (target === 'github') {
  const base = process.env.GITHUB_PAGES_BASE

  if (!base || !base.startsWith('/') || !base.endsWith('/')) {
    console.error(
      'برای خروجی GitHub Pages ابتدا GITHUB_PAGES_BASE را با مسیر ریپازیتوری تنظیم کنید؛ مثال: /mana-site/',
    )
    process.exit(1)
  }

  await build({ base })
} else {
  console.error(`نوع خروجی ناشناخته است: ${target}`)
  process.exit(1)
}
