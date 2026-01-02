import { games } from "../../../lib/games";
import { articles } from "../../../lib/articles";

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);

  if (!game) {
    return (
      <div style={{ padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>Jeu introuvable</h1>
        <a href="/" style={{ color: "white", opacity: 0.8 }}>← Retour</a>
      </div>
    );
  }

  const related = articles.filter((a) => a.gameSlug === game.slug);

  return (
    <div style={{ padding: 0 }}>
      <a href="/" style={{ color: "white", opacity: 0.8, textDecoration: "none" }}>
        ← Retour aux jeux
      </a>

      <div style={{ marginTop: 14, display: "flex", gap: 16, flexWrap: "wrap" }}>
        {/* Cover */}
        <div
          style={{
            width: 420,
            maxWidth: "100%",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #2a2a2a",
            background: "#121212",
          }}
        >
          <img
            src={game.cover}
            alt={game.name}
            style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
          />
          <div style={{ padding: 14 }}>
            <h1 style={{ margin: 0 }}>{game.name}</h1>
            <div style={{ opacity: 0.75, marginTop: 6 }}>
              {game.platforms.join(" • ")} — {game.genres.join(" • ")}
            </div>
          </div>
        </div>

        {/* Infos + Articles */}
        <div style={{ flex: 1, minWidth: 260 }}>
          <div
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              background: "#121212",
              padding: 14,
              marginBottom: 14,
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 8 }}>À propos</div>
            <div style={{ opacity: 0.8, lineHeight: 1.5 }}>
              Ici tu mettras une description du jeu, des infos utiles, et les catégories de guides.
              (On branchera ça plus tard depuis la DB)
            </div>
          </div>

          <div
            style={{
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              background: "#121212",
              padding: 14,
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 10 }}>
              Articles liés ({related.length})
            </div>

            {related.length === 0 ? (
              <div style={{ opacity: 0.75 }}>Aucun article pour ce jeu pour le moment.</div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
                {related.map((a) => (
                  <a
                    key={a.id}
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      border: "1px solid #2a2a2a",
                      background: "#0f0f0f",
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
                      <div style={{ fontSize: 12, opacity: 0.75, marginBottom: 6 }}>
                        {a.tag} • {a.gameSlug}
                      </div>
                      <div style={{ fontWeight: 800, lineHeight: 1.2 }}>{a.title}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
