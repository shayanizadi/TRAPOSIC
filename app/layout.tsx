import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TRAPOSIC",
  description: "Music Platform",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Font: Geared (Georama) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Georama:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#050010",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Header />

        <main
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
