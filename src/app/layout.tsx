// next
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

// fonts
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

// scss
import "../styles/globals.css";

// components
// import ClientLayout from "@/components/organisms/ClientLayout";

export const metadata: Metadata = {
  title: "NEO TOKYO | 新たな不動産の価値を創出する",
  description: "NEO TOKYO それは不動産と価値を創出する全く新しいWebサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={ibmPlexMono.variable}>
        {/* <ClientLayout>{children}</ClientLayout> */}
        {children}
      </body>
    </html>
  );
}
