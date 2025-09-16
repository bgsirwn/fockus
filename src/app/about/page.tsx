import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/contact">Contact Us</Link>
      </nav>
    </div>
  );
}