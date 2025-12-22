import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  const href = label === "home" ? "/" : `/${label}`;

  return (
    <Button asChild variant="invisible">
      <Link
        href={href}
        data-nav-link
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative block overflow-hidden pb-4"
      >
        <Text
          className={cn("font-semibold px-4", scrolled && "text-white")}
          variant="large"
        >
          {capitalize(label)}
        </Text>
      </Link>
    </Button>
  );
}
