// next
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

// scss
import "../styles/globals.css";

// components
import ClientLayout from "@/components/organisms/ClientLayout";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm",
});

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
    <html lang="ja" className={ibmPlexSans.variable}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
