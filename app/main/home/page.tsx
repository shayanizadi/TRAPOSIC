"use client";

import { useEffect, useState } from "react";
import {
  FaBars,
  FaHome,
  FaMusic,
  FaUser,
  FaStar,
  FaCog,
  FaStore,
  FaTicketAlt,
  FaUsers,
  FaCompass,
  FaListUl,
  FaSignOutAlt,
  FaInfoCircle,
} from "react-icons/fa";

export default function MainHome() {
  const [menuOpen, setMenuOpen] = useState(true);

  // 🔥 تم پیش‌فرض: طلایی نئونی
  useEffect(() => {
    const saved = localStorage.getItem("traposic-theme");

    if (saved) {
      document.body.className = saved;
    } else {
      document.body.className = "theme-neon-gold";
      localStorage.setItem("traposic-theme", "theme-neon-gold");
    }
  }, []);

  const menuItems = [
    { icon: FaHome, label: "Home", link: "/main/home" },
    { icon: FaMusic, label: "Music", link: "/main/music" },
    { icon: FaStar, label: "Stars", link: "/main/stars" },
    { icon: FaUsers, label: "Community", link: "/main/community" },
    { icon: FaCompass, label: "Explore", link: "/main/explore" },
    { icon: FaListUl, label: "Playlists", link: "/main/playlists" },
    { icon: FaUser, label: "Profile", link: "/main/profile" },
    { icon: FaCog, label: "Settings", link: "/settings" },
    { icon: FaStore, label: "Store", link: "/main/store" },
    { icon: FaTicketAlt, label: "Tickets", link: "/main/tickets" },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* 🔥 بک‌گراند تم */}
      <div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: "var(--bg-gradient)",
          zIndex: 0,
        }}
      />

      {/* 🔥 انیمیشن تم */}
      <div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: "var(--bg-animation)",
          animation: "themeSpin 12s linear infinite",
          filter: "blur(120px)",
          opacity: 0.45,
          zIndex: 0,
        }}
      />

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
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 0 12px var(--main-color)",
          }}
        >
          <FaBars
            style={{
              fontSize: "22px",
              color: "#fff",
              filter: "drop-shadow(0 0 8px var(--main-color))",
            }}
          />
        </div>

        {/* آیتم‌های منو */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: menuOpen ? "flex-start" : "center",
            transition: "0.25s",
          }}
        >
          {menuItems.map((item, i) => (
            <div
              key={i}
              onClick={() => (window.location.href = item.link)}
              style={{
                display: "flex",
                flexDirection: menuOpen ? "row" : "column",
                alignItems: "center",
                gap: menuOpen ? "12px" : "0px",
                cursor: "pointer",
                padding: "8px 0",
              }}
            >
              <item.icon
                style={{
                  fontSize: "22px",
                  color: "#fff",
                  opacity: 0.9,
                  filter: "drop-shadow(0 0 8px var(--main-color))",
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
            flexDirection: menuOpen ? "row" : "column",
            alignItems: "center",
            gap: menuOpen ? "12px" : "0px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          <FaSignOutAlt
            style={{
              fontSize: "22px",
              color: "#ff4d4d", // ثابت قرمز
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
          onClick={() => alert("About Us")}
          style={{
            display: "flex",
            flexDirection: menuOpen ? "row" : "column",
            alignItems: "center",
            gap: menuOpen ? "12px" : "0px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          <FaInfoCircle
            style={{
              fontSize: "22px",
              color: "#fff",
              opacity: 0.9,
              filter: "drop-shadow(0 0 8px var(--main-color))",
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
            boxShadow: "0 0 35px var(--main-color)",
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
              textShadow: "0 0 15px var(--main-color)",
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
                  textShadow: "0 0 18px var(--main-color)",
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
                      boxShadow: "0 0 22px var(--main-color)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟥 Sidebar راست — پروفایل + XP + کامیونیتی */}
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
        {/* پروفایل نئونی */}
        <div
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "20px",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 25px var(--main-color)",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              margin: "0 auto",
              background:
                "linear-gradient(135deg, var(--main-color), var(--accent-color))",
              boxShadow: "0 0 25px var(--main-color)",
              border: "3px solid rgba(255,255,255,0.3)",
            }}
          />

          <h3
            style={{
              color: "#fff",
              marginTop: "12px",
              fontSize: "20px",
              textShadow: "0 0 10px var(--main-color)",
            }}
          >
            Shayan
          </h3>

          {/* XP BAR */}
          <div
            style={{
              width: "100%",
              height: "12px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              marginTop: "15px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                background:
                  "linear-gradient(90deg, var(--main-color), var(--accent-color))",
                boxShadow: "0 0 15px var(--main-color)",
              }}
            />
          </div>

          <p
            style={{
              color: "#fff",
              opacity: 0.8,
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            XP: 1200 / 2000
          </p>
        </div>

        {/* کامیونیتی */}
        <h2
          style={{
            color: "#fff",
            fontSize: "24px",
            marginBottom: "20px",
            textShadow: "0 0 12px var(--main-color)",
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
              boxShadow: "0 0 22px var(--main-color)",
              marginBottom: "15px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
