import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <input type="text" />
        <button>OK</button>
      </div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About Us</Link>
      </nav>
    </div>
  );
}