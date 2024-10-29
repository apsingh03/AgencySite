"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PaintPaletteSvgIcon from "../../../public/assets/SVGIcons/PaintPaletteSvgIcon";
import ComputerCodingSvgIcon from "../../../public/assets/SVGIcons/ComputerCodingSvgIcon";
import CheckSvgIcon from "../../../public/assets/SVGIcons/CheckSvgIcon";
import WritingHandSvgIcon from "../../../public/assets/SVGIcons/WritingHandSvgIcon";
import RocketSvgIcon from "../../../public/assets/SVGIcons/RocketSvgIcon";
import ServiceSupportSvgIcon from "../../../public/assets/SVGIcons/ServiceSupportSvgIcon";
import CheckListSvgIcon from "../../../public/assets/SVGIcons/CheckListSvgIcon";
import PlanningSvgIcon from "../../../public/assets/SVGIcons/PlanningSvgIcon";
import WireframeSvgIcon from "../../../public/assets/SVGIcons/WireframeSvgIcon";

const Home2ProcessSection = () => {
  useEffect(() => {
    const allProcesses = document.querySelectorAll(
      ".home2-process-wrapper .single-process-static"
    );
    if (allProcesses.length > 0) {
      const allButLastProcess = Array.from(allProcesses).slice(0, -1);
      const totalProcesses = allProcesses.length;
      // Calculate the circumference of the circle
      const radius = 150; // Same as your SVG's radius
      const circumference = 2 * Math.PI * radius;

      // Select elements
      const progressBar = document.querySelector(".progress-bar");
      const pct = document.querySelector(".pct");

      // Set the initial stroke-dasharray and stroke-dashoffset to circumference
      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = circumference;

      // Assuming you have a place to display the current page/total, e.g., <p id="pageIndicator">1/4</p>
      const pageIndicator = document.getElementById("pageIndicator");
      if (pageIndicator) pageIndicator.textContent = `1/${totalProcesses}`;

      const actl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home2-process-wrapper",
          start: "top 250px",
          scrub: 1,
          ease: "linear",
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress; // 0 to 1
            const offset = circumference - progress * circumference;
            progressBar.style.strokeDashoffset = offset;
            pct.textContent = `${Math.round(progress * 100)}%`;

            // Calculate the current page based on scroll progress
            const currentPage = Math.min(
              Math.ceil(progress * totalProcesses),
              totalProcesses
            );
            if (pageIndicator)
              pageIndicator.textContent = `${currentPage}/${totalProcesses}`;
          },
        },
      });
      gsap.to(".progress-bar", {
        strokeDashoffset: 0, // Animate from full circumference to 0 to fill the circle
        duration: 5, // Duration in seconds
        ease: "linear", // Use an easing function to make the animation smooth
        // You can control the progress dynamically by adjusting the end value of strokeDashoffset
      });
    }
  }, []); // Empty dependency array to ensure effect runs only once
  return (
    <>
      <div className="home2-process-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  What we do
                  {/* <br />
                  <span>Proccess</span> */}
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>
                      We comprehend the needs of businesses, whether small or
                      large, and deliver robust solutions tailored to their
                      requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4" id="scroll-progress">
            <div className="col-lg-6">
              <div className="progress-wrapper">
                <p className="pct">0%</p>
                <div className="counter-wrap">
                  <p className="steps">Step</p>
                  <p id="pageIndicator">01/04</p>
                </div>
                <svg className="complete" width={340} height={340}>
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" />
                      <stop offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle cx={168} cy={168} r={150} />
                  <circle className="progress-bar" cx={168} cy={168} r={150} />
                </svg>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home2-process-wrapper">
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <CheckListSvgIcon width={100} height={100} />
                    </div>
                    <div className="content">
                      <h3>Project Discovery & Requirements Analysis.</h3>
                      <p>
                        We kick off the process by thoroughly assessing the
                        client's needs, business goals, target audience, and
                        project scope.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" />
                          Conduct an initial consultation with the client.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Define and document project requirements and scope.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Evaluate competitors and
                          analyze market trends.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <PlanningSvgIcon width={100} height={100} />
                    </div>
                    <div className="content">
                      <h3>Project Framework & Strategy.</h3>
                      <p>
                        We create a comprehensive roadmap that outlines
                        timelines and technical specifications, focusing on
                        clear objectives, milestone setting, and architectural
                        design.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Establish project goals
                          and key deliverables.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Develop a detailed project timeline and roadmap.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Determine the appropriate
                          tech stack and required resources.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> - Outline roles and
                          responsibilities for the project team.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <WireframeSvgIcon width={100} height={100} />
                    </div>
                    <div className="content">
                      <h3>Interface Design & Prototyping </h3>
                      <p>
                        We design wireframes and prototypes to outline the
                        project’s layout and user journey, providing clients
                        with a clear understanding of the interface.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Develop initial
                          wireframes to establish the project’s framework.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Create interactive
                          prototypes to simulate user interactions.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Work closely with clients
                          to incorporate their feedback on designs.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Ensure all designs follow user experience (UX)
                          principles.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <PaintPaletteSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Visual Design &amp; User Experience </h3>
                      <p>
                        We develop visually engaging and intuitive interfaces
                        that prioritize user experience (UX) while aligning with
                        the client's branding.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" />
                          Design responsive and aesthetically pleasing UI
                          elements.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Enhance the overall user experience and journey.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Integrate the client's branding seamlessly into the
                          design.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Maintain consistency
                          across various devices and platforms.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <ComputerCodingSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Comprehensive Software Development.</h3>
                      <p>
                        We begin coding based on the approved designs,
                        developing the frontend with frameworks like React,
                        Vue.js, and Angular, and establishing the backend using
                        technologies such as Node.js, Express, Python, Ruby on
                        Rails, MySQL, MongoDB, and others.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Develop the frontend with
                          React.js, Next.js, Vue.js, Angular, and React Native.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Setting up the backend
                          with Node.js, Express, Mysql and MongoDB.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Implement APIs to connect the frontend with the
                          backend.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Write clean, scalable, and efficient code in a variety
                          of programming languages.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <CheckSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Comprehensive Testing & Assurance.</h3>
                      <p>
                        We carry out extensive testing to ensure optimal
                        functionality, performance, and security, addressing any
                        issues and ensuring smooth operation across all
                        platforms.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Execute unit,
                          integration, and end-to-end testing.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Detect and resolve bugs
                          or performance issues.
                        </li>

                        <li>
                          <i className="bi bi-plus" /> Conduct security
                          assessments and validate data accuracy.
                        </li>

                        <li>
                          <i className="bi bi-plus" /> Ensure the solution is
                          ready for a flawless production launch.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <WritingHandSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Client Evaluation & Adjustments.</h3>
                      <p>
                        We provide the developed solution to the client for
                        review, incorporating feedback to ensure it fully meets
                        their needs and expectations.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Share the solution for
                          client evaluation.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Collect client feedback
                          and insights.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Apply revisions based on client input.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Fine-tune the solution to align with client goals.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Conduct a final review for approval.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <RocketSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Launch & Deployment.</h3>
                      <p>
                        We execute the deployment of the solution to the
                        production environment (AWS, Firebase, etc.), ensuring
                        optimal functionality and a successful launch while
                        closely monitoring initial performance.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Set up the production
                          environment (AWS, Firebase, etc.).
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Carry out the deployment and conduct final testing.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Facilitate a smooth and error-free launch.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Track performance metrics following the launch.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="single-process-static">
                  <div className="single-process">
                    <div className="icon">
                      <ServiceSupportSvgIcon height={100} width={100} />
                    </div>
                    <div className="content">
                      <h3>Post-Launch Support & Maintenance.</h3>
                      <p>
                        We are dedicated to ensuring seamless operation through
                        continuous support, performance monitoring, and timely
                        enhancements.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" />
                          Provide 24/7 support for maintenance and urgent issue
                          resolution.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Implement new features and updates based on evolving
                          needs.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Offer responsive
                          technical support and troubleshooting.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Utilize Agile methodologies for quick adaptations and
                          improvements.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2ProcessSection;
