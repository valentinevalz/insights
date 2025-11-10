import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: "Recover Cart",
  description: "Recover lost Shopify carts easily.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">
        <SessionProvider>
          <Navbar />
          <main className="p-8">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}