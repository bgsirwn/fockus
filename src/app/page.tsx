'use client'
import Link from "next/link";
import React from "react";

export default function Home() {

  const [inputValue, setInputValue] = React.useState("") ;

  return (
    <div className="container">
      <section className="navigation">
        <nav className="flex flex-row space-x-4">
          <Link href={`/about/${inputValue}`}>Tentang Kami</Link>
          <Link href="/contact"> Hubungi Kami</Link>
        </nav>
      </section>
      <section className="main-content flex flex-col">
        <h1>Selamat Datang di Home!</h1>
        <p>Ini adalah halaman beranda kami.</p>
        <input className="border border-gray-300 p-2 rounded" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      </section>
      
    </div>
  );









}
