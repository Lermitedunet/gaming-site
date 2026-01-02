"use client";

import { useMemo, useState } from "react";
import { games } from "../lib/games";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return games;

    return games.filter((g) => {
      const hay = `${g.name} ${g.platforms.join(" ")} ${g.genres.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  return (
    <>
      <h1 style={{ fontSize: 24, margin: 0 }}>Jeux</h1>
      <p style={{ opacity: 0.75, marginTop: 8 }}>
        Recherche un jeu et clique dessus pour voir les guides, solutions et articles.
      </p>

      {/* Recherche (simple) */}
      <div style={{ display: "flex", gap: 10, marginTop: 14, marginBottom: 14 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher (ex: Valheim, FPS, Xbox...)"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #2a2a2a",
            background: "#121212",
            color: "white",
            outline: "none",
          }}
        />
        <button
          onClick={() => {}}
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

      {/* Résultat */}
      <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 10 }}>
        {filtered.length} résultat(s)
      </div>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((game) => (
          <button
            key={game.id}
            style={{
              height: 140,
              borderRadius: 16,
              border: "1px solid #2a2a2a",
              background: "#121212",
              color: "white",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: 14,
              textAlign: "left",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{game.name}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                {game.platforms.join(" • ")}
              </div>
            </div>

            <div style={{ fontSize: 12, opacity: 0.8 }}>
              {game.genres.join(" • ")}
            </div>
          </button>
        ))}
      </section>
    </>
  );
}
