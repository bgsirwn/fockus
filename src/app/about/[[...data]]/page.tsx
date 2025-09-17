import Link from "next/link";
import React from "react";

  // Interface untuk props
interface GetDataProps {
  params: { data: string };
}

export default function About({ params }: GetDataProps) {




return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <h3>{params.data}</h3>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/contact">Contact Us</Link>
      </nav>
    </div>
);



}