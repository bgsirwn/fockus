'use client'
import Link from "next/link";
import React from "react";

export default function Home() {

  const [inputValue, setInputValue] = React.useState("") ;

  return (
    <div>
      <h1>Selamat Datang di Home!</h1>
      <p>Ini adalah halaman beranda kami.</p>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      
      <nav>
        <Link href={`/about/${inputValue}`}>Tentang Kami</Link> | 
        <Link href="/contact">Hubungi Kami</Link>
      </nav>
    </div>
  );









}
