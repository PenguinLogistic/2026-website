import Link from "next/link";
import { Button } from "@/components/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { capitalize } from "@/utils/helpers";

interface NavLinkProps {
  scrolled: boolean;
  label: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function NavLink({
  scrolled,
  label,
  onMouseEnter,
  onMouseLeave,
}: NavLinkProps) {
  const href = label === "Home" ? "/" : `/${label}`;

  return (
    <Button asChild variant="invisible">
      <Link
        href={href}
        data-nav-link
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative block overflow-hidden h-6"
      >
        <Text
          className={cn(
            "font-semibold px-4 transition-transform duration-500 ease-in-out",
            scrolled && "text-white",
            "hover:animate-slot-roll"
          )}
          variant="large"
        >
          {capitalize(label)}
        </Text>
      </Link>
    </Button>
  );
}
