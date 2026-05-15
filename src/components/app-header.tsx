import { memo } from "react";
import { MoonIcon, SunIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/shadcn-studio/blocks/dropdown-profile";
import { useTheme } from "@/hooks/use-theme";

export const AppHeader = memo(function AppHeader() {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-card sticky top-0 z-50 border-b">
      <div className="flex items-center justify-between gap-6 px-4 py-2 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md font-bold">
            SB
          </div>
          <span className="text-lg font-semibold">Admin App</span>
        </a>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="size-9"
          >
            <MoonIcon className="size-5" data-theme-icon="light" />
            <SunIcon className="size-5" data-theme-icon="dark" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <ProfileDropdown
            trigger={
              <Button variant="ghost" size="icon" className="size-9">
                <UserIcon className="size-5" />
                <span className="sr-only">Open profile menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
});
