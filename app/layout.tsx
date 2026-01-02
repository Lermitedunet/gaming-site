import "./globals.css";
import { articles } from "../lib/articles";

export const metadata = {
  title: "Gaming Hub",
  description: "Recherche des jeux, guides et solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#0f0f0f" }}>
        {/* Header */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            padding: "14px 18px",
            borderBottom: "1px solid #2a2a2a",
            background: "#0b0b0b",
            color: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontWeight: 900, letterSpacing: 0.5 }}>🎮 Gaming Hub</div>

            <div style={{ flex: 1 }} />

            <button
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #2a2a2a",
                background: "#121212",
                color: "white",
                cursor: "pointer",
              }}
            >
              Admin (plus tard)
            </button>
          </div>
        </header>

        {/* Layout: colonne articles + contenu */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            minHeight: "calc(100vh - 58px)",
            color: "white",
          }}
        >
          {/* Colonne gauche : Articles */}
          <aside
            style={{
              borderRight: "1px solid #2a2a2a",
              padding: 16,
              background: "#0f0f0f",
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 6 }}>Articles</div>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 12 }}>
              Derniers guides / soluce
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              {articles.map((a) => (
                <a
                  key={a.id}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    border: "1px solid #2a2a2a",
                    background: "#121212",
                    borderRadius: 14,
                    overflow: "hidden",
                    display: "block",
                  }}
                >
                  <div style={{ height: 90, background: "#0b0b0b" }}>
                    <img
                      src={a.image}
                      alt={a.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>

                  <div style={{ padding: 12 }}>
                    <div
                      style={{
                        fontSize: 12,
                        opacity: 0.75,
                        marginBottom: 6,
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          border: "1px solid #2a2a2a",
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: "#0f0f0f",
                        }}
                      >
                        {a.tag}
                      </span>
                      <span style={{ opacity: 0.7 }}>•</span>
                      <span style={{ opacity: 0.7 }}>{a.gameSlug}</span>
                    </div>

                    <div style={{ fontWeight: 800, lineHeight: 1.2 }}>{a.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          {/* Contenu */}
          <main style={{ padding: 18 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
