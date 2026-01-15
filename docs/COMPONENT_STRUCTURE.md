# Dashboard Component Structure

## Overview

The dashboard has been refactored into a well-organized component architecture with clear separation of concerns.

## Component Hierarchy

```txt
src/
├── components/
│   └── dashboard/
│       ├── dashboard-layout.tsx          # Main layout wrapper
│       ├── dashboard-header.tsx          # Header with breadcrumbs & user menu
│       ├── dashboard-sidebar.tsx         # Sidebar with navigation menus
│       ├── dashboard-footer.tsx          # Footer with copyright & social links
│       └── sections/
│           ├── statistics-section.tsx    # Statistics cards (fetches data)
│           ├── product-insights-section.tsx  # Product insights widget
│           ├── total-earnings-section.tsx    # Total earnings widget (fetches data)
│           ├── sales-metrics-section.tsx     # Sales metrics charts
│           └── transactions-section.tsx      # Transactions datatable (fetches data)
└── routes/
    └── index.tsx                         # Landing page (orchestrates sections)
```

## Layout Components

### DashboardLayout

- **Purpose**: Main layout wrapper that combines header, sidebar, footer, and main content
- **Props**:
  - `children`: Main content area
  - `breadcrumbs?`: Optional breadcrumb configuration
- **Usage**: Wraps all dashboard pages

### DashboardHeader

- **Purpose**: Sticky header with navigation and user controls
- **Features**:
  - Sidebar toggle
  - Breadcrumb navigation
  - Language selector
  - User profile dropdown
- **Props**: `breadcrumbs?` array

### DashboardSidebar

- **Purpose**: Left sidebar with navigation menu
- **Features**:
  - Main menu items with badges
  - Pages menu group
  - Supporting features menu group
- **Data**: Menu items are defined in component (can be externalized)

### DashboardFooter

- **Purpose**: Footer with copyright and social links
- **Features**:
  - Dynamic copyright year
  - Social media links (Facebook, Instagram, LinkedIn, Twitter)

## Section Components

### StatisticsSection

- **Purpose**: Display key statistics cards
- **Data Fetching**: `getStatisticsData()` - simulates API call
- **Data**: Shipped orders, damaged returns, missed delivery slots

### ProductInsightsSection

- **Purpose**: Display product insights widget
- **Data**: Currently embedded in widget component

### TotalEarningsSection

- **Purpose**: Display total earnings widget with progress
- **Data Fetching**: `getTotalEarningsData()` - simulates API call
- **Data**: Earnings by platform (Zipcar, Bitbank)

### SalesMetricsSection

- **Purpose**: Display sales metrics with charts
- **Data**: Currently embedded in widget component

### TransactionsSection

- **Purpose**: Display transaction datatable
- **Data Fetching**: `getTransactionData()` - simulates API call
- **Data**: 25 sample transactions with pagination

## Data Fetching Pattern

Each section component that needs data implements an async data fetching function:

```typescript
async function getData(): Promise<DataType> {
  // Simulate API call - replace with actual data fetching
  return mockData
}

export async function Section() {
  const data = await getData()
  return <Component data={data} />
}
```

This pattern allows for:

- Server-side data fetching (with TanStack Router)
- Easy replacement with real API calls
- Type-safe data handling
- Loading states and error boundaries (can be added)

## Future Enhancements

1. **Replace mock data** with actual API endpoints
2. **Add loading states** using Suspense boundaries
3. **Add error boundaries** for graceful error handling
4. **Externalize menu configuration** to a separate file
5. **Add route protection** and authentication
6. **Implement data caching** with TanStack Query
7. **Add real-time updates** for live data
