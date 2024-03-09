"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function HomepageButton() {
  const pathname = usePathname();

  return (
    <Link
      href={"/"}
      className='hover:underline text-sm font-medium transition-colors hover:text-primary text-muted-foreground'
    >
      {pathname === "/" ? (
        <>
          I&apos;m <span className='text-white'>Reza</span>, Full Stack
          Developer.
        </>
      ) : (
        "Home"
      )}
    </Link>
  );
}

export default HomepageButton;
