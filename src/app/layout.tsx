import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        inter.variable,
        "font-sans",
        "scroll-smooth",
      )}
    >
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
