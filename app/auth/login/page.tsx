"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(circle at center,
          rgba(123, 44, 255, 0.25),
          rgba(10, 0, 20, 1) 70%)
        `,
        position: "relative",
      }}
    >
      {/* Neon Glow */}
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
          textAlign: "left",
          zIndex: 2,
          width: "420px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "30px",
            fontFamily: "'Georama', sans-serif",
          }}
        >
          Login
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "16px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "16px",
              fontFamily: "'Georama', sans-serif",
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
              fontSize: "16px",
              fontFamily: "'Georama', sans-serif",
            }}
          />

          <button
            style={{
              marginTop: "20px",
              padding: "16px",
              borderRadius: "14px",
              background: "linear-gradient(90deg, #ff00cc, #7b2cff)",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 0 25px #ff00cc",
              fontFamily: "'Georama', sans-serif",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "24px",
            color: "#ffffff",
            opacity: 0.8,
            fontSize: "15px",
            fontFamily: "'Georama', sans-serif",
          }}
        >
          Don’t have an account?
        </p>

        <Link href="/auth/signup">
          <button
            style={{
              marginTop: "10px",
              padding: "14px 28px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontSize: "16px",
              cursor: "pointer",
              fontFamily: "'Georama', sans-serif",
            }}
          >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
