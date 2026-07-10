// OpenGraph Image Styles
// These must remain as JavaScript objects for Next.js ImageResponse API compatibility

export const opengraphStyles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    background: "F7F7F5",
    padding: "80px",
  },
  scannerLine: {
    position: "absolute" as const,
    top: "0",
    left: "80px",
    width: "1px",
    height: "100%",
    background: "var(--color-border)",
  },
  logoContainer: {
    display: "flex",
    marginBottom: "40px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column" as const,
  },
  title: {
    fontSize: "84px",
    fontWeight: 700,
    color: "var(--color-text-primary)",
    letterSpacing: "-0.04em",
    lineHeight: 1,
    marginBottom: "20px",
    textTransform: "uppercase" as const,
  },
  subtitle: {
    fontSize: "24px",
    color: "var(--color-text-faint)",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    fontFamily: "monospace",
  },
  stampContainer: {
    position: "absolute" as const,
    top: "80px",
    right: "80px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
  },
  versionText: {
    fontSize: "12px",
    color: "var(--color-text-primary)",
    letterSpacing: "0.3em",
  },
  versionLine: {
    width: "40px",
    height: "2px",
    background: "var(--color-accent)",
    marginTop: "8px",
  },
};
