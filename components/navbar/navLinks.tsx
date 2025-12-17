import Link from "next/link";
import { Button } from "@/components/button";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface NavbarProps {
  scrolled: boolean;
  label: string;
}

export default function NavLink({ scrolled, label }: NavbarProps) {
  return (
    <Button asChild variant="invisible">
      <Link href={`/${label}`}>
        <Text
          className={cn("font-semibold", scrolled && "text-white")}
          variant="large"
        >
          {label}
        </Text>
      </Link>
    </Button>
  );
}
