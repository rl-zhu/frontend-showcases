"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Ruilin's Frontend Showcase",
  description: "An interface showcasing Ruilin's frontend development projects and skills.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.description ?? ""} />
        <title>{typeof metadata.title === 'string' ? metadata.title : `An interface showcasing Ruilin's frontend development projects and skills.`}</title>
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="flex">
              <li>
                <Link href="/"  className={`px-2 border-1 text-slate-600 font-[600] text-[1.1rem] 
                ${pathname === "/" ? "active" : ""}`}
                   >
                    Home
                  
                </Link>
              </li>
              <li>
              <Link href="/blog"  className={`px-2 border-1 text-slate-600 font-[600] text-[1.1rem] 
                ${pathname === "/blog" ? "active" : ""}`}
                 >
                  Blog
                
                </Link>
              </li>
              
              <li>
              <Link href="/ui"  className={`px-2 border-1 text-slate-600 font-[600] text-[1.1rem] 
                ${pathname === "/ui" ? "active" : ""}`}
                 >
                  UI Components
                
                </Link>
              </li>
              <li>
              <Link href="/data-visualizations"   className={`px-2 border-1 text-slate-600 font-[600] text-[1.1rem] 
                ${pathname === "/data-visualizations" ? "active" : ""}`}
                >
                  Data Visualizations
                
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Footer content</footer>
      </body>
    </html>

  );
}
