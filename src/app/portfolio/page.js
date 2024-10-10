import Footer2 from "@/components/Footer/Footer2";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

const Portfolioesonary = () => {
  return (
    <>
      <Header />
      <div className="portfolio-page-area portfolio-masonery pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title">
                <h1>
                  Our <span>Work</span>
                </h1>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z"></path>
                  </svg>
                  <div className="btn-and-paragraph">
                    {/* <span>Selected work * (2020-2024)</span> */}
                    <p>
                      Creating a concise and effective design studio brief is
                      crucial for outlining your business, its services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-130 gy-lg-5 g-4 justify-content-between">
            <div className="col-lg-6 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">Mern Stack</Link>
                    </li>
                    <li>
                      <Link href="#">Mysql</Link>
                    </li>
                    <li>
                      <Link href="#">Redux Toolkit</Link>
                    </li>
                    <li>
                      <Link href="#">Socket.io </Link>
                    </li>
                    <li>
                      <Link href="#">AWS </Link>
                    </li>
                    <li>
                      <Link href="#">Payment Gateway </Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
                    </li>
                    <li>
                      <Link href="#">Admin Panel </Link>
                    </li>
                    <li>
                      <Link href="#">Dynamic Carousels</Link>
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
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">React Native</Link>
                    </li>
                    <li>
                      <Link href="#">Node JS</Link>
                    </li>
                    <li>
                      <Link href="#">Express JS</Link>
                    </li>
                    <li>
                      <Link href="#">Redux Toolkit</Link>
                    </li>
                    <li>
                      <Link href="#">Redux Persist</Link>
                    </li>
                    <li>
                      <Link href="#">Payment Gateway</Link>
                    </li>
                    <li>
                      <Link href="#">Skelton UI</Link>
                    </li>
                    <li>
                      <Link href="#">Dynamic Carousels</Link>
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
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">Django</Link>
                    </li>
                    <li>
                      <Link href="#">ReactJs</Link>
                    </li>
                    <li>
                      <Link href="#">Mysql</Link>
                    </li>
                    <li>
                      <Link href="#">Redux Toolkit</Link>
                    </li>
                    <li>
                      <Link href="#">Admin Panel </Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
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
                    <Link href="/portfolio-details">Sinbit Trades.</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">Mern Stack</Link>
                    </li>
                    <li>
                      <Link href="#">Mysql</Link>
                    </li>

                    <li>
                      <Link href="#">Payment Gateway </Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
                    </li>
                    <li>
                      <Link href="#">Admin Panel </Link>
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
                    <Link href="/portfolio-details">MobileKart.</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">React Native</Link>
                    </li>
                    <li>
                      <Link href="#">Django Rest Framework</Link>
                    </li>
                    <li>
                      <Link href="#">Redux Toolkit</Link>
                    </li>

                    <li>
                      <Link href="#">Payment Gateway</Link>
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
                    <Link href="/portfolio-details">MobileKart.</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">React Js</Link>
                    </li>
                    <li>
                      <Link href="#">Bootstrap</Link>
                    </li>

                    <li>
                      <Link href="#">Animation </Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
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
                    <Link href="/portfolio-details">Personal Portfolio.</Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">Mern Stack</Link>
                    </li>
                    <li>
                      <Link href="#">Payment Gateway</Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
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
                    <Link href="/portfolio-details">Expense Tracker.</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="#">Mern Stack</Link>
                    </li>
                    <li>
                      <Link href="#">Socket.io</Link>
                    </li>
                    <li>
                      <Link href="#">Responsive Design </Link>
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
                    <Link href="/portfolio-details">Chatting APP.</Link>
                  </h4>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="portfolio-card two magnetic-item">
                <div className="image-and-tag">
                  <ul className="tag">
                    <li>
                      <Link href="/portfolio-manonery">React JS</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-manonery">Responsive Design </Link>
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
                    <Link href="/portfolio-details">Images Bazar.</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn btn_wrapper">
                <button className="circle-btn btn-hover">
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
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Portfolioesonary;
