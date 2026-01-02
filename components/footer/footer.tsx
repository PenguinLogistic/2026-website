"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Heading } from "../ui/heading";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailAddFill,
} from "@remixicon/react";
// import { SILLY_QUOTES } from "@/utils/constants";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

import Link from "next/link";

export default function Footer() {
  // const pathname = usePathname();
  // // const [quote, setQuote] = useState("");

  // // useEffect(() => {
  // //   // eslint-disable-next-line react-hooks/set-state-in-effect
  // //   setQuote(SILLY_QUOTES[Math.floor(Math.random() * SILLY_QUOTES.length)]);
  // // }, [pathname]);

  return (
    <div className="flex flex-col bg-blue-midnight gap-20 sm:p-20">
      <section>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-3 mx-auto justify-center">
            <Heading variant="h2" className="text-white">
              Ryan Fung
            </Heading>
            <Text variant="small" className="text-white">
              Toronto, Canada &#8226; &copy; 2026-2027 Ryan Fung
            </Text>
          </div>

          {/* <div className="flex flex-col items-center text-center justify-center">
            <Text className="text-white max-w-sm">&quot;{quote}&quot;</Text>
          </div> */}

          <div className="flex gap-4 items-start mx-auto flex-col">
            <div className="flex items-center ">
              <Button asChild variant="invisible" className="p-0">
                <Link
                  href="mailto: ryan.shiuhong.fung@gmail.com"
                  className="flex gap-4"
                >
                  <RiMailAddFill className="text-white" />
                  <Text variant="small" className="text-white hover:underline">
                    ryan.shiuhong.fung@gmail.com
                  </Text>
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="invisible" className="p-0">
                <Link
                  href="https://github.com/PenguinLogistic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4"
                >
                  <RiGithubFill className="text-white" />
                  <Text variant="small" className="text-white hover:underline">
                    https://github.com/PenguinLogistic/
                  </Text>
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="invisible" className="p-0">
                <Link
                  href="https://www.linkedin.com/in/ryan-sh-fung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4"
                >
                  <RiLinkedinBoxFill className="text-white" />
                  <Text variant="small" className="text-white hover:underline">
                    https://www.linkedin.com/in/ryan-sh-fung/
                  </Text>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
