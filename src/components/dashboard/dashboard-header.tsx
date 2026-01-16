import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export function DashboardHeader() {
  const { pathname } = useLocation();

  const breadcrumbs = useMemo(() => generateBreadcrumbs(pathname), [pathname]);

  return (
    <div className="bg-background flex items-center gap-4 border-b px-4 py-2 sm:px-6">
      <SidebarTrigger className="[&_svg]:size-5!" />
      <Breadcrumb className="hidden sm:block">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="contents">
              <BreadcrumbItem>
                {crumb.isCurrentPage ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.href}>
                    {crumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
