"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaYoutube, FaGlobe } from "react-icons/fa";

export default function IntroPage() {
  const slogans = [
    "اولین پلتفرم ایرانی در حوزه موسیقی",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing Animation (sequential, بدون رندوم)
  useEffect(() => {
    const type = () => {
      const slogan = slogans[index];
      let i = 0;

      const typing = setInterval(() => {
        setCurrentText(slogan.slice(0, i));
        i++;

        if (i > slogan.length) {
          clearInterval(typing);

          setTimeout(() => {
            setIndex((prev) => (prev + 1) % slogans.length);
            type();
          }, 3500);
        }
      }, 65);
    };

    type();
  }, [index]); // وابسته به index تا پشت‌سرهم بیاد

  const socials = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/traposic" },
    { icon: <FaTelegram />, url: "https://t.me/Traposic" },
    { icon: <FaYoutube />, url: "https://youtube.com/@shayanizadi" },
    { icon: <FaGlobe />, url: "https://shh-dev.com" },
  ];

  // نت‌ها: پخش در کل صفحه، هرکدوم جای خودش
  const notes = [
    {
      char: "♪",
      color: "#00ff88",
      size: 34,
      top: "10%",
      left: "8%",
      anim: "noteFloat0",
    },
    {
      char: "♫",
      color: "#ff00cc",
      size: 40,
      top: "18%",
      left: "80%",
      anim: "noteFloat1",
    },
    {
      char: "♪",
      color: "#7b2cff",
      size: 32,
      top: "30%",
      left: "15%",
      anim: "noteFloat2",
    },
    {
      char: "♫",
      color: "#00eaff",
      size: 38,
      top: "40%",
      left: "70%",
      anim: "noteFloat3",
    },
    {
      char: "♪",
      color: "#ff8800",
      size: 36,
      top: "55%",
      left: "5%",
      anim: "noteFloat4",
    },
    {
      char: "♫",
      color: "#ff0055",
      size: 42,
      top: "65%",
      left: "85%",
      anim: "noteFloat5",
    },
    {
      char: "♪",
      color: "#00ffcc",
      size: 30,
      top: "75%",
      left: "25%",
      anim: "noteFloat6",
    },
    {
      char: "♫",
      color: "#cc00ff",
      size: 44,
      top: "82%",
      left: "60%",
      anim: "noteFloat7",
    },
  ];

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

        background: `
          radial-gradient(circle at center,
          rgba(123, 44, 255, 0.25),
          rgba(10, 0, 20, 1) 70%)
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* نت‌های نئونی پخش در کل صفحه */}
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

      {/* انیمیشن نت‌ها (هرکدوم حرکت متفاوت) */}
      <style>
        {`
          @keyframes noteFloat0 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(10px, -20px) rotate(8deg); }
            50% { transform: translate(-5px, 10px) rotate(-6deg); }
            75% { transform: translate(8px, -15px) rotate(10deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat1 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(-15px, -25px) rotate(-10deg); }
            50% { transform: translate(5px, 15px) rotate(6deg); }
            75% { transform: translate(-10px, -10px) rotate(-12deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat2 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(12px, -18px) rotate(5deg); }
            50% { transform: translate(-8px, 12px) rotate(-8deg); }
            75% { transform: translate(6px, -10px) rotate(9deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat3 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(-10px, -22px) rotate(-7deg); }
            50% { transform: translate(10px, 18px) rotate(11deg); }
            75% { transform: translate(-6px, -12px) rotate(-9deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat4 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(8px, -16px) rotate(6deg); }
            50% { transform: translate(-12px, 14px) rotate(-10deg); }
            75% { transform: translate(5px, -8px) rotate(7deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat5 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(-18px, -20px) rotate(-12deg); }
            50% { transform: translate(12px, 16px) rotate(14deg); }
            75% { transform: translate(-8px, -14px) rotate(-9deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat6 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(14px, -12px) rotate(4deg); }
            50% { transform: translate(-10px, 18px) rotate(-11deg); }
            75% { transform: translate(6px, -9px) rotate(8deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
          @keyframes noteFloat7 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(-12px, -18px) rotate(-5deg); }
            50% { transform: translate(14px, 20px) rotate(13deg); }
            75% { transform: translate(-7px, -11px) rotate(-8deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
          }
        `}
      </style>

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
          animation: "pulse 6s infinite",
          zIndex: 0,
        }}
      />

      {/* Glass Container */}
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
          position: "relative",
        }}
      >
        {/* Title */}
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

        {/* MUSIC WAVE — داخل کادر، سبز نئونی */}
        <div
          style={{
            marginTop: "45px",
            marginBottom: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((bar, i) => (
            <div
              key={i}
              style={{
                width: "8px",
                height: "55px",
                background: "linear-gradient(180deg, #00ff88, #00cc66)",
                borderRadius: "10px",
                animation: `wave 1.2s ease-in-out ${i * 0.12}s infinite`,
                boxShadow: "0 0 18px #00ff88",
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes wave {
            0% { transform: scaleY(0.3); }
            50% { transform: scaleY(1.3); }
            100% { transform: scaleY(0.3); }
          }
        `}</style>

        {/* Social Media */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              style={{
                fontSize: "32px",
                color: "#ff99ff",
                padding: "14px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 22px rgba(255,0,200,0.25)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#ff99ff")
              }
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Animations عمومی */}
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
