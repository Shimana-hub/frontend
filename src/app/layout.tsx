import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ServiceHub - Connect with Trusted Service Providers",
  description:
    "Find skilled professionals for all your home and business needs. we connect you with verified experts in your area.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Bootstrap viewport requirement for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Bootstrap JS bundle (needed for dropdowns, navbar toggler, etc.) */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          async
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
