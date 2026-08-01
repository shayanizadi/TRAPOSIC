import Link from "next/link";
import { FaUser, FaUserPlus } from "react-icons/fa";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "20px 40px",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "700",
        boxShadow: "0 0 20px rgba(255,255,255,0.25)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* LOGO + TITLE */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          cursor: "pointer",
        }}
      >
        <img
          src="/logo.png"
          alt="TRAPOSIC Logo"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 0 12px #ffffff",
            border: "2px solid rgba(255,255,255,0.4)",
          }}
        />
        <span
          style={{
            textShadow: "0 0 10px #ffffff",
          }}
        >
          TRAPOSIC
        </span>
      </Link>

      {/* AUTH BUTTONS */}
      <div style={{ display: "flex", gap: "25px", fontSize: "18px" }}>
        {/* Sign In (slightly bigger icon) */}
        <Link
          href="/auth/login"
          style={{
            color: "#ffffff",
            fontWeight: "600",
            textShadow: "0 0 12px #ffffff",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUser
            style={{
              fontSize: "19px", // slightly bigger
              filter: "drop-shadow(0 0 6px #fff)",
            }}
          />
          Sign In
        </Link>

        {/* Sign Up (bigger icon) */}
        <Link
          href="/auth/signup"
          style={{
            color: "#ffffff",
            fontWeight: "600",
            textShadow: "0 0 12px #ffffff",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaUserPlus
            style={{
              fontSize: "24px",
              filter: "drop-shadow(0 0 8px #fff)",
            }}
          />
          Sign Up
        </Link>
      </div>
    </header>
  );
}
