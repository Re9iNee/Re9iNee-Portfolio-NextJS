import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { MainNav } from "./main-nav";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className=''>
        <MainNav />
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
