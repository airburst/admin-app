import SalesMetricsCard from "@/components/shadcn-studio/blocks/chart-sales-metrics";

export function SalesMetricsSection() {
  // Data fetching is handled inside SalesMetricsCard
  // This component can be enhanced to fetch and pass data as props
  return (
    <SalesMetricsCard className="col-span-full xl:col-span-2 *:data-[slot=card-content]:space-y-6" />
  );
}
