"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileMenu from "./MobileMenu";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];
const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 grid grid-cols-12">
      <div className="col-span-6 flex md:col-span-3">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-bold"
        >
          Mallikarjuna
        </Link>
      </div>

      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={pathname == item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="col-span-6 flex md:col-span-3 items-center justify-end">
        <Button className="hidden sm:flex" asChild>
          <Link href="https://drive.google.com/file/d/11oUEMua6eIbFjduHp4drxS_xA63Ci3lD/view?usp=sharing">
            Resume
          </Link>
        </Button>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
