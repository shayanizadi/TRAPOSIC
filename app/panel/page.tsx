"use client";

import { useState } from "react";
import {
  FaArrowLeft,
  FaUsers,
  FaUserShield,
  FaMusic,
  FaStar,
  FaPalette,
  FaListUl,
  FaComments,
  FaCogs,
  FaChartLine,
  FaShoppingCart,
  FaBullhorn,
  FaDatabase,
  FaTools,
  FaFolderOpen,
  FaBell,
  FaGlobe,
  FaTicketAlt,
  FaExclamationTriangle,
  FaUpload,
  FaHistory,
  FaSearch,
} from "react-icons/fa";

type PanelItem = {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  title: string;
};

const PANEL_ITEMS: PanelItem[] = [
  { icon: FaUsers, title: "Users Management" },
  { icon: FaUserShield, title: "Roles & Permissions" },
  { icon: FaMusic, title: "Music Management" },
  { icon: FaStar, title: "Artists Management" },
  { icon: FaListUl, title: "Playlists Management" },
  { icon: FaComments, title: "Community Management" },
  { icon: FaPalette, title: "UI / Theme Control" },
  { icon: FaCogs, title: "Platform Settings" },

  { icon: FaTicketAlt, title: "Tickets System" },
  { icon: FaBullhorn, title: "Popup Manager" },
  { icon: FaGlobe, title: "Event Scheduler" },
  { icon: FaPalette, title: "Theme Presets" },
  { icon: FaBell, title: "Notification Templates" },
  { icon: FaExclamationTriangle, title: "User Reports" },
  { icon: FaUserShield, title: "Ban System" },
  { icon: FaStar, title: "Artist Verification" },
  { icon: FaUpload, title: "Upload Manager" },
  { icon: FaDatabase, title: "Storage Manager" },
  { icon: FaHistory, title: "Logs & Activity History" },
  { icon: FaTools, title: "Developer Tools" },
  { icon: FaChartLine, title: "Analytics & Insights" },
  { icon: FaShoppingCart, title: "Store Management" },
  { icon: FaFolderOpen, title: "Content Manager" },
];

export default function Panel() {
  const [search, setSearch] = useState("");

  const filteredItems = PANEL_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0b0010",
        padding: "25px",
        color: "#fff",
        position: "relative",
        overflow: "hidden", // 🔥 هیچ اسکرول افقی/عمودی اضافه‌ای نیست
      }}
    >
      {/* پس‌زمینه طلایی داخل صفحه */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(255,215,0,0.15), rgba(0,0,0,0.95) 70%)",
          filter: "blur(90px)",
          animation: "goldWave 12s ease-in-out infinite",
          opacity: 0.30,
          zIndex: 0,
        }}
      />

      <style>
        {`
          @keyframes goldWave {
            0% { transform: scale(1); opacity: 0.30; }
            50% { transform: scale(1.1); opacity: 0.45; }
            100% { transform: scale(1); opacity: 0.30; }
          }
        `}
      </style>

      {/* دکمه بازگشت */}
      <div
        onClick={() => (window.location.href = "/main/home")}
        style={{
          width: "110px",
          height: "36px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          cursor: "pointer",
          marginBottom: "18px",
          boxShadow: "0 0 10px #ffd700",
          zIndex: 2,
        }}
      >
        <FaArrowLeft style={{ fontSize: "15px", color: "#ffd700" }} />
        <span style={{ fontSize: "15px", color: "#fff" }}>Home</span>
      </div>

      {/* عنوان + سرچ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          zIndex: 2,
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            textShadow: "0 0 18px #ffd700",
          }}
        >
          Owner Panel
        </h1>

        {/* سرچ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "10px",
            padding: "6px 12px",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 0 12px rgba(255,215,0,0.35)",
          }}
        >
          <FaSearch
            style={{
              fontSize: "14px",
              color: "#ffd700",
              filter: "drop-shadow(0 0 5px #ffd700)",
            }}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: "14px",
              marginLeft: "6px",
              width: "140px",
            }}
          />
        </div>
      </div>

      {/* گرید پنل‌ها */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
          zIndex: 2,
          width: "100%",
        }}
      >
        {filteredItems.map((item, index) => (
          <PanelBox key={index} icon={item.icon} title={item.title} />
        ))}

        {filteredItems.length === 0 && (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              marginTop: "25px",
              opacity: 0.8,
            }}
          >
            هیچ بخشی با این سرچ پیدا نشد.
          </div>
        )}
      </div>
    </div>
  );
}

function PanelBox({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ style?: React.CSSProperties }>;
  title: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "130px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "14px",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 22px rgba(255,215,0,0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <Icon
        style={{
          fontSize: "26px",
          marginBottom: "8px",
          color: "#ffd700",
          filter: "drop-shadow(0 0 6px #ffd700)",
        }}
      />
      <span
        style={{
          fontSize: "15px",
          textShadow: "0 0 6px #ffd700",
        }}
      >
        {title}
      </span>
    </div>
  );
}
