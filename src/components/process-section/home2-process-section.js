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
                  Our Solution
                  <br />
                  <span>Proccess</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>
                      Digital agencies can vary in size and specialization. Some
                      may focus on specific niches, such as healthcare or
                      e-commerce, while others may offer a comprehensive.
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
                      <h3>Requirement Gathering & Discovery.</h3>
                      <p>
                        Begin by understanding the client’s needs, business
                        goals, target audience, and project scope through
                        detailed discussions.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Initial meeting with the
                          client.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Gathering project requirements and scope.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Analyzing competitors and
                          market trends.
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
                      <h3>Planning & Strategy.</h3>
                      <p>
                        Create a detailed project roadmap, timelines, and
                        technical requirements. This step involves defining the
                        tech stack, setting milestones, and designing the
                        architecture.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Defining project
                          objectives and deliverables.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Creating a detailed project roadmap and timeline.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Identifying the tech
                          stack and necessary resources.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Identifying the tech
                          stack and necessary resources.
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
                      <h3>Wireframing & Prototyping</h3>
                      <p>
                        Develop wireframes and prototypes to visualize the
                        project’s structure and user flow, providing clients
                        with a clear picture of the interface.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Creating low-fidelity
                          wireframes to outline the structure.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Building interactive
                          prototypes for user flow visualization.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Collaborating with the
                          client for feedback on wireframes.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Ensuring the design
                          aligns with user experience (UX) best practices.
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
                      <h3>Design &amp; UI/UX.</h3>
                      <p>
                        Create a visually appealing and user-friendly interface.
                        Focus on user experience (UX) and ensure that the design
                        reflects the client's branding.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" />
                          Crafting a responsive and visually appealing UI
                          design.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Focusing on enhancing user experience and journey.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Incorporating client’s branding into the design.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Ensuring consistency
                          across different devices and platforms.
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
                      <h3>Development (Frontend &amp; Backend).</h3>
                      <p>
                        Start coding based on the finalized design. Build the
                        frontend using React/React Native and set up the backend
                        with Node.js, Express, MongoDB, and any other necessary
                        technologies.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Building the frontend
                          using ReactJs, NextJs & React Native.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Setting up the backend
                          with Node.js, Express, Mysql and MongoDB.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Implementing APIs and connecting frontend with
                          backend.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Writing clean, scalable, and efficient code.
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
                      <h3>Testing & Quality Assurance.</h3>
                      <p>
                        Conduct thorough testing to ensure functionality,
                        performance, and security. Fix any bugs and ensure the
                        app is optimized across all devices.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Performing unit,
                          integration, and end-to-end testing.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Identifying and fixing
                          bugs or performance issues.
                        </li>

                        <li>
                          <i className="bi bi-plus" /> Security testing and data
                          validation.
                        </li>

                        <li>
                          <i className="bi bi-plus" /> Preparing the app for
                          smooth production release.
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
                      <h3>Client Feedback & Revisions.</h3>
                      <p>
                        Present the developed solution to the client for
                        feedback. Make necessary adjustments and revisions to
                        align with the client’s expectations.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Presenting the developed
                          solution for client review.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Gathering client feedback
                          and suggestions.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Making necessary
                          revisions based on feedback.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Refining the final
                          product to meet client expectations.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Conducting a final review and approval process.
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
                      <h3>Deployment & Launch.</h3>
                      <p>
                        Deploy the application to the production environment
                        (AWS, Firebase, etc.) and ensure everything runs
                        smoothly. Prepare for launch and monitor initial
                        performance.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" /> Setting up the production
                          environment (AWS, Firebase, etc).
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Deploying the application and performing final tests.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Ensuring a smooth, error-free launch.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Monitoring app performance post-launch.
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
                        Provide ongoing support, monitor the application, fix
                        bugs, and implement new features as needed.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-plus" />
                          Offering ongoing maintenance and bug fixing.
                        </li>
                        <li>
                          <i className="bi bi-plus" />
                          Implementing new features and updates as needed.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Providing technical
                          support and troubleshooting.
                        </li>
                        <li>
                          <i className="bi bi-plus" /> Agile Development.
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
