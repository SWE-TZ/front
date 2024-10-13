import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/general/nav";
import Footer from "./components/general/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fix IT",
  description:
    "The best and the most trusted home services providers website on the internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FBE4CC]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
