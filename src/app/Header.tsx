import { ModeToggle } from "@/components/dark-mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const email = {
  subject: "Hi",
  body: "Hey, How you doing Reza?%0AI loved your website.%0AAnd I want to talk with you about a job opportunity.",
};

function Header() {
  return (
    <header className='flex justify-between py-32'>
      <div>
        I&apos;m <span className='text-white'>Reza</span>, Full Stack Developer.
      </div>
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

        <div className='hover:text-white'>Skills</div>
        <div className='hover:text-white'>Contact</div>

        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
