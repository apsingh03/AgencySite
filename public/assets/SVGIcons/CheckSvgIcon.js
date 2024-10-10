import React from "react";

const CheckSvgIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      aria-hidden = {true}
      className="iconify iconify--twemoji"
      viewBox="0 0 36 36"
    >
      <path
        fill="#77B255"
        d="M36 32a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h28a4 4 0 014 4v28z"
      ></path>
      <path
        fill="#FFF"
        d="M29.28 6.362a2.502 2.502 0 00-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 10-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 00-.737-3.458z"
      ></path>
    </svg>
  );
};

export default CheckSvgIcon;