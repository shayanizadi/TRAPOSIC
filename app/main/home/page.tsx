"use client";

import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaMusic,
  FaUser,
  FaStar,
  FaCog,
  FaStore,
  FaInfoCircle,
  FaTicketAlt,
  FaUsers,
  FaCompass,
  FaListUl,
} from "react-icons/fa";

export default function MainHome() {
  const [menuOpen, setMenuOpen] = useState(true);

  const menuItems = [
    { icon: FaHome, label: "Home" },
    { icon: FaMusic, label: "Music" },
    { icon: FaStar, label: "Stars" }, // ⭐ بخش هنرمندان و افراد محبوب
    { icon: FaUsers, label: "Community" }, // کامیونیتی مثل Reddit
    { icon: FaCompass, label: "Explore" }, // اکسپلور
    { icon: FaListUl, label: "Playlists" }, // پلی لیست‌ها
    { icon: FaUser, label: "Profile" },
    { icon: FaCog, label: "Settings" },
    { icon: FaStore, label: "Store" },
    { icon: FaTicketAlt, label: "Tickets" },
  ];

  const bottomItems = [{ icon: FaInfoCircle, label: "About Us" }];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        background: "#0b0010",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 انیمیشن طلایی پشت صفحه */}
      <div
        style={{
          position: "absolute",
          width: "180%",
          height: "180%",
          top: "-40%",
          left: "-40%",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.35), rgba(0,0,0,0.9) 70%)",
          filter: "blur(120px)",
          animation: "goldWave 12s ease-in-out infinite",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      <style>
        {`
          @keyframes goldWave {
            0% { transform: scale(1) rotate(0deg); opacity: 0.55; }
            50% { transform: scale(1.15) rotate(180deg); opacity: 0.75; }
            100% { transform: scale(1) rotate(360deg); opacity: 0.55; }
          }

          @keyframes neonPulse {
            0% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 0.9; transform: scale(1); }
          }

          @keyframes buttonGlow {
            0% { box-shadow: 0 0 15px #ffd700; }
            50% { box-shadow: 0 0 35px #ffea80; }
            100% { box-shadow: 0 0 15px #ffd700; }
          }

          @keyframes spinBG {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* 🟪 Sidebar چپ — ثابت و بدون فاصله اضافی */}
      <div
        style={{
          width: menuOpen ? "240px" : "90px",
          height: "100vh",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          padding: "25px 20px",
          transition: "0.3s",
          zIndex: 5,
          overflow: "hidden",
          position: "fixed",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* دکمه باز/بسته شدن */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "20px",
            animation: "buttonGlow 3s ease-in-out infinite",
            border: "1px solid rgba(255,255,255,0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "140%",
              height: "140%",
              background:
                "conic-gradient(from 0deg, rgba(255,215,0,0.4), rgba(255,255,255,0.1), rgba(255,215,0,0.4))",
              animation: "spinBG 6s linear infinite",
              filter: "blur(25px)",
              opacity: 0.55,
            }}
          />

          <FaBars
            style={{
              fontSize: "28px",
              color: "#fff",
              zIndex: 2,
              filter: "drop-shadow(0 0 10px #ffd700)",
            }}
          />
        </div>

        {/* آیتم‌های منو */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            alignItems: menuOpen ? "flex-start" : "center",
            paddingLeft: menuOpen ? "10px" : "0px",
            transition: "0.3s",
          }}
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
              }}
            >
              <item.icon
                style={{
                  fontSize: "26px",
                  color: "#fff",
                  opacity: 0.9,
                  filter: "drop-shadow(0 0 10px #ffd700)",
                  animation: "neonPulse 3s ease-in-out infinite",
                }}
              />

              {menuOpen && (
                <span
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    opacity: 0.85,
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* جداکننده */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.2)",
            margin: "10px 0",
          }}
        />

        {/* آیتم پایین */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: menuOpen ? "flex-start" : "center",
            paddingLeft: menuOpen ? "10px" : "0px",
          }}
        >
          {bottomItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                cursor: "pointer",
              }}
            >
              <item.icon
                style={{
                  fontSize: "26px",
                  color: "#fff",
                  opacity: 0.9,
                  filter: "drop-shadow(0 0 10px #ffd700)",
                  animation: "neonPulse 3s ease-in-out infinite",
                }}
              />

              {menuOpen && (
                <span
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    opacity: 0.85,
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🟦 بخش اصلی وسط */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          zIndex: 2,
          color: "#fff",
          marginLeft: menuOpen ? "240px" : "90px",
          transition: "0.3s",
        }}
      >
        {/* چنل شیشه‌ای ایونت */}
        <div
          style={{
            width: "100%",
            height: "260px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 35px rgba(255,215,0,0.3)",
            marginBottom: "30px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/events/new-event.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.9,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.4), rgba(255,255,255,0.05))",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: "26px",
              fontWeight: "700",
              textShadow: "0 0 15px #ffd700",
            }}
          >
            New Event
          </div>
        </div>

        {/* بخش‌بندی آهنگ‌ها — تا آخر صفحه */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {[
            "Trending Songs",
            "New Songs",
            "Selected Songs",
            "Foreign Songs",
            "Iranian Songs",
            "Playlists",
          ].map((section, i) => (
            <div key={i}>
              <h2
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                  textShadow: "0 0 20px #ffd700",
                }}
              >
                {section}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                  gap: "20px",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((box) => (
                  <div
                    key={box}
                    style={{
                      height: "180px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 0 25px rgba(255,215,0,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟥 Sidebar راست — گوشه‌ها گرد شد */}
      <div
        style={{
          width: "300px",
          height: "100vh",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          padding: "30px 20px",
          zIndex: 2,
          borderRadius: "20px 0 0 20px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "28px",
            marginBottom: "30px",
            textShadow: "0 0 12px #ffd700",
          }}
        >
          Community
        </h2>

        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "120px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "18px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 0 25px rgba(255,215,0,0.25)",
              marginBottom: "20px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
