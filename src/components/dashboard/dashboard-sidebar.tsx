import {
  ChartNoAxesCombinedIcon,
  ChartSplineIcon,
  UsersIcon,
} from "lucide-react";

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
} from "@/components/ui/sidebar";

type MenuItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
  badge?: number;
};

const mainMenuItems: Array<MenuItem> = [
  {
    icon: ChartNoAxesCombinedIcon,
    label: "Dashboard",
    href: "#",
    // badge: 5,
  },
];

const pagesMenuItems: Array<MenuItem> = [
  {
    icon: ChartSplineIcon,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: UsersIcon,
    label: "Manage Users",
    href: "/dashboard/users",
    // badge: 3,
  },
];

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
          <SidebarGroupLabel>General</SidebarGroupLabel>
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
      </SidebarContent>
    </Sidebar>
  );
}
