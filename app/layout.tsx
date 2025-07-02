import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/ConvvexProvider";

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
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo.ico" />
        </head>
        <body>
          
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
