"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/myCustom.css";
import useMagneticHover from "@/hooks/useMagneticHover";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import ScrollTopBtn from "@/utils/ScrollTopBtn";
import { useEffect } from "react";
import ThemeSwitch from "@/components/common/Theme";
import WhatsAppBtn from "@/components/WhatsAppButton/WhatsAppBtn";
import Head from "next/head"; // Import Head for SEO meta tags

export default function RootLayout({ children }) {
  useMagneticHover();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <Head>
        {/* Global Meta Tags for SEO */}
        <title>Sintech Works | Software Development Agency</title>{" "}
        {/* Website Title */}
        <meta
          name="description"
          content="Sintech Works is a leading software development agency specializing in custom web and mobile app development. Our team creates innovative solutions to transform your business."
        />
        <meta
          name="keywords"
          content="software development, web development, mobile app development, full stack development, React, Node.js, MERN, custom software solutions"
        />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta
          property="og:title"
          content="Sintech Works | Software Development Agency"
        />
        <meta
          property="og:description"
          content="Transform your business with custom software solutions from Sintech Works. Web & mobile development, UX/UI design, and more."
        />
        <meta
          property="og:image"
          content="assets/img/downloaded/companyLogo.jpg"
        />
        {/* Path to an image for social sharing */}
        <meta property="og:url" content="https://www.sintechworks.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sintech Works | Software Development Agency"
        />
        <meta
          name="twitter:description"
          content="Transform your business with custom software solutions from Sintech Works."
        />
        <meta name="twitter:image" content="/images/agency-logo.png" />{" "}
        {/* Path to an image for Twitter sharing */}
        {/* Additional SEO and Social Media Tags */}
        <meta name="author" content="Sintech Works" />
        <meta name="copyright" content="Sintech Works" />
      </Head>

      <body>
        {children}
        {/* <ThemeSwitch /> */}
        <WhatsAppBtn />
        <SmoothPageScroll />
        {/* <ScrollTopBtn /> */}
      </body>
    </html>
  );
}
