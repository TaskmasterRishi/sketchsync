import type { Metadata } from "next";
import "./globals.css";
import { ConvexClerkProvider } from "@/providers/convex-clerk-provider";

export const metadata: Metadata = {
  title: "SketchSync",
  description:
    "A real-time collaborative whiteboard where teams sketch, plan, and innovate together seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
