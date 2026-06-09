import { auth } from "@/server/auth";

import { SidebarTrigger } from "@/common/components/sidebar";
import { ThemeToggle } from "@/common/components/theme-toggle";
import { AfterclassIcon, SearchIcon } from "@/common/components/icons";

import { HomeBreadcrumb } from "@/modules/home/components/Breadcrumb";
import { SearchCmdk } from "@/modules/search/components/SearchCmdk";

import { CoreLayoutLoginButton } from "./core-layout-login-button";
import { Button } from "@/common/components/button";
import { ProgressLink } from "@/common/components/progress-link";
import { UserProfile } from "@/common/components/user-profile";

export const CoreLayoutHeader = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 z-20 flex shrink-0 flex-col">
      {/* Main header bar */}
      <div className="bg-background/85 flex h-14 items-center gap-2 border-b border-[var(--neon-primary)]/20 px-3 backdrop-blur-md md:px-4">
        <SidebarTrigger className="text-muted-foreground hover:text-primary -ml-1 transition-colors" />

        {/* Terminal prompt separator */}
        <div className="font-mono-ui text-primary/60 hidden select-none text-xs md:block">
          &gt;_
        </div>

        <div className="flex w-full items-center justify-between">
          <HomeBreadcrumb className="hidden md:block" />

          {/* Mobile logo */}
          <ProgressLink
            href="/"
            className="flex md:hidden"
            aria-label="Home"
            variant="ghost"
            size="icon"
          >
            <AfterclassIcon className="text-primary size-5" />
          </ProgressLink>

          <div className="flex items-center gap-3 md:mr-2">
            {/* System status indicator (dark only) */}
            <div className="hidden items-center gap-1.5 md:flex">
              <div className="status-dot-neon size-1.5 shrink-0" />
              <span className="font-mono-ui text-muted-foreground text-[10px] uppercase tracking-widest">
                live
              </span>
            </div>

            {session ? (
              <>
                <UserProfile user={session.user} />
                <div className="block md:hidden">
                  <SearchCmdk asChild>
                    <Button variant="outline" size="icon" aria-label="Search">
                      <SearchIcon className="text-primary size-4" />
                    </Button>
                  </SearchCmdk>
                </div>
              </>
            ) : (
              <CoreLayoutLoginButton />
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Neon accent line below header */}
      <div className="neon-divider h-px w-full" />
    </header>
  );
};
