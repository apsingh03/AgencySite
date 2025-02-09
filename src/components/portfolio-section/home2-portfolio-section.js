import Link from "next/link";
import React from "react";

const Home2PortfolioSection = () => {
  return (
    <div className="home2-portfolio-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-60">
          <div className="col-lg-12">
            <div className="section-title text-animation">
              <h2>
                Explore our Portfolio <span>20 + </span>
              </h2>
              <div className="dash-and-paragraph three">
                <div className="dash" />
                <div className="btn-and-paragraph">
                  <Link href="/portfolio">
                    Explore Portfolio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                  <p>
                    We Offer a wide range of services to help businesses
                    establish and enhance their online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-lg-5 g-4 justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  {[
                    "Mern Stack",
                    "Redux",
                    "Mysql",
                    "AWS",
                    // "Cart",
                    // "Socket.io",
                    // "Admin Panel",
                    // "Payment Gateway",
                    // "Responsive Design",
                    // "Skelton Ui",
                    // "Formik",
                    // "Dynamic Carousels",
                    // "WishList",
                    // "Dynamic Menus",
                    // "Dynamic Product Filters",
                    // "Real Time Order Tracking ",
                    // "Debounce Search",
                    // "We can control Everything from Admin Panel",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="/">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Web App
                    </span>
                  </div>
                  <div className="movingImageContainer">
                    <img
                      src="projects/electrocart.webp"
                      alt="Wear Kart Project Demostration"
                    />
                  </div>

                  <Link className="details-btn" href="/portfolio-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>
                  <Link href="/projectDetails/electrocart-webapp">
                    Dynamic E-commerce WebApp
                  </Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  {[
                    "Mern Stack",
                    "Redux",
                    "Mysql",
                    // "AWS",
                    // "Cart",
                    // "Socket.io",
                    // "Admin Panel",
                    // "Payment Gateway",
                    // "Responsive Design",
                    // "Formik",
                    // "Dynamic Carousels",
                    // "WishList",
                    // "Dynamic Menus",
                    // "Dynamic Product Filters",
                    // "Real Time Order Tracking ",
                    // "Debounce Search",
                    // "We can control Everything from Admin Panel",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="/">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Web App
                    </span>
                  </div>
                  <div className="movingImageContainer">
                    <img
                      src="projects/WearKartHomePage.png"
                      alt="Wear Kart Project Demostration"
                    />
                  </div>

                  <Link className="details-btn" href="/portfolio-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>
                  <Link href="/projectDetails/wearkart-webapp">
                    Responsive Apparel web-store.
                  </Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  {[
                    "React Native",
                    "Redux ",
                    // "Redux Persist",
                    "Express Js",
                    // "Node Js",
                    // "Mysql",
                    // "Socket.io",
                    // "Formik",
                    // "Payment Gateway",
                    // "Dynamic Search",
                    // "Dynamic Carousels",
                    // "Dynamic Product Filters",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="#">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Android App
                    </span>
                  </div>

                  <div className="movingImageContainer">
                    <img
                      src="projects/WearKartAndroidApp.webp"
                      alt="Sinbit Android APP Demostration"
                    />
                  </div>
                  <Link className="details-btn" href="/portfolio-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>
                  <Link href="/projectDetails/wearkart-android">
                    {" "}
                    Robust Synchronised App.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  {[
                    "Mern Stack",
                    // "Redux",
                    // "Mysql",
                    "Crypto Currency Calculator",
                    // "Responsive Design",
                    // "Admin Panel",
                    // "Blogs CRUD",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="#">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Blogging WebApp
                    </span>
                  </div>
                  <div className="movingImageContainer">
                    <img
                      src="projects/sinbit.png"
                      alt="Sinbit Project Demostration"
                    />
                  </div>
                  <Link className="details-btn" href="/portfolio-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>
                  <Link href="/projectDetails/sinbit-trades">
                    Engaging One Page Blog.
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  {[
                    "Mern Stack",
                    "Redux Toolkit",
                    "Aws",
                    "Mysql",
                    "Socket.io",
                    "Group Crud",
                    "Group Chatting",
                    "Responsive",
                    "Swagger API Documentation",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="#">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Web App
                    </span>
                  </div>

                  <div className="movingImageContainer">
                    <img
                      src="projects/chattingHome.png"
                      alt="Chatting  Demostration"
                    />
                  </div>

                  <Link className="details-btn" href="/portfolio-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="portfolio-content">
                <h4>
                  <Link href="/projectDetails/chatting-app">Chatting App.</Link>
                </h4>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn btn_wrapper">
                <Link href="/portfolio" className="circle-btn btn-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Load More <strong>Portfolio</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2PortfolioSection;
