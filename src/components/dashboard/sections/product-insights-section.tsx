import ProductInsightsCard from '@/components/shadcn-studio/blocks/widget-product-insights'

export function ProductInsightsSection() {
  // Data fetching is handled inside ProductInsightsCard
  // This component can be enhanced to fetch and pass data as props
  return (
    <ProductInsightsCard className="justify-between gap-3 *:data-[slot=card-content]:space-y-5" />
  )
}
