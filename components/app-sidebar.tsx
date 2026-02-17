"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  ChartLineData02Icon,
  WalletIcon,
  ArrowUpDownIcon,
  UserIcon,
  SettingsIcon,
  MailIcon,
  HelpCircleIcon,
  LogoutIcon,
  BankIcon,
  MoreHorizontalCircle01Icon,
  Sun03Icon,
  Moon02Icon,
  ComputerIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

const navMain = [
  {
    title: "Home",
    icon: Home01Icon,
    url: "#",
    isActive: true,
    items: [],
  },
  {
    title: "Revenue Sources",
    icon: ChartLineData02Icon,
    url: "#",
    isActive: false,
    items: [],
  },
  {
    title: "Transactions",
    icon: ArrowUpDownIcon,
    url: "#",
    isActive: false,
    items: [
      { title: "Collections", url: "#" },
      { title: "Withdrawals",  url: "#" },
      { title: "Refunds",   url: "#" },
    ],
  },
  {
    title: "Wallets",
    icon: WalletIcon,
    url: "#",
    isActive: false,
    items: [
      { title: "Accounts",    url: "#" },
      { title: "Savings",     url: "#" },
      { title: "Investments", url: "#" },
    ],
  },
]

const supportNav = [
  { title: "Messages",      icon: MailIcon,           url: "#" },
  { title: "Docs",          icon: HelpCircleIcon,     url: "#" },
  { title: "Settings",      icon: SettingsIcon,       url: "#" },
]

const themeOptions = [
  { value: "light",  icon: Sun03Icon,    label: "Light"  },
  { value: "dark",   icon: Moon02Icon,   label: "Dark"   },
  { value: "system", icon: ComputerIcon, label: "System" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState("Overview")
  const { theme, setTheme } = useTheme()

  const currentTheme = themeOptions.find((t) => t.value === theme) ?? themeOptions[2]

  return (
    <Sidebar {...props}>
      <SidebarHeader className="px-4 py-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={BankIcon} size={16} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-sm font-semibold">Boots</span>
                  <span className="text-xs text-muted-foreground">Dirty Boots</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {navMain.map((item) =>
              item.items.length > 0 ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={activeItem === item.title}
                        onClick={() => setActiveItem(item.title)}
                        className="gap-3"
                      >
                        <HugeiconsIcon icon={item.icon} size={18} />
                        <span>{item.title}</span>
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={14}
                          className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((sub) => (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={sub.url}>{sub.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={activeItem === item.title}
                    onClick={() => setActiveItem(item.title)}
                    className="gap-3"
                  >
                    <HugeiconsIcon icon={item.icon} size={18} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={activeItem === item.title}
                    onClick={() => setActiveItem(item.title)}
                    className="gap-3"
                  >
                    <HugeiconsIcon icon={item.icon} size={18} />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* user footer */}
      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted">
            <HugeiconsIcon icon={UserIcon} size={16} className="text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Alex Johnson</p>
            <p className="text-xs text-muted-foreground truncate">alex@boots.io</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-7 shrink-0">
                <HugeiconsIcon icon={MoreHorizontalCircle01Icon} size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={UserIcon} size={14} className="mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={SettingsIcon} size={14} className="mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                Appearance
              </DropdownMenuLabel>
              {themeOptions.map((t) => (
                <DropdownMenuItem
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={theme === t.value ? "bg-accent" : ""}
                >
                  <HugeiconsIcon icon={t.icon} size={14} className="mr-2" />
                  {t.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <HugeiconsIcon icon={LogoutIcon} size={14} className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}