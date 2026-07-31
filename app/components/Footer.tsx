export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "16px",
        textAlign: "center",
        marginTop: "40px",

        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.06)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 20px rgba(255,0,150,0.25)",
      }}
    >
      <p
        style={{
          color: "#ffffff",
          opacity: 0.85,
          fontSize: "16px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        © 2026 TRAPOSIC — Powered by{" "}
        <a
          href="https://shh-dev.ir"
          target="_blank"
          style={{
            color: "#ff00cc",
            fontWeight: "700",
            textDecoration: "none",
            textShadow: "0 0 10px #ff00cc",
          }}
        >
          SHH‑DEV
        </a>
      </p>
    </footer>
  );
}
