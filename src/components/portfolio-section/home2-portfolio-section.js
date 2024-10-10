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
                Work <span>20 + </span>
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
                    Offer a wide range of services to help businesses establish
                    and enhance their online presence.
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
                  <li>
                    <Link href="/portfolio-manonery">Mern Stack</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Mysql</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Redux Toolkit</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Socket.io </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">AWS </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Payment Gateway </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Responsive Design </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Admin Panel </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Dynamic Carousels</Link>
                  </li>
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Web App
                    </span>
                  </div>
                  <div className="movingImageContainer">
                    <img
                      src="projects/clothecommerce.sintechworks.png"
                      alt="WearKart Project Screenshot"
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
                  <Link href="/portfolio-details">WearKart.</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  <li>
                    <Link href="/portfolio-manonery">React Native</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Node JS</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Express JS</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Redux Toolkit</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Skelton UI</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Redux Persist</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Payment Gateway</Link>
                  </li>

                  <li>
                    <Link href="/portfolio-manonery">Dynamic Carousels</Link>
                  </li>
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Android App
                    </span>
                  </div>

                  <div className="movingImageContainer">
                    <img
                      src="projects/clothecommerce.sintechworks.png"
                      alt="WearKart Project Screenshot"
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
                  <Link href="/portfolio-details">WearKart.</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  <li>
                    <Link href="/portfolio-manonery">Django</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">ReactJs</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Mysql</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Redux Toolkit</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Admin Panel </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Responsive Design </Link>
                  </li>
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Website
                    </span>
                  </div>
                  <div className="movingImageContainer">
                    <img
                      src="projects/clothecommerce.sintechworks.png"
                      alt="WearKart Project Screenshot"
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
                  <Link href="/portfolio-details">Sinbit Trades.</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="portfolio-card magnetic-item">
              <div className="image-and-tag">
                <ul className="tag">
                  <li>
                    <Link href="/portfolio-manonery">Mern Stack</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Mysql</Link>
                  </li>

                  <li>
                    <Link href="/portfolio-manonery">Payment Gateway </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Responsive Design </Link>
                  </li>
                  <li>
                    <Link href="/portfolio-manonery">Admin Panel </Link>
                  </li>
                </ul>
                <div className="portfolio-img">
                  <div className="portfolioCard__portfolioImg__projectType">
                    <span href="#" className="text-white">
                      Web App
                    </span>
                  </div>

                  <div className="movingImageContainer">
                    <img
                      src="projects/clothecommerce.sintechworks.png"
                      alt="WearKart Project Screenshot"
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
                  <Link href="/portfolio-details">MobileKart WebApp.</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2PortfolioSection;
