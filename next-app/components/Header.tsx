"use client";

import Link from "next/link";
import Image from "next/image";

const HEART_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#ff4d6d'/>
      <stop offset='100%' stop-color='#ff758f'/>
    </linearGradient>
  </defs>
  <rect width='200' height='200' fill='white'/>
  <path d='M100 170s-60-34-80-74c-12-24 2-56 32-56 20 0 32 14 48 34 16-20 28-34 48-34 30 0 44 32 32 56-20 40-80 74-80 74z' fill='url(#g)'/>
</svg>
`)}`;

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden animate-romantic-glow">
            {/* Logo: pinkish tint via gradient SVG */}
            <Image src={HEART_SVG} alt="Nawa Napam Logo" width={40} height={40} />
          </div>
          <span className="text-xl font-bold font-playfair bg-gradient-romantic bg-clip-text text-transparent">
            Nawa Napam
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/profiles" className="hover:text-accent transition-colors">Profiles</Link>
          <Link href="/dashboard" className="hover:text-accent transition-colors">Dashboard</Link>
          <Link href="/admin" className="hover:text-accent transition-colors">Admin</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="btn btn-soft hidden sm:inline-flex">Sign In</Link>
          <Link href="/signup" className="btn btn-romantic">Join Now</Link>
        </div>
      </div>
    </header>
  );
}
