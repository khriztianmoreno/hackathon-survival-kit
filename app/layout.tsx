import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DemoDay — Hackathon Showcase",
  description:
    "Where hackathon teams ship their weekend projects. Browse, vote, get inspired.",
  metadataBase: new URL("http://localhost:3000"),
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans">
        <div className="grid-pattern mask-bottom pointer-events-none fixed inset-x-0 top-0 -z-10 h-[640px] opacity-50" />
        {children}
      </body>
    </html>
  );
}
