import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Care Learning | 介護施設向け法定研修管理LMS",
  description: "法定研修の管理負担をゼロに。監査書類はボタン一つで。インストラクショナルデザインで本当に身につく研修を実現。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
