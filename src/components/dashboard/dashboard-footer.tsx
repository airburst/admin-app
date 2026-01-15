import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

const socialLinks = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
]

export function DashboardFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6">
        <p className="text-sm text-balance max-sm:text-center">
          ©{currentYear}{' '}
          <a href="#" className="text-primary">
            shadcn/studio
          </a>
          , Made for better web design
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="hover:text-foreground transition-colors"
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
