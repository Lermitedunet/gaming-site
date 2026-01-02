import "./globals.css";

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
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
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
            <div style={{ fontWeight: 800, letterSpacing: 0.5 }}>🎮 Gaming Hub</div>

            <input
              placeholder="Rechercher un jeu…"
              style={{
                flex: 1,
                maxWidth: 680,
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #2a2a2a",
                background: "#121212",
                color: "white",
                outline: "none",
              }}
            />

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
              Rechercher
            </button>
          </div>
        </header>

        {/* Main layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            minHeight: "calc(100vh - 58px)",
            background: "#0f0f0f",
            color: "white",
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              borderRight: "1px solid #2a2a2a",
              padding: 16,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Filtres</div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>
                Plateforme
              </div>
              {["PC", "PS5", "Xbox", "Switch"].map((p) => (
                <label key={p} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input type="checkbox" />
                  <span>{p}</span>
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 8 }}>Genre</div>
              {["Survie", "FPS", "RPG", "Coop", "Stratégie"].map((g) => (
                <label key={g} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <input type="checkbox" />
                  <span>{g}</span>
                </label>
              ))}
            </div>

            <button
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #2a2a2a",
                background: "#121212",
                color: "white",
                cursor: "pointer",
              }}
            >
              Réinitialiser
            </button>
          </aside>

          {/* Content */}
          <main style={{ padding: 18 }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
