import "./globals.css";
import { articles } from "../lib/articles";

export const metadata = {
  title: "Gaming Hub",
  description: "Guides, solutions et articles gaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          background: "#0b0b0b",
          color: "white",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            height: 56,
            borderBottom: "1px solid #1f1f1f",
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            justifyContent: "space-between",
            background: "#0f0f0f",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>🎮</span>
            <strong>Gaming Hub</strong>
          </div>

          <button
            style={{
              background: "#121212",
              border: "1px solid #2a2a2a",
              color: "white",
              padding: "6px 12px",
              borderRadius: 10,
              cursor: "pointer",
            }}
          >
            Admin (plus tard)
          </button>
        </header>

        {/* MAIN LAYOUT */}
        <div style={{ display: "flex", minHeight: "calc(100vh - 56px)" }}>
          {/* SIDEBAR ARTICLES */}
          <aside
            style={{
              width: 300,
              borderRight: "1px solid #1f1f1f",
              padding: 14,
              background: "#0f0f0f",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Articles</h3>
            <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 12 }}>
              Derniers guides / soluce
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {articles.map((a) => (
                <a
                  key={a.id}
                  href={`/articles/${a.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    border: "1px solid #2a2a2a",
                    borderRadius: 14,
                    background: "#121212",
                    overflow: "hidden",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      height: 80,
                      background: "#0b0b0b",
                      borderBottom: "1px solid #2a2a2a",
                    }}
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Texte */}
                  <div style={{ padding: 10 }}>
                    <div
                      style={{
                        fontSize: 11,
                        opacity: 0.7,
                        marginBottom: 4,
                      }}
                    >
                      {a.tag} • {a.gameSlug}
                    </div>

                    <div style={{ fontWeight: 800, fontSize: 13 }}>
                      {a.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          {/* CONTENT */}
          <main
            style={{
              flex: 1,
              padding: 18,
              background: "#0b0b0b",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
