"use client";

import Business from "@/components/Landing/Business";
import Portfolio from "@/components/Landing/Portfolio";
import Visual from "@/components/Landing/Visual";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Visual />
      <Business />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Home;
