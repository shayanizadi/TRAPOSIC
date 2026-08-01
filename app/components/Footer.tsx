// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "16px",
        textAlign: "center",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        color: "#fff",
        fontSize: "16px",
        boxShadow: "0 0 25px rgba(255,0,200,0.25)",
      }}
    >
      © 2026 TRAPOSIC — Powered by{" "}
      <Link
        href="https://shh-dev.ir"
        style={{
          color: "#ff00cc",
          fontWeight: "700",
          textShadow: "0 0 10px #ff00cc",
        }}
      >
        SHH‑DEV
      </Link>
    </footer>
  );
}
