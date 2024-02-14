'use client'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="  p-12">
    <center>
    <p><Link href={"/sign-up/"} className="w-200 p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500">Sign Up</Link>
    </p>
    <br/>
    <p><Link href={"/log-in/"} className="w-200 p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500">Log In</Link>
    </p>
    </center>
    </main>
  );
}
