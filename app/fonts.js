import { Merriweather, Pacifico } from "next/font/google";

export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
