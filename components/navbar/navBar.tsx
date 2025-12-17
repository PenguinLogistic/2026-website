"use client;";

import { Text } from "@/components/ui/text";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NavLink from "./navLinks";
import { Button } from "../button";
import Link from "next/link";
import {
  RiDownload2Fill,
  RiDownloadFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex px-20 py-10 bg-beach-cloud transition-colors duration-300",
        scrolled && "bg-blue-night rounded-b-3xl shadow-lg"
      )}
    >
      <div
        className={cn(
          "flex mr-auto justify-between w-1/3 border-b",
          scrolled && "border-white"
        )}
      >
        <NavLink scrolled={scrolled} label="Home" />
        <NavLink scrolled={scrolled} label="Experience" />
        <NavLink scrolled={scrolled} label="Skills" />
        <NavLink scrolled={scrolled} label="Contact" />
      </div>
      <div>
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
            href="https://www.linkedin.com/in/ryan-f-02484a117/"
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
