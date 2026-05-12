import type { Metadata } from "next";
import localFont from "next/font/local";
import { PosthogScript } from "@/components/PosthogScript";
import { FintabloAnalystScript } from "@/components/FintabloAnalystScript";
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

// LabGrotesque — fintablo.ru landing font.
// Extracted from live tildacdn fontfaces; see research/fintablo-design-system.md.
const labGrotesque = localFont({
  src: [
    {
      path: "../../public/fonts/lab-grotesque/LabGrotesque-300.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/lab-grotesque/LabGrotesque-400.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lab-grotesque/LabGrotesque-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/lab-grotesque/LabGrotesque-700.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lab-grotesque",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Финтабло — куда утекает прибыль строительной компании",
  description:
    "За 2 минуты покажем на реальных данных, где из 16 миллионов выручки до прибыли доходит только 12. И на что уходят остальные 4 миллиона.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${sourceSansPro.variable} ${labGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ft-bg text-ft-text">
        <PosthogScript />
        <FintabloAnalystScript />
        {children}
      </body>
    </html>
  );
}
