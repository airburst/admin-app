import { type ReactNode } from 'react'
import { Header } from '../header/header'

interface HomeLayoutProps {
  children: ReactNode
  breadcrumbs?: Array<{
    label: string
    href?: string
    isCurrentPage?: boolean
  }>
}

export function HomeLayout({ children, breadcrumbs }: HomeLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full">
      <div className="flex flex-1 flex-col">
        <Header breadcrumbs={breadcrumbs} />
        <main className="mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
          {children}
        </main>
      </div>
    </div>
  )
}
