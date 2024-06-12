import { ModeToggle } from "@/components/dark-mode-toggle";
import HomepageButton from "@/components/homepage-button";
import { MainNav } from "@/components/main-nav";
import Sidebar from "@/components/sidebar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

import Link from "next/link";

const email = {
  subject: "Hi",
  body: "Hey, How you doing Reza?%0AI loved your website.%0AAnd I want to talk with you about a job opportunity.",
};

function Header() {
  return (
    <header
      className='flex justify-between gap-8 items-center px-2 py-14 sticky top-0 
      md:flex-row md:gap-0 md:px-4'
    >
      <HomepageButton />

      <Sidebar />

      {/* <div className='flex flex-col gap-4 cursor-pointer items-center'>
        <Link
          href={`mailto:attarzadeh76@gmail.com?subject=${email.subject}&body=${email.body}`}
          prefetch={false}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "cursor-pointer"
          )}
        >
          <EnvelopeOpenIcon className='mr-2 h-4 w-4' />
          Say Hi
        </Link>

        <MainNav />

        <ModeToggle />
      </div> */}
    </header>
  );
}

export default Header;
