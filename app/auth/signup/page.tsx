"use client";

import Link from "next/link";

export default function SignupPage() {
  const notes = [
    { char: "♪", color: "#00ff88", size: 34, top: "10%", left: "8%", anim: "noteFloat0" },
    { char: "♫", color: "#ff00cc", size: 40, top: "18%", left: "80%", anim: "noteFloat1" },
    { char: "♪", color: "#7b2cff", size: 32, top: "30%", left: "15%", anim: "noteFloat2" },
    { char: "♫", color: "#00eaff", size: 38, top: "40%", left: "70%", anim: "noteFloat3" },
    { char: "♪", color: "#ff8800", size: 36, top: "55%", left: "5%", anim: "noteFloat4" },
    { char: "♫", color: "#ff0055", size: 42, top: "65%", left: "85%", anim: "noteFloat5" },
    { char: "♪", color: "#00ffcc", size: 30, top: "75%", left: "25%", anim: "noteFloat6" },
    { char: "♫", color: "#cc00ff", size: 44, top: "82%", left: "60%", anim: "noteFloat7" },
  ];

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
      {notes.map((n, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            fontSize: `${n.size}px`,
            color: n.color,
            top: n.top,
            left: n.left,
            animation: `${n.anim} 5s ease-in-out infinite`,
            opacity: 0.9,
            textShadow: `0 0 15px ${n.color}`,
            zIndex: 1,
          }}
        >
          {n.char}
        </div>
      ))}

      <style>
        {`
          @keyframes noteFloat0 {0%{transform:translate(0,0)}25%{transform:translate(10px,-20px)}50%{transform:translate(-5px,10px)}75%{transform:translate(8px,-15px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat1 {0%{transform:translate(0,0)}25%{transform:translate(-15px,-25px)}50%{transform:translate(5px,15px)}75%{transform:translate(-10px,-10px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat2 {0%{transform:translate(0,0)}25%{transform:translate(12px,-18px)}50%{transform:translate(-8px,12px)}75%{transform:translate(6px,-10px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat3 {0%{transform:translate(0,0)}25%{transform:translate(-10px,-22px)}50%{transform:translate(10px,18px)}75%{transform:translate(-6px,-12px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat4 {0%{transform:translate(0,0)}25%{transform:translate(8px,-16px)}50%{transform:translate(-12px,14px)}75%{transform:translate(5px,-8px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat5 {0%{transform:translate(0,0)}25%{transform:translate(-18px,-20px)}50%{transform:translate(12px,16px)}75%{transform:translate(-8px,-14px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat6 {0%{transform:translate(0,0)}25%{transform:translate(14px,-12px)}50%{transform:translate(-10px,18px)}75%{transform:translate(6px,-9px)}100%{transform:translate(0,0)}}
          @keyframes noteFloat7 {0%{transform:translate(0,0)}25%{transform:translate(-12px,-18px)}50%{transform:translate(14px,20px)}75%{transform:translate(-7px,-11px)}100%{transform:translate(0,0)}}
        `}
      </style>

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
          width: "450px",
        }}
      >
        {/* تیتر نسخه اولی */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            color: "#ffffff",
            textShadow: "0 0 35px #ff00cc",
            marginBottom: "40px",
          }}
        >
          Sign Up
        </h1>

        <input
          placeholder="Username"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
          }}
        />

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "#fff",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "14px",
            background: "linear-gradient(90deg, #ff00cc, #7b2cff)",
            border: "none",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 0 25px #ff00cc",
            marginBottom: "20px",
          }}
        >
          Create account
        </button>

        <Link href="/auth/login" style={{ color: "#ccc" }}>
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}
