"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/experiences",
    text: "Experiences",
  },
  {
    href: "/skills",
    text: "Skills",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      {links.map(({ href, text }) => {
        return (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:bg-neutral-200 rounded-sm cursor-pointer p-2 text-neutral-50 ${
              pathname === href && "text-primary font-bold underline"
            }`}
          >
            {text}
          </Link>
        );
      })}
    </nav>
  );
}
