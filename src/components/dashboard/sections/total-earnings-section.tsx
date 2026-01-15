import TotalEarningCard from '@/components/shadcn-studio/blocks/widget-total-earning'

interface EarningData {
  img: string
  platform: string
  technologies: string
  earnings: string
  progressPercentage: number
}

interface TotalEarningsData {
  title: string
  earning: number
  trend: 'up' | 'down'
  percentage: number
  comparisonText: string
  earningData: EarningData[]
}

async function getTotalEarningsData(): Promise<TotalEarningsData> {
  // Simulate API call - replace with actual data fetching
  return {
    title: 'Total Earning',
    earning: 24650,
    trend: 'up',
    percentage: 10,
    comparisonText: 'Compare to last year ($84,325)',
    earningData: [
      {
        img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
        platform: 'Zipcar',
        technologies: 'Vuejs & HTML',
        earnings: '-$23,569.26',
        progressPercentage: 75,
      },
      {
        img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
        platform: 'Bitbank',
        technologies: 'Figma & React',
        earnings: '-$12,650.31',
        progressPercentage: 25,
      },
    ],
  }
}

export async function TotalEarningsSection() {
  const data = await getTotalEarningsData()

  return (
    <TotalEarningCard
      title={data.title}
      earning={data.earning}
      trend={data.trend}
      percentage={data.percentage}
      comparisonText={data.comparisonText}
      earningData={data.earningData}
      className="justify-between gap-5 sm:min-w-0 *:data-[slot=card-content]:space-y-7"
    />
  )
}
