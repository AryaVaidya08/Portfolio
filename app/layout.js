import "./globals.css";

export const metadata = {
  title: "Arya Vaidya",
  description: "Arya Vaidya's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
