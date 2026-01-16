import { Header } from "../header/header";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardFooter } from "./dashboard-footer";
import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }>;
}

export function DashboardLayout({
  children,
  breadcrumbs,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-dvh w-full">
      <SidebarProvider>
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <Header breadcrumbs={breadcrumbs} />
          <main className="mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
            {children}
          </main>
          <DashboardFooter />
        </div>
      </SidebarProvider>
    </div>
  );
}
