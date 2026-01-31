export default function Gallery() {
  // The gallery is a simple grid of media. Because there's no backend, the gallery uses
  // a static manifest array you can update to reference files in `public/gallery/`.
  const galleryFiles: string[] = [
    // "/gallery/preview1.gif",
    // "/gallery/preview2.mp4",
  ];

  return (
    <div className="content" style={{ textAlign: "left" }}>
      <h2>Gallery</h2>
      <p>
        Add your GIFs and short silent videos to <code>public/gallery/</code> and reference them in
        the `galleryFiles` array inside this component.
      </p>
      {galleryFiles.length === 0 ? (
        <div style={{ color: "var(--muted)" }}>
          No gallery items configured yet. This gallery will show small previews (click to open).
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
          {galleryFiles.map((p) => (
            <a key={p} href={p} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              {p.endsWith(".mp4") ? (
                <video src={p} muted playsInline loop style={{ width: "100%", borderRadius: 6 }} />
              ) : (
                <img src={p} alt={p} style={{ width: "100%", borderRadius: 6 }} />
              )}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
