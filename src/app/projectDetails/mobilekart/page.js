"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import Header2 from "@/components/header/Header2";
import Footer2 from "@/components/Footer/Footer2";
import Header from "@/components/header/Header";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const metadata = {
  title: "SinTech Works LLP",
  icons: {
    icon: "assets/img/downloaded/companyLogo.jpg",
  },
};

const MobileKart = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-5",
        prevEl: ".prev-5",
      },
    };
  }, []);

  return (
    <>
      {/* <Header2 /> */}

      <Header />

      <div className="details-page-wrapper portfolio-details pt-130 pb-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="post-tag-and-title">
                <h1 className="post-title">Mobile Kart Web & Android App</h1>
                <ul className="post-category">
                  {[
                    "ReactJs",
                    "React Native",
                    "Django Rest Framework",
                    "Mysql",
                    "Responsive Design",
                    "Cart",
                    "Wishlist",
                    "Products CRUD",
                    "Admin Panel",
                    "Swagger Api Docs",
                  ].map((tag, idx) => {
                    return (
                      <li key={idx}>
                        <Link href="/">{tag}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-details-info-wrap">
                <table>
                  <tbody>
                    <tr>
                      <td>Category:</td>
                      <td>
                        <span>Ecommerce</span>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>Clients:</td>
                      <td>
                        <span>Mr. Marko Paul</span>
                      </td>
                    </tr> */}
                    <tr>
                      <td>Website:</td>
                      <td>
                        <a
                          href="https://mobilekart.sintechworks.com/"
                          target="_blank"
                        >
                          mobilekart.sintechworks.com/
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>Github WebApp:</td>
                      <td>
                        <a
                          href="https://github.com/apsingh03/MobileKart_WebApp"
                          target="_blank"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>Github Android App:</td>
                      <td>
                        <a
                          href="https://github.com/apsingh03/MobileKart_AndroidApp"
                          target="_blank"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    {/* <tr>
                      <td>Date:</td>
                      <td>
                        <span>01/15/2024</span>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <div className="social-area">
                <h6>Share:</h6>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="portfolio-details-post-thumb-slider">
            <div className="row">
              <div className="col-lg-12">
                <p className="fs-4 text-center m-3">Web Application</p>
                <Swiper
                  {...settings}
                  className="swiper service-post-thumb-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/HomeDashboard.png"
                        alt="MobileKart Home Dashboard"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/vendorDashboard.png"
                        alt="Vendor Dashboard"
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/Filters.png"
                        alt="Filters"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/cart.png"
                        alt="Cart"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/productDetails.png"
                        alt="Product Details"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/userDashboard.png"
                        alt="User Dashboard"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/web/vendorListedProductsDashboard.png"
                        alt="Vendor Listed Products Dashboard"
                        height={600}
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-btn-group">
                    <div className="slider-btn prev-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="slider-btn next-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <p className="fs-4 text-center m-3">Android Application</p>
                <Swiper
                  {...settings}
                  className="swiper service-post-thumb-slider  text-center"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/android/language.jpg"
                        alt="Language Screen"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/android/home.jpg"
                        alt="Home Screen"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/android/category.jpg"
                        alt="Category Screen"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/android/cart.jpg"
                        alt="Cart Screen"
                        height={600}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/projects/mobilekart/android/account.jpg"
                        alt="Account Screen"
                        height={600}
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-btn-group">
                    <div className="slider-btn prev-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="slider-btn next-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
};

export default MobileKart;
