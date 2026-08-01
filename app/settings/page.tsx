"use client";

import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaShoppingCart,
  FaPalette,
  FaUserCog,
  FaShieldAlt,
  FaBell,
  FaDesktop,
  FaBolt,
  FaMusic,
  FaUser,
} from "react-icons/fa";

export default function SettingsPage() {
  const [theme, setTheme] = useState("theme-neon-gold");

  useEffect(() => {
    const saved = localStorage.getItem("traposic-theme");
    if (saved) {
      setTheme(saved);
      document.body.className = saved;
    }
  }, []);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("traposic-theme", newTheme);
    document.body.className = newTheme;
  };

  const freeThemes = [
    {
      id: "theme-neon-gold",
      name: "Neon Gold",
      preview: "linear-gradient(135deg, #ffd700, #ff00c8)",
    },
    {
      id: "theme-purple-galaxy",
      name: "Purple Galaxy",
      preview: "linear-gradient(135deg, #a200ff, #4b00ff)",
    },
    {
      id: "theme-dark-blue",
      name: "Dark Blue",
      preview: "linear-gradient(135deg, #0044ff, #001133)",
    },
  ];

  const paidThemes = [
    {
      id: "theme-cyber-red",
      name: "Cyber Red",
      price: "$4.99",
      preview: "linear-gradient(135deg, #ff0033, #ff5500)",
    },
    {
      id: "theme-emerald-glow",
      name: "Emerald Glow",
      price: "$3.99",
      preview: "linear-gradient(135deg, #00ff88, #008844)",
    },
    {
      id: "theme-ice-neon",
      name: "Ice Neon",
      price: "$5.99",
      preview: "linear-gradient(135deg, #00eaff, #0099ff)",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "25px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* بک‌گراند تم */}
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

      {/* انیمیشن تم */}
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

      {/* دکمه بازگشت */}
      <div
        onClick={() => (window.location.href = "/main/home")}
        style={{
          width: "120px",
          height: "38px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          marginBottom: "20px",
          boxShadow: "0 0 12px var(--main-color)",
          zIndex: 2,
        }}
      >
        <FaArrowLeft style={{ fontSize: "16px", color: "var(--main-color)" }} />
        <span style={{ fontSize: "16px", color: "#fff" }}>Home</span>
      </div>

      {/* عنوان */}
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          textShadow: "0 0 20px var(--main-color)",
          zIndex: 2,
        }}
      >
        Settings
      </h1>

      {/* ----------------------------- */}
      {/* پنل بندی شیشه‌ای جذاب        */}
      {/* ----------------------------- */}

      <GlassPanel icon={<FaPalette />} title="Theme Settings">
        <ThemePanel
          freeThemes={freeThemes}
          paidThemes={paidThemes}
          activeTheme={theme}
          changeTheme={changeTheme}
        />
      </GlassPanel>

      <GlassPanel icon={<FaUserCog />} title="Account Settings">
        <SettingItem label="Change Username" />
        <SettingItem label="Change Email" />
        <SettingItem label="Two-Step Verification" />
        <SettingItem label="Delete Account" danger />
      </GlassPanel>

      <GlassPanel icon={<FaShieldAlt />} title="Privacy Settings">
        <SettingItem label="Hide Profile from Search" />
        <SettingItem label="Hide Online Status" />
        <SettingItem label="Block Tracking Cookies" />
      </GlassPanel>

      <GlassPanel icon={<FaBell />} title="Notification Settings">
        <SettingItem label="Music Alerts" />
        <SettingItem label="Community Alerts" />
        <SettingItem label="Friend Requests" />
        <SettingItem label="Popup Notifications" />
      </GlassPanel>

      <GlassPanel icon={<FaDesktop />} title="Display Settings">
        <SettingItem label="Show XP Bar" />
        <SettingItem label="Show Profile Glow" />
        <SettingItem label="Animated Background" />
        <SettingItem label="High Contrast Mode" />
      </GlassPanel>

      <GlassPanel icon={<FaBolt />} title="Performance Settings">
        <SettingItem label="Low Performance Mode" />
        <SettingItem label="Disable Heavy Animations" />
        <SettingItem label="Optimize Rendering" />
      </GlassPanel>

      <GlassPanel icon={<FaMusic />} title="Audio Settings">
        <SettingItem label="Auto Play Music" />
        <SettingItem label="Normalize Volume" />
        <SettingItem label="Bass Boost" />
      </GlassPanel>

      <GlassPanel icon={<FaUser />} title="Profile Settings">
        <SettingItem label="Change Avatar" />
        <SettingItem label="Change Bio" />
        <SettingItem label="Profile Visibility" />
      </GlassPanel>
    </div>
  );
}

