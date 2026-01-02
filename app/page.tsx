export default function Home() {
  return (
    <>
      <h1 style={{ fontSize: 24, margin: 0 }}>Jeux</h1>
      <p style={{ opacity: 0.75, marginTop: 8 }}>
        Clique sur un jeu pour voir les guides, solutions et articles.
      </p>

      <section
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <button
            key={i}
            style={{
              height: 140,
              borderRadius: 16,
              border: "1px solid #2a2a2a",
              background: "#121212",
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: 14,
            }}
          >
            <span style={{ fontWeight: 700 }}>Jeu #{i + 1}</span>
            <span style={{ opacity: 0.7, fontSize: 12 }}>Voir</span>
          </button>
        ))}
      </section>
    </>
  );
}

