'use client';

import Link from "next/link";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon, PresentationChartLineIcon, Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";


export default function Navbar() {

    const [enabled, setEnabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }


  return (
    <div className="w-full">
      <section className="navigation">
        <nav className="flex justify-between items-center m-4 px-4 py-2 bg-white-800 space-x-4 font-bold">


          {/* Button to toggle menu Mobile */}
          <button onClick={toggleMenu} className="md:hidden cursor-pointer focus:outline-none" aria-label="Toggle Menu">
        
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          
          </button>


          {/* Logo Menu */}
          <Link className="flex space-x-2 text-xl" href="/">FOCKUS</Link>

          
          {/* Menu Desktop */}
          <div className="flex space-x-6">

              <Link className="space-x-2 hidden md:flex h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full hover:bg-amber-500 gap-2" href="/Report">
              <PresentationChartLineIcon className="size-6"/>
              Report
              </Link>

              <Link className="space-x-2 hidden md:flex hover:bg-amber-500 h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full gap-2" href="/Setting">
              <Cog6ToothIcon className="size-6"/>
                Setting
              </Link>
              
              <Link className="space-x-2 hidden md:flex hover:bg-amber-500 h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full gap-2" href="/Login">
                <UserIcon className="size-6"/>
                Sign In
              </Link>

            <div className="flex items-center justify-center">

            <Switch checked={enabled} onChange={setEnabled} className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-600 data-disabled:cursor-not-allowed data-disabled:opacity-50">
                  <span className="size-6 translate-x1 rounded-full bg-white transition group-data-checked:translate-x-6"/>
            </Switch>
            
            </div>

          </div>

          
        {/* Menu Mobile */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 absolute w-full left-0 top-16 transition-all duration-300`}>
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="/"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>


        </nav>
      </section>
    </div>
  );
}