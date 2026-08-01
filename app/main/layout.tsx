export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#0b0010",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "sans-serif",   // فونت اصلی سایت
      }}
    >
      {children}
    </div>
  );
}
