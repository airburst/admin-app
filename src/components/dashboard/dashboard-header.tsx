import { LanguagesIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import LanguageDropdown from '@/components/shadcn-studio/blocks/dropdown-language'
import ProfileDropdown from '@/components/shadcn-studio/blocks/dropdown-profile'

interface DashboardHeaderProps {
  breadcrumbs?: Array<{
    label: string
    href?: string
    isCurrentPage?: boolean
  }>
}

export function DashboardHeader({ breadcrumbs }: DashboardHeaderProps) {
  const defaultBreadcrumbs = breadcrumbs || [
    { label: 'Home', href: '#' },
    { label: 'Dashboard', href: '#' },
    { label: 'Free', isCurrentPage: true },
  ]

  return (
    <header className="bg-card sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="[&_svg]:size-5!" />
          <Separator orientation="vertical" className="hidden h-4! sm:block" />
          <Breadcrumb className="hidden sm:block">
            <BreadcrumbList>
              {defaultBreadcrumbs.map((crumb, index) => (
                <span key={index} className="contents">
                  <BreadcrumbItem>
                    {crumb.isCurrentPage ? (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={crumb.href}>
                        {crumb.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < defaultBreadcrumbs.length - 1 && (
                    <BreadcrumbSeparator />
                  )}
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-1.5">
          <LanguageDropdown
            trigger={
              <Button variant="ghost" size="icon">
                <LanguagesIcon />
              </Button>
            }
          />
          <ProfileDropdown
            trigger={
              <Button variant="ghost" size="icon" className="size-9.5">
                <Avatar className="size-9.5 rounded-md">
                  <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}
