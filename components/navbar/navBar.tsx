"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import NavLink from "./navLink";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiDownloadFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

const navLinks = ["Home", "Skills", "Contact"]; // Removed "Experience" for now

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const activeIndex = navLinks.findIndex(
    (link) =>
      pathname === `/${link.toLowerCase()}` ||
      (pathname === "/" && link === "Home")
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current) return;

      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
      if (targetIndex === -1) return;

      const links = navRef.current.querySelectorAll("[data-nav-link]");
      const targetLink = links[targetIndex] as HTMLElement;

      if (targetLink) {
        const containerRect = navRef.current.getBoundingClientRect();
        const linkRect = targetLink.getBoundingClientRect();

        setUnderlineStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [hoveredIndex, activeIndex, scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex px-20 py-10 bg-citrus-snow transition-colors duration-300",
        scrolled && "bg-blue-night rounded-b-3xl shadow-lg"
      )}
    >
      <div ref={navRef} className="relative flex mr-auto justify-between w-1/6">
        {/* // Changed w-1/6 to w-1/6 */}
        {navLinks.map((link, index) => (
          <NavLink
            key={link}
            scrolled={scrolled}
            label={link.toLowerCase()}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
        <div
          className={cn(
            "absolute bottom-0 h-1 transition-all duration-300 ease-out",
            scrolled ? "bg-white" : "bg-black"
          )}
          style={{
            left: `${underlineStyle.left}px`,
            width: `${underlineStyle.width}px`,
          }}
        />
      </div>

      <div className="flex gap-10">
        <Button asChild variant="invisible">
          <Link
            href="https://github.com/PenguinLogistic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill
              className={cn("text-black", scrolled && "text-white")}
              size={48}
            />
          </Link>
        </Button>
        <Button asChild variant="invisible">
          <Link
            href="https://www.linkedin.com/in/ryan-sh-fung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill
              className={cn("text-black", scrolled && "text-white")}
              size={48}
            />
          </Link>
        </Button>
        <Button
          variant="invisible"
          onClick={() => console.log("this should download a resume")}
        >
          <RiDownloadFill
            className={cn("text-black", scrolled && "text-white")}
            size={48}
          />
        </Button>
      </div>
    </header>
  );
}
