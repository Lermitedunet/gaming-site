import { articles } from "../../../lib/articles";
import { games } from "../../../lib/games";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div style={{ padding: 18 }}>
        <h1 style={{ marginTop: 0 }}>Article introuvable</h1>
        <a href="/" style={{ color: "white", opacity: 0.8 }}>
          ← Retour
        </a>
      </div>
    );
  }

  const game = games.find((g) => g.slug === article.gameSlug);
  const related = articles.filter((a) => a.gameSlug === article.gameSlug && a.slug !== article.slug);

  return (
    <div>
      <a href="/" style={{ color: "white", opacity: 0.8, textDecoration: "none" }}>
        ← Retour
      </a>

      <div
        style={{
          marginTop: 14,
          border: "1px solid #2a2a2a",
          borderRadius: 16,
          overflow: "hidden",
          background: "#121212",
        }}
      >
        <div style={{ height: 260, background: "#0b0b0b" }}>
          <img
            src={article.image}
            alt={article.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div style={{ padding: 16 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span
              style={{
                border: "1px solid #2a2a2a",
                padding: "4px 10px",
                borderRadius: 999,
                background: "#0f0f0f",
                fontSize: 12,
                opacity: 0.9,
              }}
            >
              {article.tag}
            </span>

            <span style={{ fontSize: 12, opacity: 0.7 }}>•</span>

            <span style={{ fontSize: 12, opacity: 0.8 }}>
              Jeu :{" "}
              {game ? (
                <a href={`/games/${game.slug}`} style={{ color: "white" }}>
                  {game.name}
                </a>
              ) : (
                article.gameSlug
              )}
            </span>
          </div>

          <h1 style={{ marginTop: 10, marginBottom: 10 }}>{article.title}</h1>

          <div
            style={{
              whiteSpace: "pre-line",
              opacity: 0.85,
              lineHeight: 1.6,
              borderTop: "1px solid #2a2a2a",
              paddingTop: 12,
            }}
          >
            {article.content}
          </div>
        </div>
      </div>

      {/* Articles liés */}
      <div
        style={{
          marginTop: 16,
          border: "1px solid #2a2a2a",
          borderRadius: 16,
          background: "#121212",
          padding: 14,
        }}
      >
        <div style={{ fontWeight: 900, marginBottom: 10 }}>Articles liés</div>

        {related.length === 0 ? (
          <div style={{ opacity: 0.75 }}>Aucun autre article pour ce jeu.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 }}>
            {related.map((a) => (
              <a
                key={a.id}
                href={`/articles/${a.slug}`}
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
  );
}
