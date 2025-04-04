
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-8 w-8 rounded-full overflow-hidden border border-border/30 hover:border-border/60 hover:bg-card/80 transition-all duration-300"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="premium-dropdown w-40 backdrop-blur-md border-white/10 dark:border-white/5 animate-scale-up"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className="cursor-pointer hover:bg-primary/10 transition-all duration-200 flex items-center"
        >
          <Sun className="mr-2 h-4 w-4 text-saHeritage-gold" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-saHeritage-gold"></span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className="cursor-pointer hover:bg-primary/10 transition-all duration-200 flex items-center"
        >
          <Moon className="mr-2 h-4 w-4 text-saHeritage-green" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-saHeritage-green"></span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")} 
          className="cursor-pointer hover:bg-primary/10 transition-all duration-200 flex items-center"
        >
          <Monitor className="mr-2 h-4 w-4 text-accent" />
          <span>System</span>
          {theme === "system" && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent"></span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
