// Map route segments to display labels
const ROUTE_LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  settings: "Settings",
  users: "Users",
  analytics: "Analytics",
  reports: "Reports",
};

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
}

export function generateBreadcrumbs(pathname: string): Array<BreadcrumbItem> {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: Array<BreadcrumbItem> = [{ label: "Home", href: "/" }];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const label = ROUTE_LABELS[segment] || capitalize(segment);
    const isLast = index === segments.length - 1;

    crumbs.push({
      label,
      href: currentPath,
      isCurrentPage: isLast,
    });
  });

  return crumbs;
}
