import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import type { ReactNode } from "react";

interface StarRatingProps {
  value: number;
  max?: number;
}

export default function StarRating({ value, max = 5 }: StarRatingProps) {
  const stars = Array<ReactNode>();

  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      stars.push(<RiStarFill key={i} className="text-white" />);
    } else if (value >= i - 0.5) {
      stars.push(<RiStarHalfFill key={i} className="text-white" />);
    } else {
      stars.push(<RiStarFill key={i} className="text-white/30" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}
