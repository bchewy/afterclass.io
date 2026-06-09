"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/common/components/sidebar";
import { Logo } from "@/common/components/logo";
import {
  ChartLineIcon,
  GithubIcon,
  HelpDeskIcon,
  PlusIcon,
  StarLineAltIcon,
  StatisticsTableIcon,
  TelegramIcon,
} from "@/common/components/icons";
import { env } from "@/env";
import Link from "next/link";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/common/hooks";
import { ProgressLink } from "@/common/components/progress-link";
import { Tag } from "@/common/components/tag";
import { cn } from "@/common/functions";

type SidebarItemType = {
  label: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  target?: string;
  showMobileOnly?: boolean;
  devOnly?: boolean;
  isNew?: boolean;
  isActiveWithoutExact?: boolean;
};

type SidebarCategoryType = {
  main: SidebarItemType[];
  [key: string]: SidebarItemType[];
};

const SIDEBAR_CATEGORY_ITEMS: SidebarCategoryType = {
  main: [
    {
      label: "Reviews",
      icon: <StarLineAltIcon size={16} />,
      href: "/",
    },
    {
      label: "Bid Analytics",
      icon: <ChartLineIcon />,
      href: "/bidding",
      isActiveWithoutExact: true,
      isNew: true,
    },
    ...(process.env.NODE_ENV === "development" ? [] : []),
  ],
  contribute: [
    {
      label: "Write a Review",
      icon: <PlusIcon size={16} />,
      href: "/submit",
      showMobileOnly: true,
      external: true,
      target: "_self",
    },
    {
      label: "AfterClass OSS",
      icon: <GithubIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_GITHUB_LINK,
      showMobileOnly: true,
      external: true,
    },
  ],
  telegram: [
    {
      label: "Channel",
      icon: <TelegramIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_CHANNEL_LINK,
      external: true,
    },
    {
      label: "Helpdesk",
      icon: <HelpDeskIcon size={16} />,
      href: env.NEXT_PUBLIC_AC_HELPDESK_LINK,
      external: true,
    },
  ],
  site: [
    {
      label: "Statistics",
      icon: <StatisticsTableIcon size={16} />,
      href: "/statistics",
      external: true,
    },
  ],
};

const { main: SIDEBAR_MAIN_ITEMS, ...SIDEBAR_OTHER_ITEMS } =
  SIDEBAR_CATEGORY_ITEMS;

const sidebarItemName = (label: string) =>
  label.replace(/\s/g, "-").toLowerCase();

export const AppSidebar = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  return (
    <Sidebar className="border-r border-[var(--neon-primary)]/15">
      {/* Logo header with neon accent */}
      <SidebarHeader className="border-b border-[var(--neon-primary)]/15 pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="pt-2" asChild>
              <Link href="/" className="text-primary flex items-center px-3">
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* Neon version badge */}
        <div className="px-3 pb-1">
          <div className="font-mono-ui text-[var(--neon-primary)] flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] opacity-70">
            <div className="status-dot-neon size-1.5 shrink-0" />
            <span>smu · v2 · live</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SearchCmdk />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Main nav items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_MAIN_ITEMS.map((item) => {
                const isActive = item.isActiveWithoutExact
                  ? pathname.startsWith(item.href)
                  : pathname === item.href;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <ProgressLink
                        variant="ghost"
                        href={item.href}
                        className={cn(
                          "flex items-center justify-start gap-x-2.5 border px-3 py-2 text-sm font-medium after:!content-none transition-all duration-150",
                          isActive
                            ? "text-primary neon-border-subtle border-[var(--neon-primary)]/40 bg-[var(--neon-primary)]/5"
                            : "text-muted-foreground hover:text-foreground border-transparent hover:border-border hover:bg-muted/50",
                        )}
                        data-test={`sidebar-${sidebarItemName(item.label)}`}
                      >
                        <span className={isActive ? "text-primary" : "text-muted-foreground"}>
                          {item.icon}
                        </span>
                        {item.label}
                        {item.isNew && (
                          <Tag
                            variant="outline"
                            color="success"
                            size="xs"
                            deletable={false}
                          >
                            beta
                          </Tag>
                        )}
                      </ProgressLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Other nav categories */}
        {Object.entries(SIDEBAR_OTHER_ITEMS).map(([key, items]) =>
          !isMobile && items.every((item) => item.showMobileOnly) ? null : (
            <SidebarGroup key={key}>
              <SidebarGroupLabel className="font-mono-ui mb-1 px-3 text-[9px] uppercase tracking-[0.18em] text-[var(--neon-primary)]/50">
                {`// ${key}`}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) =>
                    item.devOnly && process.env.NODE_ENV !== "development" ? null : (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton asChild isActive={pathname === item.href}>
                          <ProgressLink
                            variant="ghost"
                            href={item.href}
                            target={item.external ? (item.target ?? "_blank") : undefined}
                            className="text-muted-foreground hover:text-foreground flex items-center justify-start gap-x-2.5 border border-transparent px-3 py-2 text-sm font-medium after:!content-none transition-all duration-150 hover:border-border hover:bg-muted/50"
                            data-umami-event={`sidebar-${sidebarItemName(item.label)}`}
                            data-test={`sidebar-${sidebarItemName(item.label)}`}
                          >
                            <span className="text-muted-foreground">{item.icon}</span>
                            {item.label}
                            {item.isNew && (
                              <Tag
                                variant="outline"
                                color="success"
                                size="xs"
                                deletable={false}
                              >
                                new
                              </Tag>
                            )}
                          </ProgressLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ),
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ),
        )}
      </SidebarContent>

      {/* Footer with grid reference */}
      <SidebarFooter className="border-t border-[var(--neon-primary)]/15 py-3">
        <div className="px-4">
          <div className="font-mono-ui text-[8px] uppercase tracking-[0.15em] text-muted-foreground/40">
            afterclass.io © 2024
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
