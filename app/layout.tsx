import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "(주)임팩트코리아",
  description: "Estate Advertising Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <html lang="ko">
        <body>{children}</body>
      </html>
    </>
  );
}
