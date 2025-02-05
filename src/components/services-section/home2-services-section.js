import Link from "next/link";
import React from "react";

const Home2ServicesSection = () => {
  return (
    <>
      <div className="home2-services-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  What we Excel At
                  {/* <span>Excel</span> At */}
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <p>
                      Fueling Business Growth Through Innovative Digital
                      Solutions and Technological Transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. Blockchain Development</h3>
              <p>
                From smart contract development and NFTs to complex blockchain
                games, our expert team delivers all your blockchain development
                needs. We also specialize in content management and community
                growth, ensuring the best results with our specialized
                skills and experience.
              </p>
            </div>
            <div className="service-card">
              <h3>2. Website Development</h3>
              <p>
                Unlock your business’s potential by harnessing the power of the
                online world. From simple one-page websites to robust e-commerce
                platforms, we bring your bold ideas to life with creativity,
                innovation, technical expertise, and a commitment to excellence.
              </p>
            </div>
            <div className="service-card">
              <h3>3. Android | IOS Development</h3>
              <p>
                Meet your business's app and game development needs with our
                dedicated team of experienced developers. We deliver high-end
                UI/UX solutions tailored to your vision, ensuring seamless
                functionality, stunning visuals, user engagement, and an
                exceptional digital experience that drives success.
              </p>
            </div>
            <div className="service-card">
              <h3>4. SEO Services & Marketing</h3>
              <p>
                Expand your footprint with our SEO and Social Media Marketing
                services, strategically targeting your potential users through
                web page optimization, keyword research, content marketing, and
                tailored strategies. We enhance visibility, drive engagement,
                and maximize conversions to help your business
                grow successfully.
              </p>
            </div>

            <div className="service-card">
              <h3>5. Tech Consulting</h3>
              <p>
                Elevate your business's technical landscape with our expert
                team. Our dedicated managers not only understand your specific
                needs but also optimize workflow, enhance productivity, and
                boost customer retention. We ensure seamless success at every
                stage, delivering consistent results for growth.
              </p>
            </div>
            <div className="service-card">
              <h3>6. Branding & Design</h3>
              <p>
                Hand in hand with our backend team, our skilled frontend
                developers and designers work tirelessly to shape your online
                presence and branding. Together, we craft visually appealing,
                user-friendly designs that make a lasting impression and drive
                meaningful engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2ServicesSection;
