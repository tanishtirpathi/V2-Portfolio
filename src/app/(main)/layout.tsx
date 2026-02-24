import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/layout/navbar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Link href="/os" className="fixed top-10 right-12">
        OS
      </Link>


      <div className="flex justify-center bg-black/90 mt-5">
        <div className="w-1/2"><Navbar />
          {children}
        </div>
      </div>
    </>
  );
}