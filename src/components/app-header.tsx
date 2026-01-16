import { memo } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/shadcn-studio/blocks/dropdown-profile";
import { useTheme } from "@/hooks/use-theme";

export const AppHeader = memo(function AppHeader() {
  const { theme, toggleTheme } = useTheme();

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
            {theme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <ProfileDropdown
            trigger={
              <Button variant="ghost" size="icon" className="size-9.5">
                <Avatar className="size-9.5 rounded-md">
                  <AvatarImage src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
});
