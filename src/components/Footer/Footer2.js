import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="style-2">
        <div className="vector d-lg-flex d-none">
          <svg
            width={300}
            height={372}
            viewBox="0 0 300 372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <circle cx={-20} cy={320} r={270} strokeWidth={100} />
            </g>
          </svg>
        </div>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="row g-lg-4 gy-5 mb-90">
                  <div className="col-xl-6 col-lg-6 col-md-8 d-flex justify-content-lg-start">
                    <div className="footer-widget">
                      <div className="subscribed-area">
                        <h3>Stay Connected</h3>
                        <form>
                          <div className="form-inner">
                            <input type="text" placeholder="Enter Email" />
                            <button type="submit">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z"></path>
                              </svg>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-center">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4>Company</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/about">
                              About Us
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/our-team1">
                              Our Team
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio-manonery">
                              Our Portfolio
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>

                          <li>
                            <Link href="/contact">
                              Contact Us
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 d-flex justify-content-lg-end">
                    <div className="footer-widget">
                      <div className="widget-title">
                        <h4>Our Solutions</h4>
                      </div>
                      <div className="menu-container">
                        <ul>
                          <li>
                            <Link href="/service-details">
                              WebApp Development
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              Android Development
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              IOS Development
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <Link href="/service-details">
                              UI & UX Design
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                              >
                                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                              </svg>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row justify-content-end mb-60">
                  <div className="col-xl-7 d-flex justify-content-lg-end">
                    <div className="solial-account">
                      <ul>
                        <li>
                          <a href="https://dribbble.com/">Dribbble</a>
                        </li>
                        <li>
                          <a href="https://www.behance.net/">Behance</a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">Pinterest</a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/">Facebook</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-logo-contact-wrap">
                      <div className="footer-logo">
                        <Link href="/" className="text-white fs-4">
                          {/* <img
                            src="assets/img/software-logo.svg"
                            alt="footer-logo"
                          /> */}
                          SinTech Works LLP
                        </Link>
                      </div>
                      <ul className="footer-contact">
                        <li className="single-contact">
                          <span>Phone</span>
                          <h5>
                            <a href="tel:+919470839068">+91 - 947 083 9068</a>
                          </h5>
                        </li>
                        <li className="single-contact">
                          <span>Email Now</span>
                          <h5>
                            <a href="mailto:contact@sintechworks.com">
                              contact@sintechworks.com
                            </a>
                          </h5>
                          <h5>
                            <a href="mailto:sintechworks04@gmail.com">
                              sintechworks04@gmail.com
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-btm">
                <div className="copyright-area">
                  <p>
                    Copyrights © 2024. All rights reserved | SinTech Works LLP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
