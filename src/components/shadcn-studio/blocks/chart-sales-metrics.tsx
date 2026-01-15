'use client'

import {
  BadgePercentIcon,
  DollarSignIcon,
  ShoppingBagIcon,
  TrendingUpIcon,
} from 'lucide-react'

import { Label, Pie, PieChart } from 'recharts'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const MetricsData = [
  {
    icons: <TrendingUpIcon className="size-5" />,
    title: 'Sales trend',
    value: '$11,548',
  },
  {
    icons: <BadgePercentIcon className="size-5" />,
    title: 'Discount offers',
    value: '$1,326',
  },
  {
    icons: <DollarSignIcon className="size-5" />,
    title: 'Net profit',
    value: '$17,356',
  },
  {
    icons: <ShoppingBagIcon className="size-5" />,
    title: 'Total orders',
    value: '248',
  },
]

const revenueChartData = [
  { month: 'january', sales: 340, fill: 'var(--color-january)' },
  { month: 'february', sales: 200, fill: 'var(--color-february)' },
  { month: 'march', sales: 200, fill: 'var(--color-march)' },
]

const revenueChartConfig = {
  sales: {
    label: 'Sales',
  },
  january: {
    label: 'January',
    color: 'var(--primary)',
  },
  february: {
    label: 'February',
    color: 'color-mix(in oklab, var(--primary) 60%, transparent)',
  },
  march: {
    label: 'March',
    color: 'color-mix(in oklab, var(--primary) 20%, transparent)',
  },
} satisfies ChartConfig

const SalesMetricsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardContent className="space-y-4">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-7 lg:col-span-3">
            <span className="text-lg font-semibold">Sales metrics</span>
            <div className="flex items-center gap-3">
              <img
                src="https://cdn.shadcnstudio.com/ss-assets/logo/logo-square.png"
                className="size-10.5 rounded-lg"
                alt="logo"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-xl font-medium">
                  Sandy&apos;s Company
                </span>
                <span className="text-muted-foreground text-sm">
                  sandy@company.com
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {MetricsData.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md border px-4 py-2"
                >
                  <Avatar className="size-8.5 rounded-sm">
                    <AvatarFallback className="bg-primary/10 text-primary shrink-0 rounded-sm">
                      {metric.icons}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-sm font-medium">
                      {metric.title}
                    </span>
                    <span className="text-lg font-medium">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="gap-4 py-4 shadow-none lg:col-span-2">
            <CardHeader className="gap-1">
              <CardTitle className="text-lg font-semibold">
                Revenue goal
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <ChartContainer
                config={revenueChartConfig}
                className="h-38.5 w-full"
              >
                <PieChart margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={revenueChartData}
                    dataKey="sales"
                    nameKey="month"
                    startAngle={300}
                    endAngle={660}
                    innerRadius={58}
                    outerRadius={75}
                    paddingAngle={2}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 12}
                                className="fill-card-foreground text-lg font-medium"
                              >
                                256.24
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 19}
                                className="fill-muted-foreground text-sm"
                              >
                                Total Profit
                              </tspan>
                            </text>
                          )
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>

            <CardFooter className="justify-between">
              <span className="text-xl">Plan completed</span>
              <span className="text-2xl font-medium">56%</span>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesMetricsCard
