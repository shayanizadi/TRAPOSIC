"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function IntroPage() {
  const slogans = [
    "A new generation of music platforms",
    "Damn… this place has everything",
    "God… I love listening to music on TRAPOSIC",
    "Therapy, but with music",
  ];

  const [currentText, setCurrentText] = useState("");

  // Typing Animation (clean, no bugs)
  useEffect(() => {
    let sloganIndex = Math.floor(Math.random() * slogans.length);

    const typeSlogan = () => {
      const slogan = slogans[sloganIndex];
      let i = 0;

      const typing = setInterval(() => {
        setCurrentText(slogan.slice(0, i));
        i++;

        if (i > slogan.length) {
          clearInterval(typing);

          setTimeout(() => {
            sloganIndex = Math.floor(Math.random() * slogans.length);
            typeSlogan();
          }, Math.random() * 2000 + 2000);
        }
      }, 65);
    };

    typeSlogan();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "0 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        /* 3D Neon Purple/Pink Background */
        background: `
          radial-gradient(circle at center,
          rgba(123, 44, 255, 0.25),
          rgba(10, 0, 20, 1) 70%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Neon Glow Layer */}
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

      {/* Glassmorphism Container */}
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
        }}
      >
        {/* TRAPOSIC Title */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#ffffff",
            textShadow: "0 0 35px #ff00cc",
            marginBottom: "40px",
            letterSpacing: "-2px",
          }}
        >
          TRAPOSIC
        </h1>

        {/* Slogan */}
        <h2
          style={{
            fontSize: "34px",
            fontWeight: "700",
            color: "#ffffff",
            textShadow: "0 0 25px #ff00cc",
            marginBottom: "40px",
            maxWidth: "900px",
          }}
        >
          {currentText}
          <span
            style={{
              opacity: 0.7,
              animation: "blink 0.8s infinite",
            }}
          >
            |
          </span>
        </h2>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link href="/auth/signup">
            <button
              style={{
                padding: "16px 36px",
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
          </Link>

          <Link href="/auth/login">
            <button
              style={{
                padding: "16px 36px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Join
            </button>
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
