import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Home!</h1>
      <p>Ini adalah halaman beranda kami.</p>
      <nav>
        <a href="/about">Tentang Kami</a> | 
        <a href="/contact">Hubungi Kami</a>
      </nav>
    </div>
  );
}
