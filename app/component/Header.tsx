import React from 'react';
import Link from 'next/link';
import '../globals.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
