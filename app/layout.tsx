import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frisco Tacos | San Francisco's Best Tacos",
  description: "Authentic Mexican street tacos with a Frisco twist. Made fresh daily with local Bay Area ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}