import { RiMenu3Fill, RiCloseLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface HamburgerProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  scrolled: boolean;
}

export default function Hamburger({
  mobileOpen,
  setMobileOpen,
  scrolled,
}: HamburgerProps) {
  return (
    <Button
      onClick={() => setMobileOpen(!mobileOpen)}
      variant="invisible"
      className="ml-auto p-0 gap-2"
      aria-label="Toggle menu"
    >
      <div
        className={cn(
          "flex items-center gap-2 transition-all duration-300",
          mobileOpen
            ? "opacity-0 -translate-y-2 absolute"
            : "opacity-100 translate-y-0"
        )}
      >
        <Text
          variant="huge"
          className={cn("font-bold", scrolled ? "text-white" : "text-black")}
        >
          MENU
        </Text>
        <RiMenu3Fill
          className={cn(scrolled ? "text-white" : "text-black")}
          size={40}
        />
      </div>

      <div
        className={cn(
          "flex items-center gap-2 transition-all duration-300",
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 absolute"
        )}
      >
        <Text
          variant="huge"
          className={cn("font-bold", scrolled ? "text-white" : "text-black")}
        >
          CLOSE
        </Text>
        <RiCloseLine
          className={cn(scrolled ? "text-white" : "text-black")}
          size={40}
        />
      </div>
    </Button>
  );
}
