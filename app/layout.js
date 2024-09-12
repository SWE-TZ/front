import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fix IT",
  description: "The best and the most trusted home services providers website on the internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1B262C]">
          <Nav />
          {children}
          <Footer />
      </body>
    </html>
  );
}
