// plorpy-badge-v1 — injected by Plorpy
import React from "react";
import { createRoot } from "react-dom/client";

function Pill() {
  return (
    <a
      href="https://plorpy.aqinode.com.ng"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 2147483647,
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 14px",
        borderRadius: "9999px",
        background: "rgba(17,20,28,0.92)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        color: "#fff",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: 1,
        textDecoration: "none",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ flexShrink: 0 }}>
        <rect width="16" height="16" rx="4.5" fill="#E0451A" />
        <path d="M5.2 11.5V4.5h3.1c1.6 0 2.7.95 2.7 2.35 0 1.25-.9 2.15-2.3 2.15h-.1v2.5H5.2zm1.6-3.75h1.3c.75 0 1.25-.35 1.25-.9 0-.55-.5-.9-1.25-.9H6.8v1.8z" fill="#fff" />
      </svg>
      <span>Built with Plorpy</span>
    </a>
  );
}

function mount() {
  if (typeof document === "undefined") return;
  if (document.getElementById("plorpy-badge-host")) return;
  const host = document.createElement("div");
  host.id = "plorpy-badge-host";
  (document.body || document.documentElement).appendChild(host);
  createRoot(host).render(
    React.createElement(React.StrictMode, null, React.createElement(Pill))
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount, { once: true });
} else {
  mount();
}
