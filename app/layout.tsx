import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyaranjan - Digital Creative Director",
  description: "Portfolio of Priyaranjan - A hands-on Digital Creative Director focused on crafting innovative digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full antialiased ${funnelDisplay.className}`}>
        {children}
      </body>
    </html>
  );
}
