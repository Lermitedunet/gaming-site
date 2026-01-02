"use client";

import { useMemo, useState } from "react";
import { games } from "../lib/games";

const ALL_PLATFORMS = ["PC", "PS5", "Xbox", "Switch"] as const;
const ALL_GENRES = ["Survie", "FPS", "RPG", "Coop", "Stratégie"] as const;

export default function Home() {
  const [query, setQuery] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return games.filter((g) => {
      if (q) {
        const hay = `${g.name} ${g.platforms.join(" ")} ${g.genres.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      if (platforms.length > 0) {
        if (!platforms.some((p) => g.platforms.includes(p))) return false;
      }

      if (genres.length > 0) {
        if (!genres.some((gg) => g.genres.includes(gg))) return false;
      }

      return true;
    });
  }, [query, platforms, genres]);

  const resetAll = () => {
    setQuery("");
    setPlatforms([]);
    setGenres([]);
  };

  return (
    <>
      <h1 style={{ fontSize: 26, margin: 0 }}>Jeux</h1>
      <p style={{ opacity: 0.75, marginTop: 8 }}>
        Recherche un jeu et clique dessus pour voir les guides, solutions et articles.
      </p>

      {/* Barre outils */}
      <div
        style={{
          marginTop: 14,
          marginBottom: 14,
          padding: 14,
          borderRadius: 14,
          border: "1px solid #2a2a2a",
          background: "#121212",
        }}
      >
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher (ex: Valheim, FPS, Xbox...)"
            style={{
              flex: 1,
              minWidth: 260,
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #2a2a2a",
              background: "#0f0f0f",
              color: "white",
              outline: "none",
            }}
          />

          <button
            onClick={resetAll}
            style={{
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid #2a2a2a",
              background: "#0f0f0f",
              color: "white",
              cursor: "pointer",
            }}
          >
            Réinitialiser
          </button>

          <div style={{ alignSelf: "center", fontSize: 12, opacity: 0.7 }}>
            {filtered.length} résultat(s)
          </div>
        </div>

        {/* Filtres */}
        <div style={{ display: "flex", gap: 24, marginTop: 14, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Plateforme</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {ALL_PLATFORMS.map((p) => (
                <label key={p} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={platforms.includes(p)}
                    onChange={(e) =>
                      setPlatforms((prev) =>
                        e.target.checked ? [...prev, p] : prev.filter((x) => x !== p)
                      )
                    }
                  />
                  <span style={{ fontSize: 13, opacity: 0.9 }}>{p}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Genre</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {ALL_GENRES.map((g) => (
                <label key={g} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={genres.includes(g)}
                    onChange={(e) =>
                      setGenres((prev) =>
                        e.target.checked ? [...prev, g] : prev.filter((x) => x !== g)
                      )
                    }
                  />
                  <span style={{ fontSize: 13, opacity: 0.9 }}>{g}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grille jeux */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((game) => (
          <a
            key={game.id}
            href={`/games/${game.slug}`}
            style={{
              textDecoration: "none",
              color: "white",
              borderRadius: 16,
              border: "1px solid #2a2a2a",
              background: "#121212",
              cursor: "pointer",
              padding: 14,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: 110,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #2a2a2a",
                background: "#0b0b0b",
              }}
            >
              <img
                src={game.cover}
                alt={game.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Texte */}
            <div>
              <div style={{ fontWeight: 900, fontSize: 16 }}>{game.name}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                {game.platforms.join(" • ")}
              </div>
            </div>

            <div style={{ fontSize: 12, opacity: 0.8 }}>
              {game.genres.join(" • ")}
            </div>
          </a>
        ))}

        {filtered.length === 0 && (
          <div
            style={{
              padding: 18,
              borderRadius: 16,
              border: "1px solid #2a2a2a",
              background: "#121212",
              color: "white",
              opacity: 0.8,
            }}
          >
            Aucun jeu ne correspond à ta recherche / tes filtres.
          </div>
        )}
      </section>
    </>
  );
}
