//import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/general/nav";
import Footer from "./components/general/footer";



export const metadata = {
  title: "Doctor Connect",
  description:
    "The best and the most trusted Doctor-Patient connection."+
    "This Website manages doctor's and patients appointments and connecting the patient with his desired doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Nav /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
