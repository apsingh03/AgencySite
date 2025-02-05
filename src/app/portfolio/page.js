import Footer2 from "@/components/Footer/Footer2";
import Header from "@/components/header/Header";
import PortfolioProjectBigSize from "@/components/portfolioProject/PortfolioProjectBigSize";
import PortfolioProjectSmallSize from "@/components/portfolioProject/PortfolioProjectSmallSize";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "SinTech Works LLP",
  icons: {
    icon: "assets/img/downloaded/companyLogo.jpg",
  },
};

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
                  Our <span>Portfolio</span>
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
            <PortfolioProjectBigSize
              tagsArray={[
                "Mern Stack",
                "Redux Toolkit",
                "Mysql",
                "AWS",
                "Cart",
                "Socket.io",
                "Admin Panel",
                "Payment Gateway",
                "Responsive Design",
                "Formik",
                "Dynamic Carousels",
                "WishList",
                "Dynamic Menus",
                "Dynamic Product Filters",
                "Real Time Order Tracking ",
                "Skelton Ui",
                "Debounce Search",
                "We can control Everything from Admin Panel",
              ]}
              typeOfApp={"WebApp"}
              projectName={"ElectroCart"}
              imgLink={"projects/electrocart.webp"}
              imageAlt="electroCart Project Demostration"
              projectLink="/projectDetails/electrocart-webapp"
            />

            <PortfolioProjectSmallSize
              tagsArray={[
                "Mern Stack",
                "Redux Toolkit",
                "Mysql",
                "AWS",
                "Cart",
                "Socket.io",
                "Admin Panel",
                "Payment Gateway",
                "Responsive Design",

                "Formik",
                "Dynamic Carousels",
                "WishList",
                "Dynamic Menus",
                "Dynamic Product Filters",
                "Real Time Order Tracking ",
                "Debounce Search",
                "We can control Everything from Admin Panel",
              ]}
              typeOfApp={"WebApp"}
              projectName={"WearKart"}
              imgLink={"projects/WearKartHomePage.png"}
              imageAlt="Wear Kart Project Demostration"
              projectLink="/projectDetails/wearkart-webapp"
            />

            <PortfolioProjectBigSize
              tagsArray={[
                "React Native",
                "Redux Toolkit",
                "Redux Persist",
                "Express Js",
                "Node Js",
                "Mysql",
                "Socket.io",
                "Formik",
                "Payment Gateway",
                "Dynamic Search",
                "Dynamic Carousels",
                "Dynamic Product Filters",
              ]}
              typeOfApp={"Android App"}
              projectName={"WK Mobile App"}
              imgLink={"projects/WearKartAndroidApp.webp"}
              // imgLink={"projects/WearKartApp.jpg"}
              imageAlt="Sinbit Android APP Demostration"
              projectLink="/projectDetails/wearkart-android"
            />
            <PortfolioProjectSmallSize
              tagsArray={[
                "Mern Stack",
                "Redux Toolkit",
                "Mysql",
                "Crypto Currency Calculator",
                "Responsive Design",
                "Admin Panel",
                "Blogs CRUD",
              ]}
              typeOfApp={"Blogging WebApp"}
              projectName={"Sinbit Trades"}
              imgLink={"projects/sinbit.png"}
              imageAlt="Sinbit Project Demostration"
              projectLink="/projectDetails/sinbit-trades"
            />
            <PortfolioProjectSmallSize
              tagsArray={[
                "ReactJs",
                "Django Rest Framework",
                "Mysql",
                "Responsive Design",
                "Cart",
                "Wishlist",
                "Products CRUD",
                "Admin Panel",
                "Swagger Api Docs",
              ]}
              typeOfApp={"Ecommerce WebApp"}
              projectName={"MobileKart"}
              imgLink={"projects/mobilekart.png"}
              imageAlt="Sinbit Project Demostration"
              projectLink="/projectDetails/mobilekart"
            />
            <PortfolioProjectBigSize
              tagsArray={["React Js", "Responsive Design", "Animation"]}
              typeOfApp={"Website"}
              projectName={"Personal Portfolio"}
              imgLink={"projects/ajaypratapsingh.online.png"}
              imageAlt="Personal Portfolio Project Demostration"
              projectLink="/projectDetails/personal-portfolio"
            />
            {/* D:\Full Stack Project\themeforest\nextjs-files\axleo\public\projects */}
            <PortfolioProjectBigSize
              tagsArray={[
                "Mern Stack",
                "Redux Toolkit",
                "Aws",
                "Mysql",
                "Socket.io",
                "Group Crud",
                "Group Chatting",
                "Responsive",
                "Swagger API Documentation",
              ]}
              typeOfApp={"Web App"}
              projectName={"Chatting App"}
              imgLink={"projects/chattingHome.png"}
              imageAlt="Chatting  Demostration"
              projectLink="/projectDetails/chatting-app"
            />
            <PortfolioProjectSmallSize
              tagsArray={[
                "Mern Stack",
                "React Native",
                "Redux Toolkit",
                "Charts",
                "Mysql",
                "Expenses Crud",
                "Payment Gateway",
                "Pagination",
                "Filter Data",
                "Swagger API Documentation",
              ]}
              typeOfApp={"Web & Android App"}
              projectName={"Expense Tracker"}
              imgLink={"projects/expenseTrackerDemostration.jpeg"}
              imageAlt="Expense Tracker Project Demostration"
              projectLink="/projectDetails/expense-tracker"
            />
            <PortfolioProjectBigSize
              tagsArray={[
                "Mern Stack",
                "Redux Toolkit",
                "React Native",
                "Mysql",
                "Appointment CRUD",
                "Swagger API Documentation",
              ]}
              typeOfApp={"Web & Android App"}
              projectName={"Appointment Booking"}
              imgLink={"projects/appointmentBooking.jpeg"}
              imageAlt="Appointment Booking"
              projectLink="/projectDetails/appointment-booking"
            />
          </div>
          {/* appointmentBooking */}

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
