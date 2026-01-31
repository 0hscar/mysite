
export default function MediaPreviewArea() {
  // This area will show sample GIFs/videos that the user places in `public/media/`.
  // Since we can't list public folder contents from client JS without a backend,
  // you can add filenames to the `mediaFiles` array below (or later fetch from a JSON manifest).
  const mediaFiles: string[] = [
    // Example entries. Add your own files into `public/media/` and reference them here.
    // "/media/example1.gif",
    // "/media/example2.mp4",
  ];

  if (mediaFiles.length === 0) {
    return (
      <div style={{ textAlign: "left", marginTop: 12 }}>
        <h3>Project Previews</h3>
        <div style={{ color: "var(--muted)" }}>
          No preview media configured yet. To show GIFs or short silent videos:
          <ul>
            <li>Add your files to the `public/media/` directory</li>
            <li>Add their paths to the `mediaFiles` array in this component</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "left", marginTop: 12 }}>
      <h3>Project Previews</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 12 }}>
        {mediaFiles.map((p) =>
          p.endsWith(".mp4") ? (
            <video key={p} src={p} muted playsInline loop style={{ width: "100%", borderRadius: 6 }} />
          ) : (
            <img key={p} src={p} alt={p} style={{ width: "100%", borderRadius: 6 }} />
          )
        )}
      </div>
    </div>
  );
}
