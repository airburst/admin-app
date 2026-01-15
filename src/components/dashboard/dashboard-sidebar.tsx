import {
  ArrowRightLeftIcon,
  CalendarClockIcon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ClipboardListIcon,
  Clock9Icon,
  CrownIcon,
  HashIcon,
  SettingsIcon,
  SquareActivityIcon,
  Undo2Icon,
  UsersIcon,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const mainMenuItems = [
  {
    icon: ChartNoAxesCombinedIcon,
    label: 'Dashboard',
    href: '#',
    badge: 5,
  },
]

const pagesMenuItems = [
  {
    icon: ChartSplineIcon,
    label: 'Content Performance',
    href: '#',
  },
  {
    icon: UsersIcon,
    label: 'Audience Insight',
    href: '#',
  },
  {
    icon: ChartPieIcon,
    label: 'Engagement Metrics',
    href: '#',
  },
  {
    icon: HashIcon,
    label: 'Hashtag Performance',
    href: '#',
    badge: 3,
  },
  {
    icon: ArrowRightLeftIcon,
    label: 'Competitor Analysis',
    href: '#',
  },
  {
    icon: Clock9Icon,
    label: 'Campaign Tracking',
    href: '#',
  },
  {
    icon: ClipboardListIcon,
    label: 'Sentiment Tracking',
    href: '#',
  },
  {
    icon: CrownIcon,
    label: 'Influencer',
    href: '#',
  },
]

const supportingFeaturesMenuItems = [
  {
    icon: SquareActivityIcon,
    label: 'Real Time Monitoring',
    href: '#',
  },
  {
    icon: CalendarClockIcon,
    label: 'Schedule Post & Calendar',
    href: '#',
  },
  {
    icon: Undo2Icon,
    label: 'Report & Export',
    href: '#',
  },
  {
    icon: SettingsIcon,
    label: 'Settings & Integrations',
    href: '#',
  },
  {
    icon: UsersIcon,
    label: 'User Management',
    href: '#',
  },
]

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-primary/10 rounded-full">
                      {item.badge}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pagesMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-primary/10 rounded-full">
                      {item.badge}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportingFeaturesMenuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
