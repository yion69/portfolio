import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <Toaster />
        <Analytics /> 
        {children}
      </body>
    </html>
  );
}
