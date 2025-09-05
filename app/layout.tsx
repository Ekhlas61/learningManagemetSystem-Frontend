
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* No sidebar here */}
      <body className="min-h-screen bg-[#e6f2f5]">{children}</body>
    </html>
  );
}