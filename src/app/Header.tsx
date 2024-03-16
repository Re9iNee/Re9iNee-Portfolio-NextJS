import { ModeToggle } from "@/components/dark-mode-toggle";
import HomepageButton from "@/components/homepage-button";
import { MainNav } from "@/components/main-nav";
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
    <header className='flex justify-between items-center sticky py-14'>
      <HomepageButton />

      <div className='flex gap-4 cursor-pointer items-center'>
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
      </div>
    </header>
  );
}

export default Header;
