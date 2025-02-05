import React from "react";

const Home2TechnologySection = () => {
  return (
    <div className="home2-technology-section mb-0">
      <div className="container-lg container-fluid">
        <div className="row mb-60">
          <div className="section-title four white text-animation">
            <h2>Tech Stack</h2>
            <div className="dash-and-paragraph three">
              <div className="btn-and-paragraph">
                {/* <p>
                  Offer a wide range of services to help businesses establish
                  and enhance their online presence.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="technology-tab-wrap">
              <ul className="nav nav-tabs" id="technologyTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="front-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#front"
                    type="button"
                    role="tab"
                    aria-controls="front"
                    aria-selected="true"
                  >
                    Front-end
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="back-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#back"
                    type="button"
                    role="tab"
                    aria-controls="back"
                    aria-selected="false"
                  >
                    Back-end
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="mobile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#mobile"
                    type="button"
                    role="tab"
                    aria-controls="mobile"
                    aria-selected="false"
                  >
                    Mobile
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-4" id="technologyTabContent">
                <div
                  className="tab-pane fade show active"
                  id="front"
                  role="tabpanel"
                  aria-labelledby="front-tab"
                >
                  <div className="row g-4 align-items-end">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology  btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/html.svg"
                            alt="Html"
                          />
                        </div>
                        <span>HTML</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology  btn_wrapper">
                        <div className="icon">
                          <img src="assets/img/home2/icon/css.svg" alt="Css" />
                        </div>
                        <span>CSS</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/bootstrap.svg"
                            alt="Bootstrap"
                            width={50}
                            height={50}
                          />
                        </div>
                        <span>Bootstrap</span>
                      </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/materialui.svg"
                            alt="Material UI"
                            width={50}
                            height={50}
                          />
                        </div>
                        <span>Material UI</span>
                      </div>
                    </div> */}
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/tailwind.svg"
                            alt="Tailwind Css"
                            width={50}
                            height={50}
                          />
                        </div>
                        <span>Tailwind Css</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/javascript.svg"
                            alt="Javascript"
                          />
                        </div>
                        <span>JavaScript</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/react.svg"
                            alt="ReactJs"
                          />
                        </div>
                        <span>React Js</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/nextJs.svg"
                            alt="NextJs"
                            width={50}
                            height={50}
                          />
                        </div>
                        <span>Next JS</span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                      <div className="single-technology btn_wrapper">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/typescript.svg"
                            alt="TypeScript"
                          />
                        </div>
                        <span>TypeScript</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="back"
                  role="tabpanel"
                  aria-labelledby="back-tab"
                >
                  <div className="row g-4 align-items-end">
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology ">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/node-js.svg"
                            alt="Node Js"
                          />
                        </div>
                        <span>Node Js</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/express-js.svg"
                            alt="Express Js"
                          />
                        </div>
                        <span>Express Js</span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/django.svg"
                            alt="Django"
                          />
                        </div>
                        <span>Django</span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/firebase.svg "
                            alt="Firebase"
                          />
                        </div>
                        <span>Firebase</span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/mysql.svg "
                            alt="Mysql"
                            width={60}
                            height={60}
                          />
                        </div>
                        <span>MySql</span>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/mongodb.svg "
                            alt="Mongo Db"
                            width={50}
                            height={50}
                          />
                        </div>
                        <span>MongoDb</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="mobile"
                  role="tabpanel"
                  aria-labelledby="mobile-tab"
                >
                  <div className="row g-4 align-items-end">
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img src="assets/img/home2/icon/android.svg" alt="" />
                        </div>
                        <span>Android</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img src="assets/img/home2/icon/ios.svg" alt="" />
                        </div>
                        <span>IOS App</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img
                            src="assets/img/home2/icon/firebase.svg"
                            alt=""
                          />
                        </div>
                        <span>Firebase</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="single-technology">
                        <div className="icon">
                          <img src="assets/img/home2/icon/react.svg" alt="" />
                        </div>
                        <span>React Native</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2TechnologySection;
