import "./globals.css";

export const metadata = {
  title: "TRAPOSIC",
  description: "Music Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
