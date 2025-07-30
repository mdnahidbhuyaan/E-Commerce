"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, Search, X,  } from "lucide-react";

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold text-primary">
          ShopEasy
        </Link>
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
              <Link
              href={link.href}
              key={link.name}
              className="text-gray-700 hover:text-primary transition"
              >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* search and cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 "
              />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-500" />
          </div>
          <Button variant="outline" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>

          <Button variant="outline" className="cursor-pointer">
          Login
          </Button>
        </div>

         {/* Mobile Menu Button */}
         <Button
         variant={"ghost"}
         size="icon"
         className="md:hidden"
         onClick={() => setMobileMenu(!mobileMenu)}
         >
       {mobileMenu ? (
           <X className="w-5 h-5"/>
        ):(
            <Menu className="w-5 h-5"/>
       )}
         </Button>
        {/* Mobile Menu */}
       {mobileMenu && (
           <div className="absolute top-full left-0 w-full bg-white px-4 pb-4 space-y-2 shadow-md z-50 md:hidden">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="block text-gray-700 py-2 border-b "
            >
              {link.name}
            </Link>
          ))}
          <Link href={"/"} className="block text-gray-700 py-2 border-b">
          Shop
          </Link>
           {navLinks.map((link) => (
               <Link
               href={link.href}
               key={link.name}
               className="hidden text-gray-700 py-2 border-b "
               onClick={() => setMobileMenu(false)}
               >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-2 pt-2      ">
               <Input
              type="text"
              placeholder="Search products..."
              className="w-full "
            />
            <Button variant="outline" size={"icon"}>
              <Search className="w-5 h-5" />
            </Button>

            <Button variant="outline" size={"icon"}>
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="cursor-pointer">
              Login
            </Button>
          </div>
        </div>
       )}
      </div>
    </header>
       </>
  );
};

export default Navbar;
