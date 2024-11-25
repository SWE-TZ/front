"use client";
import Cat from "./components/home/category";
import Doctors from "./components/home/doctors";
import Review from "./components/home/review";
import Header from "./components/home/header";
import FAQ from "./components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Cat />
      <Doctors />
      <Review />
      <FAQ />
    </>
  );
}
