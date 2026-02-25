import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "../../components/layout/navbar";
import DevelopersCorner from "@/components/os/pagefolder";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Link href="/os" className="fixed top-0 right-0">
        <DevelopersCorner />
      </Link>


      <div className="flex justify-center ">
        <div className="w-full md:w-4/5 lg:w-1/2">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}