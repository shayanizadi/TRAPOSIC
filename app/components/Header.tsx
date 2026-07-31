"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",

        backdropFilter: "blur(25px)",
        background: "rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      {/* Logo + Title */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <Image
            src="/logo.png"
            width={55}
            height={55}
            alt="TRAPOSIC Logo"
            style={{ borderRadius: "10px" }}
          />

          <h2
            style={{
              color: "#ffffff",
              fontSize: "34px",
              fontWeight: "800",
              letterSpacing: "-1px",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            TRAPOSIC
          </h2>
        </div>
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link
          href="/auth/login"
          style={{
            color: "#ffffff",
            fontSize: "22px",
            fontFamily: "'Georama', sans-serif",
            fontWeight: "600",
          }}
        >
          Login
        </Link>

        <Link
          href="/auth/signup"
          style={{
            color: "#ffffff",
            fontSize: "22px",
            fontFamily: "'Georama', sans-serif",
            fontWeight: "600",
          }}
        >
          Signup
        </Link>
      </nav>
    </header>
  );
}
