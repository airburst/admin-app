import { CalendarX2Icon, TriangleAlertIcon, TruckIcon } from "lucide-react";
import StatisticsCard from "@/components/shadcn-studio/blocks/statistics-card-01";

interface StatisticsData {
  icon: React.ReactNode;
  value: string;
  title: string;
  changePercentage: string;
}

function getStatisticsData(): Array<StatisticsData> {
  // Simulate API call - replace with actual data fetching
  return [
    {
      icon: <TruckIcon className="size-4" />,
      value: "42",
      title: "Shipped Orders",
      changePercentage: "+18.2%",
    },
    {
      icon: <TriangleAlertIcon className="size-4" />,
      value: "8",
      title: "Damaged Returns",
      changePercentage: "-8.7%",
    },
    {
      icon: <CalendarX2Icon className="size-4" />,
      value: "27",
      title: "Missed Delivery Slots",
      changePercentage: "+4.3%",
    },
  ];
}

export function StatisticsSection() {
  const statistics = getStatisticsData();

  return (
    <div className="col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1">
      {statistics.map((stat, index) => (
        <StatisticsCard
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          changePercentage={stat.changePercentage}
        />
      ))}
    </div>
  );
}
