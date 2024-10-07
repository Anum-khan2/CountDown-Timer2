import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  console.log(children, "props");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}