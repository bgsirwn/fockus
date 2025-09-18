'use client';

import Link from "next/link";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";


export default function Navbar() {

    const [enabled, setEnabled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }


  return (
    <div className="container">
      <section className="navigation">
        <nav className="flex justify-between items-center m-4 px-4 py-2 bg-white-800 space-x-4 font-bold">

          <button onClick={toggleMenu} className="md:hidden cursor-pointer focus:outline-none" aria-label="Toggle Menu">
          

          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
          
          </button>

          <Link className="space-x-6 text-xl" href="/">FOCKUS</Link>

          <Link className="space-x-2 hidden md:flex h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full hover:bg-amber-500 gap-2" href="/Report">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
          Report
          </Link>

          <Link className="space-x-2 hidden md:flex hover:bg-amber-500 h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full gap-2" href="/Setting"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
            Setting
          </Link>

          <Link className="space-x-2 hidden md:flex hover:bg-amber-500 h-10 w-30 items-center justify-center bg-gray-700 border-2 rounded-full gap-2" href="/Login">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
            Sign In
          </Link>

        <Switch checked={enabled} onChange={setEnabled} className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 data-disabled:cursor-not-allowed data-disabled:opacity-50">

              <span className="size-4 translate-x1 rounded-full bg-white transition group-data-checked:translate-x-6"/>
  
        </Switch>

        <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800 absolute w-full left-0 top-16 transition-all duration-300`}
      >
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