import AboutUs from "@/components/about-us/about-us";
import Footer from "@/components/footer/footer";
import PageHero from "@/components/page-hero";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <PageHero
        title1="ABOUT"
        title2="us"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
