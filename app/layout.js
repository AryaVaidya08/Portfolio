import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import BitFlow from "./components/BitFlow";

export const metadata = {
  title: "Arya Vaidya",
  description: "Arya Vaidya's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <BitFlow />
        {children}
      </body>
    </html>
  );
}
