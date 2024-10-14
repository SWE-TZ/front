
import { Inter } from "next/font/google";
import Footer from "@/app/components/general/footer";
import Nav from "@/app/components/logins/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fix IT",
  description:
    "The best and the most trusted home services providers website on the internet",
};

export default function SubLayout({ children }) {
    return (
      <div className="bg-light">
        <Nav />
        <main>{children}</main>
      </div>
    );
}