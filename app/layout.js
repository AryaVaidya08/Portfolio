import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Arya Vaidya",
  description: "Arya Vaidya's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
