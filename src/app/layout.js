import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const playFairDisplay = Playfair_Display({
  variable: "--font-Playfair_Display",
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});
export const metadata = {
  title: "Dragon News | Home",
  description: "The best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`min-h-full flex flex-col ${playFairDisplay.className}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
