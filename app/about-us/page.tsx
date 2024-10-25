import AboutSection from "@/components/about-us/about-section";
import Footer from "@/components/footer/footer";
import PageHero from "@/components/page-hero";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <PageHero
        title1="ABOUT"
        title2="us"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <AboutSection
        imgURL="/founders.png"
        reverse
        title1="Empowering Lives,"
        title2="One Donation"
        title3="at a Time"
        subtitle="We are dedicated to creating meaningful change by connecting generous individuals with causes that transform lives. Our mission is to ensure that every contribution, big or small, makes a lasting impact on communities in need."
      />
      <div className="bg-grey py-1">
        <AboutSection
          imgURL="/1.png"
          title1="Compassion in Action"
          subtitle="At the heart of our organization is a passion for service. We believe that every person has the potential to uplift others, and we are here to provide a platform that turns that belief into action. Our goal is to inspire a movement of giving that drives positive change around the world."
        />
      </div>
      <AboutSection
        imgURL="/Vector 7-01.jpg"
        reverse
        title1="Transparency and Trust"
        subtitle="We value the trust our donors place in us, and we are committed to maintaining the highest levels of transparency. Every donation goes directly to the causes that matter most, and we ensure that you can see the difference your contribution is making."
      />
      <Footer />
    </div>
  );
};

export default AboutUs;
