import ContactUs from "@/components/contact-us/contact-us";
import Footer from "@/components/footer/footer";
import PageHero from "@/components/page-hero";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <PageHero
        title1="contact"
        title2="us"
        subtitle="Together, We Can Make a Difference in the Lives of Those in Need"
      />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
