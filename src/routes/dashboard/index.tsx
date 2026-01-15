import { StatisticsSection } from '@/components/dashboard/sections/statistics-section'
import { ProductInsightsSection } from '@/components/dashboard/sections/product-insights-section'
import { TotalEarningsSection } from '@/components/dashboard/sections/total-earnings-section'
import { SalesMetricsSection } from '@/components/dashboard/sections/sales-metrics-section'
import { TransactionsSection } from '@/components/dashboard/sections/transactions-section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardHome,
})

function DashboardHome() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
      <StatisticsSection />

      <div className="grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2">
        <ProductInsightsSection />
        <TotalEarningsSection />
      </div>

      <SalesMetricsSection />
      <TransactionsSection />
    </div>
  )
}
