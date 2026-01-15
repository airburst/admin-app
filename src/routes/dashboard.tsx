import { createFileRoute, Outlet } from '@tanstack/react-router'

import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

export const Route = createFileRoute('/dashboard')({ component: Dashboard })

// https://www.freecodecamp.org/news/build-an-admin-dashboard-with-shadcnui-and-tanstack-start/
function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}
