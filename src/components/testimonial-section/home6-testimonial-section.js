"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home6TestimonialSection = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="home6-testimonial-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="testimonial-wrapper">
              <Swiper {...settings} className="swiper home6-testimonial-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Great Services!</span>
                      <p>
                        I had a fantastic experience working with Ajay for my
                        web development project. Their team was professional,
                        responsive, and truly understood my vision. The final
                        website exceeded my expectations in both design and
                        functionality. They met all deadlines and provided
                        excellent post-launch support. I highly recommend them
                        for anyone seeking quality web development services.
                      </p>
                      <div className="author-area">
                        {/* <div className="author-img">
                          <img
                            src="assets/img/home6/testi-author-img1.png"
                            alt=""
                          />
                        </div> */}
                        <div className="author-content">
                          <h6>Adarsh Thakur </h6>
                          {/* <span>CTO, Aploxn</span> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      {/* <span>Good Support!</span> */}
                      <p>
                        I highly recommend STW for development works. They
                        delivered a high-quality website that was tailored to my
                        needs. Great experience overall.
                      </p>
                      <div className="author-area">
                        {/* <div className="author-img">
                          <img
                            src="assets/img/home6/testi-author-img2.png"
                            alt=""
                          />
                        </div> */}
                        <div className="author-content">
                          <h6>Mitul Jain</h6>
                          {/* <span>CEO, Drivco</span> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Great Services!</span>
                      <p>
                        Good experience with the team for web development, SEO,
                        and design. They crafted a stunning website that
                        perfectly represents my brand and ranks well in search
                        engines. Their attention to detail and responsiveness
                        throughout the project were impressive. I’m very
                        satisfied with the results.
                      </p>
                      <div className="author-area">
                        {/* <div className="author-img">
                          <img
                            src="assets/img/home6/testi-author-img3.png"
                            alt=""
                          />
                        </div> */}
                        <div className="author-content">
                          <h6>Rohan Singh </h6>
                          {/* <span>CTO, Bidout</span> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Great Services!</span>
                      <p>
                        Axleo is a user-friendly, cloud-based solution that
                        simplifies project management that high-quality results.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home5/testi-author-img2.png"
                            alt=""
                          />
                        </div>
                        <div className="author-content">
                          <h6>Robert Jhonson </h6>
                          <span>CTO, Zenfy</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Great Services!</span>
                      <p>
                        Axleo provides a task assignment, and monitoring tool
                        that makes sure teams remain structured and fulfill
                        targets.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/img/home5/testi-author-img3.png"
                            alt=""
                          />
                        </div>
                        <div className="author-content">
                          <h6>Daniel Scoot</h6>
                          <span>CEO, Catch</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="slider-btn-group two">
                <div className="slider-btn prev-1">
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
                <div className="slider-btn next-1">
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
            </div>
          </div>
        </div>
        {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
            <div className="testimonial-bottom-area">
            <ul className="rating-area">
                <li>
                <a href="https://www.google.com/" className="single-rating two">
                    <div className="logo">
                    <img src="assets/img/home6/icon/google-logo.svg" alt="" />
                    </div>
                    <div className="rating">
                    <span>Google Rating</span>
                    <div className="star-and-point">
                        <strong>5.0</strong>
                        <ul className="star">
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        <li><i className="bi bi-star-fill" /></li>
                        </ul>
                    </div>
                    </div>
                </a>
                </li>
                <li>
                <a href="https://www.trustpilot.com/" className="single-rating">
                    <div className="rating">
                    <strong>5.0</strong>
                    <span>Rated</span>
                    </div>
                    <div className="star-and-logo">
                    <ul className="star">
                        <li>
                        <svg width={12} height={11} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64375 8.07902L8.09609 7.46269L9.1207 10.5943L5.64375 8.07902ZM11.2875 4.03118H6.9707L5.64375 0L4.3168 4.03118H0L3.49375 6.52985L2.1668 10.561L5.66055 8.06237L7.81055 6.52985L11.2875 4.03118Z" />
                        </svg>
                        </li>
                        <li>
                        <svg width={12} height={11} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64375 8.07902L8.09609 7.46269L9.1207 10.5943L5.64375 8.07902ZM11.2875 4.03118H6.9707L5.64375 0L4.3168 4.03118H0L3.49375 6.52985L2.1668 10.561L5.66055 8.06237L7.81055 6.52985L11.2875 4.03118Z" />
                        </svg>
                        </li>
                        <li>
                        <svg width={12} height={11} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64375 8.07902L8.09609 7.46269L9.1207 10.5943L5.64375 8.07902ZM11.2875 4.03118H6.9707L5.64375 0L4.3168 4.03118H0L3.49375 6.52985L2.1668 10.561L5.66055 8.06237L7.81055 6.52985L11.2875 4.03118Z" />
                        </svg>
                        </li>
                        <li>
                        <svg width={12} height={11} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64375 8.07902L8.09609 7.46269L9.1207 10.5943L5.64375 8.07902ZM11.2875 4.03118H6.9707L5.64375 0L4.3168 4.03118H0L3.49375 6.52985L2.1668 10.561L5.66055 8.06237L7.81055 6.52985L11.2875 4.03118Z" />
                        </svg>
                        </li>
                        <li>
                        <svg width={12} height={11} viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.64375 8.07902L8.09609 7.46269L9.1207 10.5943L5.64375 8.07902ZM11.2875 4.03118H6.9707L5.64375 0L4.3168 4.03118H0L3.49375 6.52985L2.1668 10.561L5.66055 8.06237L7.81055 6.52985L11.2875 4.03118Z" />
                        </svg>
                        </li>
                    </ul>
                    <div className="logo">
                        <svg width={80} height={20} viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0211 7.0874H29.115V8.62173H25.9281V17.271H24.1814V8.62173H21.0078L21.0211 7.0874ZM28.7683 9.89808H30.2618V11.3238H30.2884C30.3418 11.1201 30.4351 10.93 30.5684 10.7399C30.7018 10.5498 30.8618 10.3733 31.0618 10.224C31.2485 10.061 31.4618 9.93882 31.7018 9.84377C31.9285 9.74872 32.1686 9.69441 32.4086 9.69441C32.5952 9.69441 32.7286 9.70799 32.7953 9.70799C32.8619 9.72157 32.9419 9.73515 33.0086 9.73515V11.2966C32.9019 11.2695 32.7819 11.2559 32.6619 11.2423C32.5419 11.2287 32.4352 11.2152 32.3152 11.2152C32.0485 11.2152 31.7952 11.2695 31.5552 11.3781C31.3152 11.4867 31.1151 11.6497 30.9285 11.8533C30.7551 12.0706 30.6084 12.3286 30.5018 12.6409C30.3951 12.9532 30.3418 13.3198 30.3418 13.7271V17.2303H28.7417L28.7683 9.89808ZM40.3424 17.271H38.769V16.2391H38.7423C38.5423 16.6193 38.249 16.9044 37.8623 17.1352C37.4756 17.3661 37.0755 17.4747 36.6755 17.4747C35.7288 17.4747 35.0354 17.2439 34.6087 16.7551C34.182 16.2798 33.9687 15.5466 33.9687 14.5825V9.89808H35.5688V14.4196C35.5688 15.0714 35.6888 15.533 35.9421 15.791C36.1821 16.0626 36.5288 16.1983 36.9689 16.1983C37.3022 16.1983 37.5822 16.144 37.8089 16.0354C38.0356 15.9268 38.2223 15.791 38.3556 15.6145C38.5023 15.438 38.5956 15.2207 38.6623 14.9763C38.729 14.7319 38.7557 14.4603 38.7557 14.1752V9.89808H40.3558V17.271H40.3424ZM43.0626 14.9084C43.1159 15.3837 43.2893 15.7095 43.596 15.9132C43.9027 16.1033 44.276 16.1983 44.7027 16.1983C44.8494 16.1983 45.0227 16.1848 45.2094 16.1576C45.3961 16.1305 45.5828 16.0897 45.7428 16.0218C45.9161 15.9539 46.0495 15.8589 46.1561 15.7231C46.2628 15.5873 46.3161 15.4244 46.3028 15.2207C46.2895 15.0171 46.2228 14.8405 46.0761 14.7048C45.9295 14.569 45.7561 14.4739 45.5428 14.3789C45.3294 14.2974 45.0761 14.2295 44.7961 14.1752C44.516 14.1209 44.236 14.053 43.9427 13.9851C43.6493 13.9172 43.356 13.8358 43.0759 13.7407C42.7959 13.6457 42.5559 13.5235 42.3292 13.3469C42.1159 13.184 41.9292 12.9803 41.8092 12.7223C41.6758 12.4644 41.6092 12.1656 41.6092 11.7854C41.6092 11.3781 41.7025 11.0522 41.9025 10.7807C42.0892 10.5091 42.3426 10.2918 42.6359 10.1289C42.9293 9.96597 43.2626 9.84377 43.6226 9.77588C43.9827 9.70799 44.3294 9.68083 44.6494 9.68083C45.0227 9.68083 45.3828 9.72157 45.7161 9.80304C46.0495 9.8845 46.3695 10.0067 46.6362 10.1968C46.9162 10.3733 47.1429 10.6177 47.3162 10.9029C47.5029 11.188 47.6096 11.541 47.6629 11.9484H45.9961C45.9161 11.5546 45.7428 11.2966 45.4761 11.1609C45.1961 11.0251 44.8894 10.9572 44.5294 10.9572C44.4227 10.9572 44.276 10.9708 44.1293 10.9843C43.9693 11.0115 43.836 11.0386 43.6893 11.093C43.556 11.1473 43.436 11.2287 43.3426 11.3238C43.2493 11.4188 43.1959 11.5546 43.1959 11.7176C43.1959 11.9212 43.2626 12.0706 43.396 12.1928C43.5293 12.315 43.7026 12.41 43.9293 12.5051C44.1427 12.5866 44.396 12.6545 44.676 12.7088C44.9561 12.7631 45.2494 12.831 45.5428 12.8989C45.8361 12.9667 46.1161 13.0482 46.3962 13.1433C46.6762 13.2383 46.9295 13.3605 47.1429 13.537C47.3562 13.7 47.5429 13.9036 47.6762 14.148C47.8096 14.3925 47.8763 14.7048 47.8763 15.0578C47.8763 15.4923 47.7829 15.8589 47.5829 16.1712C47.3829 16.4699 47.1295 16.7279 46.8229 16.918C46.5162 17.1081 46.1561 17.2439 45.7828 17.3389C45.3961 17.4204 45.0227 17.4747 44.6494 17.4747C44.196 17.4747 43.7693 17.4204 43.3826 17.3118C42.9959 17.2031 42.6492 17.0402 42.3692 16.8365C42.0892 16.6193 41.8625 16.3613 41.7025 16.0354C41.5425 15.7231 41.4492 15.3429 41.4358 14.8948H43.0493V14.9084H43.0626ZM48.3296 9.89808H49.543V7.67126H51.1431V9.8845H52.5832V11.093H51.1431V15.0306C51.1431 15.2071 51.1565 15.3429 51.1698 15.4787C51.1831 15.6009 51.2231 15.7095 51.2631 15.791C51.3165 15.8725 51.3965 15.9404 51.4898 15.9811C51.5965 16.0218 51.7298 16.049 51.9165 16.049C52.0232 16.049 52.1432 16.049 52.2499 16.0354C52.3566 16.0218 52.4766 16.0083 52.5832 15.9811V17.2439C52.4099 17.271 52.2365 17.2846 52.0632 17.2982C51.8899 17.3253 51.7298 17.3253 51.5432 17.3253C51.1165 17.3253 50.7831 17.2846 50.5298 17.2031C50.2764 17.1217 50.0764 16.9995 49.9297 16.8501C49.783 16.6872 49.6897 16.4971 49.6364 16.2662C49.583 16.0354 49.5564 15.7503 49.543 15.4516V11.1065H48.3296V9.87093V9.89808ZM53.7033 9.89808H55.2101V10.9029H55.2367C55.4634 10.4684 55.7701 10.1696 56.1701 9.97955C56.5702 9.78946 56.9969 9.69441 57.4769 9.69441C58.0503 9.69441 58.5436 9.78946 58.9703 10.0067C59.397 10.2104 59.7437 10.4819 60.0237 10.8486C60.3037 11.2016 60.5171 11.6225 60.6504 12.0977C60.7838 12.573 60.8638 13.0889 60.8638 13.6185C60.8638 14.1209 60.7971 14.5961 60.6771 15.0578C60.5438 15.5194 60.3571 15.9404 60.1037 16.2934C59.8504 16.6464 59.5304 16.9316 59.1303 17.1488C58.7303 17.3661 58.2769 17.4747 57.7436 17.4747C57.5169 17.4747 57.2769 17.4475 57.0502 17.4068C56.8235 17.3661 56.5968 17.2982 56.3835 17.2031C56.1701 17.1081 55.9701 16.9859 55.7968 16.8365C55.6101 16.6872 55.4634 16.5107 55.3434 16.3206H55.3167V20.0002H53.7166V9.89808H53.7033ZM59.2903 13.5913C59.2903 13.2655 59.2503 12.9396 59.157 12.6273C59.077 12.315 58.9436 12.0434 58.7703 11.799C58.597 11.5546 58.3836 11.3645 58.1436 11.2152C57.8903 11.0658 57.5969 10.9979 57.2769 10.9979C56.6102 10.9979 56.1035 11.2287 55.7568 11.704C55.4234 12.1792 55.2501 12.8174 55.2501 13.6049C55.2501 13.9851 55.2901 14.3246 55.3834 14.6369C55.4768 14.9492 55.5968 15.2207 55.7834 15.4516C55.9568 15.6824 56.1701 15.8589 56.4235 15.9947C56.6768 16.1305 56.9569 16.1983 57.2902 16.1983C57.6636 16.1983 57.9569 16.1169 58.2103 15.9675C58.4636 15.8182 58.6636 15.6145 58.837 15.3837C58.997 15.1393 59.117 14.8677 59.1837 14.5554C59.2503 14.2295 59.2903 13.9172 59.2903 13.5913ZM62.1039 7.0874H63.704V8.62173H62.1039V7.0874ZM62.1039 9.89808H63.704V17.271H62.1039V9.89808ZM65.1307 7.0874H66.7308V17.271H65.1307V7.0874ZM71.6112 17.4747C71.0378 17.4747 70.5177 17.3797 70.0644 17.176C69.611 16.9723 69.2377 16.7143 68.9176 16.3749C68.611 16.0354 68.3709 15.6145 68.2109 15.1393C68.0509 14.664 67.9576 14.1345 67.9576 13.5778C67.9576 13.0211 68.0376 12.5051 68.2109 12.0299C68.3709 11.5546 68.611 11.1473 68.9176 10.7942C69.2243 10.4548 69.611 10.1832 70.0644 9.99313C70.5177 9.80304 71.0378 9.69441 71.6112 9.69441C72.1845 9.69441 72.7046 9.78946 73.1579 9.99313C73.6113 10.1832 73.9846 10.4548 74.3047 10.7942C74.6114 11.1337 74.8514 11.5546 75.0114 12.0299C75.1714 12.5051 75.2647 13.0211 75.2647 13.5778C75.2647 14.148 75.1847 14.664 75.0114 15.1393C74.838 15.6145 74.6114 16.0218 74.3047 16.3749C73.998 16.7143 73.6113 16.9859 73.1579 17.176C72.7046 17.3661 72.1979 17.4747 71.6112 17.4747ZM71.6112 16.1848C71.9578 16.1848 72.2779 16.1033 72.5312 15.9539C72.7979 15.8046 72.9979 15.6009 73.1713 15.3565C73.3446 15.1121 73.4646 14.827 73.5446 14.5282C73.6246 14.2159 73.6646 13.9036 73.6646 13.5778C73.6646 13.2655 73.6246 12.9532 73.5446 12.6409C73.4646 12.3286 73.3446 12.057 73.1713 11.8126C72.9979 11.5682 72.7846 11.3781 72.5312 11.2287C72.2645 11.0794 71.9578 10.9979 71.6112 10.9979C71.2645 10.9979 70.9444 11.0794 70.6911 11.2287C70.4244 11.3781 70.2244 11.5818 70.0511 11.8126C69.8777 12.057 69.7577 12.3286 69.6777 12.6409C69.5977 12.9532 69.5577 13.2655 69.5577 13.5778C69.5577 13.9036 69.5977 14.2159 69.6777 14.5282C69.7577 14.8405 69.8777 15.1121 70.0511 15.3565C70.2244 15.6009 70.4377 15.8046 70.6911 15.9539C70.9578 16.1169 71.2645 16.1848 71.6112 16.1848ZM75.7448 9.89808H76.9582V7.67126H78.5583V9.8845H79.9984V11.093H78.5583V15.0306C78.5583 15.2071 78.5716 15.3429 78.585 15.4787C78.5983 15.6009 78.6383 15.7095 78.6783 15.791C78.7316 15.8725 78.8116 15.9404 78.905 15.9811C79.0116 16.0218 79.145 16.049 79.3317 16.049C79.4383 16.049 79.5583 16.049 79.665 16.0354C79.7717 16.0218 79.8917 16.0083 79.9984 15.9811V17.2439C79.825 17.271 79.6517 17.2846 79.4783 17.2982C79.305 17.3253 79.145 17.3253 78.9583 17.3253C78.5316 17.3253 78.1983 17.2846 77.9449 17.2031C77.6916 17.1217 77.4915 16.9995 77.3449 16.8501C77.1982 16.6872 77.1049 16.4971 77.0515 16.2662C76.9982 16.0354 76.9715 15.7503 76.9582 15.4516V11.1065H75.7448V9.87093V9.89808Z" />
                        <path d="M19.1652 7.08781H11.8447L9.59121 0L7.32439 7.08781L0.00390625 7.07423L5.9243 11.46L3.65748 18.5478L9.57787 14.162L15.4983 18.5478L13.2448 11.46L19.1652 7.08781Z" fill="#00B67A" />
                        <path d="M13.7267 13.0617L13.22 11.4595L9.56641 14.1615L13.7267 13.0617Z" fill="#005128" />
                        </svg>
                    </div>
                    </div>
                </a>
                </li>
            </ul>
            <p>Total rating 5.0 based on 2000 reviews</p>
            </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home6TestimonialSection;
