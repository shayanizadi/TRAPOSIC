"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "0 40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(circle at center,
          rgba(123, 44, 255, 0.25),
          rgba(10, 0, 20, 1) 70%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Neon Glow */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,0,150,0.25), transparent 70%)",
          filter: "blur(120px)",
          animation: "pulse 6s infinite",
          zIndex: 0,
        }}
      />

      {/* Glassmorphism Form */}
      <div
        style={{
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "30px",
          padding: "60px 80px",
          boxShadow: "0 0 60px rgba(255,0,150,0.25)",
          textAlign: "center",
          zIndex: 2,
          width: "420px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            color: "#ffffff",
            textShadow: "0 0 35px #ff00cc",
            marginBottom: "40px",
            letterSpacing: "-2px",
          }}
        >
          Create Account
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "18px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "18px",
            }}
          />

          <button
            style={{
              marginTop: "10px",
              padding: "16px",
              borderRadius: "14px",
              background: "linear-gradient(90deg, #ff00cc, #7b2cff)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 0 25px #ff00cc",
            }}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            marginTop: "25px",
            color: "#ffffff",
            opacity: 0.8,
            fontSize: "16px",
          }}
        >
          Already have an account?
        </p>

        <Link href="/auth/login">
          <button
            style={{
              marginTop: "10px",
              padding: "14px 30px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
