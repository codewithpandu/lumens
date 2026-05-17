"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function AppNavbar() {
  const menuItem: { name: string; href: string }[] = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Services",
      href: "/",
    },
    {
      name: "Work",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

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
                <NavigationMenuLink key={item.name} href={item.href}>
                  {item.name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-black">
                <Menu />
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
      </div>
    </nav>
  );
}
