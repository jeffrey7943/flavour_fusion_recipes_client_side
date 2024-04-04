import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const roboto_serif = Roboto_Serif({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | FLAVOUR FUSION RECIPES",
    default: "FLAVOUR FUSION RECIPES",
  },
  description:
    "flavour fusion recipes - your ultimate destination for culinary inspiration and creativity. explore a diverse collection of global recipes, curated by chefs and home cooks. join our community of food enthusiasts!",
  keywords: ["next.js", "react.js", "recipe"],
  authors: [{ name: "JEFFREY ANTHONY MUKKATH" }],
  creator: "JEFFREY ANTHONY MUKKATH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_serif.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
