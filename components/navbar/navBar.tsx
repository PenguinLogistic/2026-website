"use client";

import NavLink from "./navLink";
import Hamburger from "./hamburger";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import {
  RiCodeSSlashLine,
  RiDownloadFill,
  RiGithubFill,
  RiHome5Line,
  RiLinkedinBoxFill,
  RiMailLine,
} from "@remixicon/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "", icon: RiHome5Line },
  { label: "Skills", href: "skills", icon: RiCodeSSlashLine },
  { label: "Contact", href: "contact", icon: RiMailLine },
  // Removed "Experience" for now
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const activeIndex = navLinks.findIndex(
    (link) =>
      pathname === `/${link.label.toLowerCase()}` ||
      (pathname === "/" && link.label === "Home")
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
        "sticky top-0 z-50 flex px-6 py-4 bg-citrus-snow transition-colors duration-300 sm:px-20 sm:py-10",
        scrolled && "bg-blue-night sm:rounded-b-3xl shadow-lg"
      )}
    >
      {/*Desktop*/}
      <div id="desktop-nav" className="hidden sm:flex justify-between w-full">
        <div
          ref={navRef}
          className="relative flex mr-auto justify-between w-1/6"
        >
          {/* // Changed w-1/6 to w-1/6 */}
          {navLinks.map((link, index) => (
            <NavLink
              key={link.label}
              scrolled={scrolled}
              label={link.label.toLowerCase()}
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
          <a href="/Ryan Fung - Fullstack Software Developer.pdf" download>
            <Button variant="invisible">
              <RiDownloadFill
                className={cn("text-black", scrolled && "text-white")}
                size={48}
              />
            </Button>
          </a>
        </div>
      </div>

      {/*Mobile*/}
      <div id="mobile-nav" className="flex flex-col sm:hidden w-full">
        <Hamburger
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          scrolled={scrolled}
        />

        <div
          className={cn(
            "absolute left-0 top-full w-full z-40 transition-all duration-300 ease-out",
            "origin-top",
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none",
            scrolled ? "bg-blue-night text-white" : "bg-citrus-snow shadow-xl"
          )}
        >
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`/${link.href}`}
                className="text-2xl font-bold self-end flex gap-2 items-center "
                onClick={() => setMobileOpen(false)}
              >
                <>
                  {link.label}
                  {link.icon && <link.icon className="inline ml-2" size={48} />}
                </>
              </Link>
            ))}
            <div className="flex flex-col items-end gap-6">
              <Link
                href="https://github.com/PenguinLogistic/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 transition-colors duration-300",
                  scrolled ? "text-white" : "text-black"
                )}
              >
                <Text className="text-2xl font-bold">Github</Text>
                <RiGithubFill size={48} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/ryan-sh-fung/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 text-2xl font-bold transition-colors duration-300",
                  scrolled ? "text-white" : "text-black"
                )}
              >
                <Text className="text-2xl font-bold">LinkedIn</Text>
                <RiLinkedinBoxFill size={48} />
              </Link>

              <Link
                href="/Ryan Fung - Fullstack Software Developer.pdf"
                download
                className={cn(
                  "flex items-center gap-2 text-2xl font-bold transition-colors duration-300",
                  scrolled ? "text-white" : "text-black"
                )}
              >
                <Text className="text-2xl font-bold">Resume</Text>
                <RiDownloadFill size={48} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
