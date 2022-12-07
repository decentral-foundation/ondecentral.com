import React from "react";
import PageLayout from "../layouts/page-layout/PageLayout";
import HomeHeroSection from "../components/pages/home/home-hero-section/HomeHeroSection";
import HomeBandTwo from "../components/pages/home/home-band-two/HomeBandTwo";

export default function IndexPage () {
  return (
    <PageLayout>
      <HomeHeroSection />
      <HomeBandTwo />
    </PageLayout>
  )
}
