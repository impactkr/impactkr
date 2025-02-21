"use client";

import Business from "@/components/Landing/Business";
import Visual from "@/components/Landing/Visual";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Visual />
      <Business />
      <Footer />
    </>
  );
}

export default Home;
