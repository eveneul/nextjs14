"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {pathname === "/" && "here!"}</Link>
        </li>
        <li>
          <Link href="/about">About {pathname === "/about" && "here!"}</Link>
        </li>
      </ul>
    </nav>
  );
}
