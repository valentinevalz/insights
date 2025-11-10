"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex justify-between items-center p-6 bg-blue-600 text-white shadow">
      {/* 🔷 Brand / Home Link */}
      <Link href="/" className="text-2xl font-bold hover:opacity-90">
        Recover Cart
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/dashboard/connect-shopify" className="hover:underline">
          Connect Shopify
        </Link>

        {status === "authenticated" ? (
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}