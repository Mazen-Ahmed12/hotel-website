import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Icon } from "./icon";

export function Header() {
  return (
    <header className="w-full border-b ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-black text-2xl font-bold ">Hotel</h1>

        {/* Header Links */}
        <NavigationMenu className="flex items-center ">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
                Simple
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-full gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-full gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
                Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-full gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
                Rooms & Suites
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-full gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:!bg-transparent [&[data-state=open]]:bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-full gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">Lorem Ipsum</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`!bg-transparent hover:!bg-transparent ${navigationMenuTriggerStyle()}`}
              >
                <Link href="/">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <div className="flex items-center gap-4 !relative">
          <button className="w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-105 !bg-amber-50/20">
            <Icon
              name="Search"
              size={25}
              strokeWidth={4}
              className="text-white"
            />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full transition hover:scale-105 !bg-amber-50/20">
            <Icon
              name="Menu"
              size={25}
              strokeWidth={4}
              className="text-white"
            />
          </button>
          <Button className="bg-[#e6c466] hover:bg-[#e6c466] !px-7 py-5 relative !rounded-sm text-black">
            Book Your Stay
            <Icon
              name="MoveUpRight"
              size={25}
              strokeWidth={4}
              className="text-black"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
