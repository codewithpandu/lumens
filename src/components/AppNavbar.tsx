"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";

const menuItem: { name: string; href: string }[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#service",
  },
  {
    name: "Work",
    href: "/",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex text-white justify-between p-4 z-99">
      <div className="flex space-x-2 items-center">
        <div className="size-7 rounded-md bg-amber-500"></div>
        <Link href="/" className="font-trocchi tracking-widest">
          LUMENS&CO
        </Link>
      </div>
      <div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem className="flex">
              {menuItem.map((item) => (
                <Button variant="link" key={item.name} className="text-white">
                  <Link href={item.href} className="hover:text-amber-500">
                    {item.name}
                  </Link>
                </Button>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-2">
        <div className="md:hidden order-1">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-black">
                {open ? <X /> : <Menu />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8}>
              {menuItem.map((item) => (
                <DropdownMenuItem key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button
          variant="outline"
          className="text-white bg-transparent border-amber-500 hover:bg-amber-500 hover:text-black cursor-pointer"
        >
          Let&#39;s talk
        </Button>
      </div>
    </nav>
  );
}
