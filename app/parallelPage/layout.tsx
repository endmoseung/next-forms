export const metadata = {
  title: "Next.js Parallel",
  description: "Parallel Route Study",
};

export default function RootLayout({
  children,
  parallelA,
  parallelB,
}: {
  children: React.ReactNode;
  parallelA: React.ReactNode;
  parallelB: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", gap: 12, flexDirection: "column" }}>
        {parallelA}
        {parallelB}
        {children}
      </body>
    </html>
  );
}
