module.exports = {
  theme: {
    extend: {
      colors: {
        carbon: "#090909",
        surface: "#111111",
        elevated: "#1C1C1C",
        graphite: "#2B2B2B",
        titanium: "#AEB4BC",
        racingGreen: "#006A52",
        electricCyan: "#00E5FF",
        success: "#00D26A",
        warning: "#FFB400",
        danger: "#FF4040"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"]
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px"
      },
      boxShadow: {
        panel: "0 18px 60px rgba(0, 0, 0, 0.32)",
        focus: "0 0 0 3px rgba(0, 229, 255, 0.35)",
        greenGlow: "0 0 28px rgba(0, 106, 82, 0.28)",
        cyanGlow: "0 0 28px rgba(0, 229, 255, 0.22)"
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        fastOut: "cubic-bezier(0.16, 1, 0.3, 1)",
        mechanical: "cubic-bezier(0.65, 0, 0.35, 1)"
      }
    }
  }
};

