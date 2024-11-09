import Link from "next/link";
import React from "react";

const PortfolioProjectBigSize = ({
  tagsArray,
  projectName,
  imgLink,
  typeOfApp,
  imageAlt,
  projectLink,
}) => {
  const projectLinkk = projectLink ? projectLink : "#";
  return (
    <div className="col-lg-6 col-md-6">
      <div className="portfolio-card two magnetic-item">
        <div className="image-and-tag">
          <ul className="tag">
            {tagsArray.map((tag, idx) => {
              return (
                <li key={idx}>
                  <Link href="#">{tag}</Link>
                </li>
              );
            })}
          </ul>
          <div className="portfolio-img">
            <div className="portfolioCard__portfolioImg__projectType">
              <span href="#" className="text-white">
                {typeOfApp}
              </span>
            </div>

            <div className="movingImageContainer">
              <img
                // src="projects/clothecommerce.sintechworks.png"
                src={imgLink}
                alt={imageAlt}
              />
            </div>
            <Link className="details-btn" href={projectLinkk}>
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
            <Link href={projectLinkk}>{projectName}.</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectBigSize;
