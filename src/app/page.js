import Home2About from "@/components/about/Home2About";
import Home2BannerSection from "@/components/banner-section/home2-banner-section";
import Home2ContactSection from "@/components/contact-section/home2-contact-section";
import Home2CounterArea from "@/components/counter-area-section/home2-counter-area";
import Home2PortfolioSection from "@/components/portfolio-section/home2-portfolio-section";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Home2ServicesSection from "@/components/services-section/home2-services-section";
import Home2TechnologySection from "@/components/technology-section/home2-technology-section";
// dasdasdas
import Home1TestimonialSection from "@/components/testimonial-section/home1-testimonial-section";
import Home2TestimonialSection from "@/components/testimonial-section/home2-testimonial-section";
import Home6TestimonialSection from "@/components/testimonial-section/home6-testimonial-section";
// weqwe
import Footer2 from "@/components/Footer/Footer2";
import Header2 from "@/components/header/Header2";

export const metadata = {
  title: "SinTech Works LLP",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header2 />
      <Home2BannerSection />
      <Home2About />
      <Home2ServicesSection />
      <Home2CounterArea />
      <Home2ProcessSection />
      <Home2PortfolioSection />

      {/* <Home1TestimonialSection /> */}
      <Home2TestimonialSection />
      {/* <Home6TestimonialSection /> */}

      <Home2TechnologySection />
      <Home2ContactSection />
      <Footer2 />
    </>
  );
}