/* ----------------------------- */
/* پنل شیشه‌ای جذاب              */
/* ----------------------------- */

function GlassPanel({ title, icon, children }: any) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "20px",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.15)",
        marginBottom: "25px",
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            color: "var(--main-color)",
            filter: "drop-shadow(0 0 10px var(--main-color))",
          }}
        >
          {icon}
        </div>

        <h2
          style={{
            fontSize: "22px",
            textShadow: "0 0 12px var(--main-color)",
          }}
        >
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}

/* ----------------------------- */
/* آیتم‌های تنظیمات              */
/* ----------------------------- */

function SettingItem({ label, danger }: any) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        padding: "12px",
        borderRadius: "10px",
        border: danger
          ? "1px solid #ff0033"
          : "1px solid rgba(255,255,255,0.15)",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "15px" }}>{label}</span>

      <div
        style={{
          width: "40px",
          height: "20px",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            background: danger ? "#ff0033" : "var(--main-color)",
            borderRadius: "50%",
            position: "absolute",
            right: "2px",
            top: "1px",
          }}
        />
      </div>
    </div>
  );
}

/* ----------------------------- */
/* پنل تم‌ها                     */
/* ----------------------------- */

function ThemePanel({ freeThemes, paidThemes, activeTheme, changeTheme }: any) {
  return (
    <>
      <h3
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          textShadow: "0 0 10px var(--main-color)",
        }}
      >
        Free Themes
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        {freeThemes.map((t: any) => (
          <ThemePreviewBox
            key={t.id}
            theme={t}
            active={activeTheme}
            onSelect={changeTheme}
          />
        ))}
      </div>

      <h3
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          textShadow: "0 0 10px #ff00c8",
        }}
      >
        Theme Store
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "15px",
        }}
      >
        {paidThemes.map((t: any) => (
          <PaidThemePreviewBox key={t.id} theme={t} />
        ))}
      </div>
    </>
  );
}

/* ----------------------------- */
/* پیش‌نمایش تم رایگان          */
/* ----------------------------- */

function ThemePreviewBox({ theme, active, onSelect }: any) {
  const isActive = active === theme.id;

  return (
    <div
      onClick={() => onSelect(theme.id)}
      style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "15px",
        backdropFilter: "blur(16px)",
        border: isActive
          ? "2px solid var(--main-color)"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: isActive ? "0 0 20px var(--main-color)" : "none",
        cursor: "pointer",
      }}
    >
      <h4 style={{ marginBottom: "10px", fontSize: "18px" }}>{theme.name}</h4>

      <div
        style={{
          width: "100%",
          height: "80px",
          borderRadius: "10px",
          background: theme.preview,
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        }}
      />

      {isActive && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--main-color)",
          }}
        >
          <FaCheckCircle />
          <span>Active</span>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- */
/* پیش‌نمایش تم پولی            */
/* ----------------------------- */

function PaidThemePreviewBox({ theme }: any) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "15px",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <h4 style={{ marginBottom: "10px", fontSize: "18px" }}>{theme.name}</h4>

      <div
        style={{
          width: "100%",
          height: "80px",
          borderRadius: "10px",
          background: theme.preview,
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          marginBottom: "10px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{theme.price}</span>

        <button
          style={{
            background: "#ff00c8",
            border: "none",
            padding: "8px 12px",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 0 10px #ff00c8",
          }}
        >
          <FaShoppingCart style={{ marginRight: "6px" }} />
          Buy
        </button>
      </div>
    </div>
  );
}
