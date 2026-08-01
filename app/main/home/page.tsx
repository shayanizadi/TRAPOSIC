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
  FaSignOutAlt,
} from "react-icons/fa";

export default function MainHome() {
  const [menuOpen, setMenuOpen] = useState(true);

  const menuItems = [
    { icon: FaHome, label: "Home" },
    { icon: FaMusic, label: "Music" },
    { icon: FaStar, label: "Stars" },
    { icon: FaUsers, label: "Community" },
    { icon: FaCompass, label: "Explore" },
    { icon: FaListUl, label: "Playlists" },
    { icon: FaUser, label: "Profile" },
    { icon: FaCog, label: "Settings" },
    { icon: FaStore, label: "Store" },
    { icon: FaTicketAlt, label: "Tickets" },
  ];

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
      {/* 🔥 پس‌زمینه طلایی */}
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

          @keyframes buttonGlow {
            0% { box-shadow: 0 0 15px #ffd700; }
            50% { box-shadow: 0 0 30px #ffea80; }
            100% { box-shadow: 0 0 15px #ffd700; }
          }
        `}
      </style>

      {/* 🟪 Sidebar چپ */}
      <div
        style={{
          width: menuOpen ? "220px" : "75px",
          height: "100vh",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          padding: menuOpen ? "20px 15px" : "15px 10px",
          transition: "0.25s",
          zIndex: 5,
          overflow: "hidden",
          position: "fixed",
          left: 0,
          top: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* دکمه باز/بسته شدن */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginBottom: "15px",
            animation: "buttonGlow 3s ease-in-out infinite",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <FaBars
            style={{
              fontSize: "22px",
              color: "#fff",
              filter: "drop-shadow(0 0 8px #ffd700)",
            }}
          />
        </div>

        {/* آیتم‌های منو بالا */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: menuOpen ? "flex-start" : "center",
            paddingLeft: menuOpen ? "5px" : "0px",
            transition: "0.25s",
          }}
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: menuOpen ? "12px" : "0px",
                cursor: "pointer",
              }}
            >
              <item.icon
                style={{
                  fontSize: "22px",
                  color: "#fff",
                  opacity: 0.9,
                  filter: "drop-shadow(0 0 8px #ffd700)",
                }}
              />

              {menuOpen && (
                <span
                  style={{
                    color: "#fff",
                    fontSize: "16px",
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
            background: "rgba(255,255,255,0.25)",
            margin: "10px 0",
          }}
        />

        {/* Logout */}
        <div
          onClick={() => alert("Logout clicked")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: menuOpen ? "12px" : "0px",
            cursor: "pointer",
            paddingLeft: menuOpen ? "5px" : "0px",
            marginBottom: "6px",
          }}
        >
          <FaSignOutAlt
            style={{
              fontSize: "22px",
              color: "#ff4d4d",
              filter: "drop-shadow(0 0 8px #ff4d4d)",
            }}
          />

          {menuOpen && (
            <span
              style={{
                color: "#ff4d4d",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Logout
            </span>
          )}
        </div>

        {/* About Us */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: menuOpen ? "12px" : "0px",
            cursor: "pointer",
            paddingLeft: menuOpen ? "5px" : "0px",
          }}
        >
          <FaInfoCircle
            style={{
              fontSize: "22px",
              color: "#fff",
              opacity: 0.9,
              filter: "drop-shadow(0 0 8px #ffd700)",
            }}
          />

          {menuOpen && (
            <span
              style={{
                color: "#fff",
                fontSize: "16px",
                opacity: 0.85,
              }}
            >
              About Us
            </span>
          )}
        </div>
      </div>

      {/* 🟦 بخش اصلی وسط */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          zIndex: 2,
          color: "#fff",
          marginLeft: menuOpen ? "220px" : "75px",
          transition: "0.25s",
        }}
      >
        {/* چنل شیشه‌ای ایونت */}
        <div
          style={{
            width: "100%",
            height: "230px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "20px",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 35px rgba(255,215,0,0.3)",
            marginBottom: "25px",
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
              bottom: "18px",
              left: "18px",
              fontSize: "24px",
              fontWeight: "700",
              textShadow: "0 0 15px #ffd700",
            }}
          >
            New Event
          </div>
        </div>

        {/* بخش‌بندی آهنگ‌ها */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
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
                  fontSize: "26px",
                  marginBottom: "15px",
                  textShadow: "0 0 18px #ffd700",
                }}
              >
                {section}
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "16px",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((box) => (
                  <div
                    key={box}
                    style={{
                      height: "160px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "16px",
                      backdropFilter: "blur(15px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: "0 0 22px rgba(255,215,0,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟥 Sidebar راست */}
      <div
        style={{
          width: "270px",
          height: "100vh",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          padding: "25px 18px",
          zIndex: 2,
          borderRadius: "20px 0 0 20px",
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: "24px",
            marginBottom: "20px",
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
              height: "110px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "16px",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 0 22px rgba(255,215,0,0.25)",
              marginBottom: "15px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
