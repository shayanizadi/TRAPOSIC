"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
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
      {/* Neon Glow Background */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(255,0,150,0.25), transparent 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* Rotating Logo */}
      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "blur(25px)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0 40px rgba(255,0,150,0.25)",
          animation: "spin 2.2s ease-in-out infinite",
          zIndex: 2,
        }}
      >
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="TRAPOSIC Logo"
          style={{ borderRadius: "20px" }}
        />
      </div>

      {/* Loading Lines */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "4px",
          background: "linear-gradient(90deg, #ff00cc, #7b2cff)",
          borderRadius: "10px",
          bottom: "30%",
          animation: "pulse 1.4s infinite",
          zIndex: 2,
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          40% { transform: rotate(180deg); }
          50% { transform: rotate(200deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0% { opacity: 0.2; transform: scaleX(0.6); }
          50% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0.2; transform: scaleX(0.6); }
        }
      `}</style>
    </div>
  );
}
