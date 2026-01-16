import { useLocation } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

import ProfileDropdown from "@/components/shadcn-studio/blocks/dropdown-profile";

interface HeaderProps {
  breadcrumbs?: Array<{
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }>;
}

export function Header({ breadcrumbs }: HeaderProps) {
  const { pathname } = useLocation();

  // TODO: Breadcrumbs should be dynamic based on route
  const defaultBreadcrumbs = breadcrumbs || [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ];

  const shouldShowSidebarTrigger = pathname === "/dashboard";

  return (
    <header className="bg-card sticky top-0 z-50 border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4">
          {shouldShowSidebarTrigger && (
            <SidebarTrigger className="[&_svg]:size-5!" />
          )}
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
  );
}
