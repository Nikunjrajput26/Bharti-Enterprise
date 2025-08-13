"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Category } from "./Category";
import { CategoryListDropdown } from "./CategoryListDropdown";
import { Link } from "react-router-dom";
import bharatiLogo from "../../assets/bharati_logo.jpg";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
  { name: "Technical Guide", href: "/technical-guide" },
];

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://neccodelhi.com/wp-content/uploads/2023/02/necco_video_bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 "></div>
      </div> */}
      <header className="inset-x-0 top-0 z-50 inset-0 bg-white ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:p-5"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 pt-2 rounded-md">
              <span className="sr-only">Bharti sales</span>
              <img
                alt="Bharti sales Logo"
                src={bharatiLogo}
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-4">
                <Link
                  to="/search"
                  className="font-semibold text-gray-800 hover:text-black hover:bg-gray-50"
                >
                  <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
                </Link>
                <Link
                  to="/cart"
                  className="font-semibold text-gray-800 hover:text-black hover:bg-gray-50"
                >
                  <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <Category />
            {navigation.map((item) => (
              <Link to={item.href}>
                <Button
                  key={item.name}
                  variant="ghost"
                  className="outline-0 gap-0 text-gray-800 cursor-pointer"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:gap-2 lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/search"
              className="font-semibold text-gray-800 hover:text-black hover:bg-white px-2 py-1 rounded-md"
            >
              <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
            </Link>
            <Link
              to="/cart"
              className="font-semibold text-gray-800 hover:text-black hover:bg-white px-2 py-1 rounded-md"
            >
              <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between lg:p-8">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Bharti sales</span>
                <img
                  alt="Bharti sales Logo"
                  src="https://www.tirupatisales.com/site/images/Tirupati-Sales-Logo.webp"
                  className="h-9 w-auto"
                />
              </Link>
              <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-x-4">
                  <Link
                    to="/search"
                    className="font-semibold text-gray-600 hover:text-black"
                  >
                    <MagnifyingGlassIcon className="inline-block mr-1 size-5" />
                  </Link>
                  <Link
                    to="/cart"
                    className="font-semibold text-gray-600 hover:text-black"
                  >
                    <ClipboardDocumentListIcon className="inline-block mr-1 size-5" />
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* Dropdown with categories & subcategories */}
                  <CategoryListDropdown />
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-700 hover:text-black hover:bg-gray-50 hover:border hover:border-[#E03131]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
