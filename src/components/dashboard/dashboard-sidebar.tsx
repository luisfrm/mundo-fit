"use client"

import type React from "react"

import { Home, Dumbbell, User, MessageCircle, Activity } from "lucide-react"

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
  SidebarRail,
} from "@/components/ui/sidebar"
import { Logo } from "../common/Logo"

// Menu items para el dashboard
const menuItems = [
  {
    title: "Principal",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
      {
        title: "Mis Rutinas",
        url: "/dashboard/routines",
        icon: Dumbbell,
      },
      {
        title: "Mis Entrenamientos",
        url: "/dashboard/workouts",
        icon: Activity,
      },
      {
        title: "Chatbot IA",
        url: "/chatbot",
        icon: MessageCircle,
      },
    ],
  },
  {
    title: "Cuenta",
    items: [
      {
        title: "Perfil",
        url: "/profile",
        icon: User,
      },
    ],
  },
]

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="left" {...props}>
      <SidebarHeader>
        <div className="flex items-center space-x-2 px-2 pt-2">
          <Logo />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-12">
              <User />
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Juan Pérez</span>
                <span className="text-xs text-muted-foreground">Plan Premium</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
