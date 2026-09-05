export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <h1>Page not found</h1>
          <p>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <a href="/">Back to home</a>
        </div>
      </body>
    </html>
  );
}
