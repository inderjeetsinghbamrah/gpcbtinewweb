import { Sun, Moon, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1">
            <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("light")}
            >
                <Sun className="h-4 w-4" />
            </Button>

            <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("dark")}
            >
                <Moon className="h-4 w-4" />
            </Button>

            <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="icon"
                onClick={() => setTheme("system")}
            >
                <Laptop className="h-4 w-4" />
            </Button>
        </div>
    );
}
