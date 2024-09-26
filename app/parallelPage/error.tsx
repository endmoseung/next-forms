"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
      </body>
    </html>
  );
}
