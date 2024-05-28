import { merriweather } from "./fonts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

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
    <>
      <html lang="en">
        <body className={merriweather.className}>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
