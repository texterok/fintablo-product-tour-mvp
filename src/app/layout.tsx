import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sourceSansPro = localFont({
  src: [
    {
      path: "../../public/fonts/source-sans-pro/SourceSansPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/source-sans-pro/SourceSansPro-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/source-sans-pro/SourceSansPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-source-sans-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Финтабло — где утекает прибыль строительной компании",
  description:
    "Интерактивный разбор margin bridge: 89% маржинального дохода против 74% валовой прибыли. На реальных данных demo «Строительство».",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sourceSansPro.variable} h-full antialiased`}>
      <body className="min-h-full bg-ft-bg text-ft-text">{children}</body>
    </html>
  );
}
