"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  WalletIcon,
  MoneyReceiveFlow01Icon,
  MoneySendFlow01Icon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  ArrowRight01Icon,
  Logout03Icon,
  RedoIcon,
} from "@hugeicons/core-free-icons"

// wallet stats
const walletStats = [
  {
    label: "Available Balance",
    value: "UGX 84,230,500",
    change: "+12.5%",
    positive: true,
    icon: WalletIcon,
  },
  {
    label: "Total Refunds",
    value: "UGX 2,840,000",
    change: "+8.2%",
    positive: true,
    icon: RedoIcon,
  },
  {
    label: "Total Withdrawals",
    value: "UGX 15,392,000",
    change: "-3.1%",
    positive: false,
    icon: Logout03Icon,
  },
]

// recent activities
const activities = [
  {
    id: 1,
    type: "withdrawal",
    description: "Bank Transfer",
    amount: "UGX 1,200,000",
    date: "Today, 3:45 PM",
    status: "completed",
  },
  {
    id: 2,
    type: "refund",
    description: "Customer Refund",
    amount: "UGX 89,900",
    date: "Today, 11:20 AM",
    status: "completed",
  },
  {
    id: 3,
    type: "collection",
    description: "Payment Collection",
    amount: "UGX 3,500,000",
    date: "Yesterday, 5:30 PM",
    status: "completed",
  },
  {
    id: 4,
    type: "withdrawal",
    description: "Bank Transfer",
    amount: "UGX 200,000",
    date: "Yesterday, 2:15 PM",
    status: "completed",
  },
  {
    id: 5,
    type: "refund",
    description: "Customer Refund",
    amount: "UGX 49,900",
    date: "Feb 17, 9:00 AM",
    status: "pending",
  },
  {
    id: 6,
    type: "collection",
    description: "Payment Collection",
    amount: "UGX 6,200,000",
    date: "Feb 15, 9:00 AM",
    status: "completed",
  },
  {
    id: 7,
    type: "withdrawal",
    description: "Bank Transfer",
    amount: "UGX 156,750",
    date: "Feb 14, 4:20 PM",
    status: "completed",
  },
  {
    id: 8,
    type: "refund",
    description: "Customer Refund",
    amount: "UGX 450,000",
    date: "Feb 13, 11:15 AM",
    status: "completed",
  },
]

function getActivityIcon(type: string) {
  switch (type) {
    case "withdrawal":
      return Logout03Icon
    case "refund":
      return RedoIcon
    case "collection":
      return MoneyReceiveFlow01Icon
    default:
      return WalletIcon
  }
}

export function Home() {
  const [balanceVisible, setBalanceVisible] = React.useState(true)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Home</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-4 lg:p-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Welcome back, Alex</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Manage your business payments and withdrawals
              </p>
            </div>
            <Button className="gap-2">
              <HugeiconsIcon icon={Logout03Icon} size={16} />
              Withdraw Funds
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {walletStats.map((stat, idx) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                      <HugeiconsIcon icon={stat.icon} size={20} />
                    </div>
                    {idx === 0 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 -mt-1 -mr-1"
                        onClick={() => setBalanceVisible(!balanceVisible)}
                      >
                        <HugeiconsIcon icon={EyeIcon} size={16} />
                      </Button>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-end justify-between mt-1">
                      <p className="text-2xl font-bold tracking-tight">
                        {idx === 0 && !balanceVisible ? "UGX ••••••" : stat.value}
                      </p>
                      <Badge
                        variant="secondary"
                        className="text-xs gap-1"
                      >
                        <HugeiconsIcon
                          icon={stat.positive ? ArrowUpIcon : ArrowDownIcon}
                          size={12}
                        />
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base">Recent Activities</CardTitle>
                <CardDescription>Your latest business transactions</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-xs h-8">
                View all
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-3 px-6 py-3 hover:bg-muted/50 transition-colors"
                  >
                    {/* icon */}
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted">
                      <HugeiconsIcon icon={getActivityIcon(activity.type)} size={16} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.date}
                        {activity.status === "pending" && (
                          <Badge
                            variant="secondary"
                            className="ml-2 text-xs h-4 px-1.5"
                          >
                            Pending
                          </Badge>
                        )}
                      </p>
                    </div>

                    <span className="text-sm font-semibold shrink-0 tabular-nums">
                      {activity.type === "withdrawal" ? "-" : "+"}
                      {activity.amount}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}