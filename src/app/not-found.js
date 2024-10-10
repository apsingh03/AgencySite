import React from "react";

import Link from "next/link";
import Footer2 from "@/components/Footer/Footer2";
import Header from "@/components/header/Header";

export default function NotFound() {
  return (
    <>
      <Header />

      <div className="error-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-wrapper">
                <div className="error-img mb-50">
                  <svg viewBox="0 0 490 248" xmlns="http://www.w3.org/2000/svg">
                    <path
                      opacity="0.1"
                      d="M253.052 161.758C382.243 161.758 486.974 157.16 486.974 151.49C486.974 145.819 382.243 141.222 253.052 141.222C123.86 141.222 19.1289 145.819 19.1289 151.49C19.1289 157.16 123.86 161.758 253.052 161.758Z"
                    />
                    <path
                      d="M74.6087 90.1353L74.3118 150.223C74.3056 151.252 73.4681 152.081 72.4432 152.074L61.9124 152.021C60.8844 152.015 60.0563 151.177 60.0625 150.151L60.3594 90.0634C60.3656 89.0347 61.2031 88.2062 62.228 88.2124L72.7588 88.2656C73.7837 88.2687 74.6149 89.1067 74.6087 90.1353Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask0_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={40}
                      y={117}
                      width={65}
                      height={16}
                    >
                      <path
                        d="M42.1661 117.589L102.218 118.184C103.246 118.196 104.07 119.038 104.058 120.063L103.953 130.6C103.941 131.629 103.1 132.453 102.075 132.442L42.0233 131.847C40.9952 131.836 40.1713 130.994 40.1827 129.968L40.2882 119.431C40.2965 118.406 41.1381 117.578 42.1661 117.589Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_745_6022)">
                      <path
                        d="M67.5023 86.1228L67.1641 154.171L76.8476 154.219L77.1858 86.1709L67.5023 86.1228Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask1_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={60}
                      y={88}
                      width={15}
                      height={65}
                    >
                      <path
                        d="M74.6048 90.1353L74.3079 150.223C74.3017 151.252 73.4642 152.081 72.4393 152.074L61.9085 152.021C60.8805 152.015 60.0524 151.177 60.0586 150.151L60.3555 90.0634C60.3617 89.0347 61.1992 88.2062 62.2241 88.2124L72.7549 88.2656C73.7798 88.2687 74.611 89.1067 74.6048 90.1353Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask1_745_6022)">
                      <path
                        d="M62.4935 89.9977L62.1935 150.242C62.1872 151.774 60.9373 153.012 59.403 153.006C57.8718 153 56.6344 151.749 56.6406 150.214L56.9406 89.9696C56.9469 88.4375 58.1968 87.1993 59.7311 87.2056C61.2654 87.215 62.4997 88.4625 62.4935 89.9977Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M60.1154 138.678L60.0859 144.606L74.3383 144.677L74.3678 138.749L60.1154 138.678Z"
                      fill="#2A313E"
                    />
                    <path d="M67.2443 138.711L67.2148 144.639L74.3395 144.674L74.3689 138.746L67.2443 138.711Z" />
                    <path d="M60.1154 138.677L60.0859 144.605L62.2265 144.616L62.2559 138.688L60.1154 138.677Z" />
                    <path
                      d="M60.3303 95.6114L60.3008 101.54L74.5532 101.61L74.5827 95.6821L60.3303 95.6114Z"
                      fill="#2A313E"
                    />
                    <path d="M67.4552 95.6471L67.4258 101.575L74.5504 101.611L74.5798 95.6825L67.4552 95.6471Z" />
                    <path d="M60.3303 95.6109L60.3008 101.539L62.4413 101.55L62.4708 95.6215L60.3303 95.6109Z" />
                    <path
                      d="M88.8977 90.2071L88.6009 150.295C88.5946 151.324 87.7572 152.152 86.7322 152.146L76.2015 152.093C75.1734 152.087 74.3453 151.249 74.3516 150.223L74.6485 90.1352C74.6547 89.1065 75.4922 88.278 76.5171 88.2842L87.0478 88.3374C88.0759 88.3405 88.904 89.1784 88.8977 90.2071Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask2_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={54}
                      y={117}
                      width={65}
                      height={16}
                    >
                      <path
                        d="M56.463 117.662L116.515 118.257C117.543 118.268 118.367 119.11 118.355 120.136L118.25 130.673C118.238 131.701 117.397 132.526 116.372 132.514L56.3202 131.92C55.2921 131.908 54.4682 131.066 54.4796 130.041L54.5851 119.503C54.5934 118.475 55.435 117.65 56.463 117.662Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_745_6022)">
                      <path
                        d="M81.7953 86.1951L81.457 154.244L91.1405 154.292L91.4788 86.2431L81.7953 86.1951Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask3_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={74}
                      y={88}
                      width={15}
                      height={65}
                    >
                      <path
                        d="M88.9017 90.2076L88.6048 150.296C88.5985 151.324 87.7611 152.153 86.7361 152.147L76.2054 152.093C75.1773 152.087 74.3493 151.249 74.3555 150.224L74.6524 90.1357C74.6586 89.107 75.4961 88.2784 76.521 88.2847L87.0517 88.3379C88.0798 88.341 88.9079 89.1789 88.9017 90.2076Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask3_745_6022)">
                      <path
                        d="M76.7872 90.0665L76.4872 150.311C76.481 151.843 75.2311 153.081 73.6999 153.075C72.1687 153.069 70.9313 151.818 70.9375 150.283L71.2375 90.0384C71.2438 88.5063 72.4937 87.2682 74.0249 87.2744C75.5592 87.2838 76.7966 88.5345 76.7872 90.0665Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M74.4084 138.746L74.3789 144.674L88.6313 144.745L88.6608 138.817L74.4084 138.746Z"
                      fill="#2A313E"
                    />
                    <path d="M81.5372 138.782L81.5078 144.71L88.6325 144.746L88.6619 138.818L81.5372 138.782Z" />
                    <path d="M74.4083 138.746L74.3789 144.674L76.5194 144.685L76.5488 138.757L74.4083 138.746Z" />
                    <path
                      d="M74.6193 95.6837L74.5898 101.612L88.8423 101.683L88.8717 95.7545L74.6193 95.6837Z"
                      fill="#2A313E"
                    />
                    <path d="M81.7443 95.7193L81.7148 101.647L88.8395 101.683L88.8689 95.7547L81.7443 95.7193Z" />
                    <path d="M74.6193 95.6832L74.5898 101.611L76.7304 101.622L76.7598 95.6938L74.6193 95.6832Z" />
                    <path
                      d="M103.062 90.276L102.765 150.364C102.759 151.393 101.921 152.221 100.896 152.215L90.3656 152.162C89.3375 152.156 88.5094 151.318 88.5157 150.292L88.8125 90.204C88.8188 89.1754 89.6562 88.3468 90.6812 88.3531L101.212 88.4062C102.237 88.4093 103.065 89.2473 103.062 90.276Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask4_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={68}
                      y={117}
                      width={65}
                      height={16}
                    >
                      <path
                        d="M70.6193 117.729L130.671 118.323C131.699 118.335 132.523 119.177 132.511 120.202L132.406 130.74C132.395 131.768 131.553 132.593 130.528 132.581L70.4764 131.987C69.4484 131.975 68.6245 131.133 68.6358 130.107L68.7414 119.57C68.7496 118.545 69.5912 117.72 70.6193 117.729Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask4_745_6022)">
                      <path
                        d="M95.9554 86.2654L95.6172 154.314L105.301 154.362L105.639 86.3135L95.9554 86.2654Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask5_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={88}
                      y={88}
                      width={16}
                      height={65}
                    >
                      <path
                        d="M103.058 90.276L102.761 150.364C102.755 151.393 101.917 152.221 100.892 152.215L90.3617 152.162C89.3336 152.156 88.5055 151.318 88.5118 150.292L88.8086 90.204C88.8149 89.1754 89.6523 88.3468 90.6773 88.3531L101.208 88.4062C102.233 88.4093 103.061 89.2473 103.058 90.276Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask5_745_6022)">
                      <path
                        d="M90.9466 90.1388L90.6466 150.383C90.6404 151.915 89.3904 153.153 87.8561 153.147C86.325 153.141 85.0875 151.89 85.0938 150.355L85.3938 90.1107C85.4 88.5786 86.65 87.3404 88.1842 87.3467C89.7154 87.3561 90.9529 88.6036 90.9466 90.1388Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M88.5685 138.818L88.5391 144.747L102.791 144.817L102.821 138.889L88.5685 138.818Z"
                      fill="#2A313E"
                    />
                    <path d="M95.6935 138.854L95.6641 144.782L102.789 144.818L102.818 138.889L95.6935 138.854Z" />
                    <path d="M88.5724 138.818L88.543 144.746L90.6835 144.757L90.7129 138.829L88.5724 138.818Z" />
                    <path
                      d="M88.7795 95.755L88.75 101.683L103.002 101.754L103.032 95.8259L88.7795 95.755Z"
                      fill="#2A313E"
                    />
                    <path d="M95.9084 95.7877L95.8789 101.716L103.004 101.751L103.033 95.8231L95.9084 95.7877Z" />
                    <path d="M88.7794 95.7545L88.75 101.683L90.8905 101.693L90.9199 95.7651L88.7794 95.7545Z" />
                    <path d="M111.441 121.37H43.1289V97.9486L113.569 3.19531H150.811V91.5608H171.879V121.37H150.811V152.033H111.441V121.37ZM117.188 91.5608V48.9758L85.9049 91.5608H117.188Z" />
                    <path d="M210.399 145.965C200.04 139.79 192.059 130.882 186.457 119.241C180.851 107.604 178.051 93.7621 178.051 77.7193C178.051 61.6795 180.816 47.8378 186.35 36.1973C191.884 24.5599 199.79 15.6176 210.077 9.36746C220.364 3.12353 232.532 0 246.579 0C260.625 0 272.787 3.12353 283.077 9.37058C293.361 15.6176 301.273 24.563 306.804 36.2004C312.338 47.8409 315.103 61.6826 315.103 77.7224C315.103 93.7653 312.3 107.607 306.697 119.244C301.092 130.885 293.111 139.793 282.755 145.968C272.396 152.143 260.337 155.229 246.575 155.229C232.814 155.229 220.755 152.14 210.399 145.965ZM268.709 108.808C273.955 101.429 276.583 91.2076 276.583 78.1445C276.583 64.9437 273.993 54.5445 268.815 46.9499C263.634 39.3583 256.222 35.5594 246.575 35.5594C236.926 35.5594 229.514 39.3583 224.336 46.9499C219.155 54.5445 216.568 64.9437 216.568 78.1445C216.568 91.2076 219.189 101.429 224.442 108.808C229.689 116.19 237.07 119.879 246.575 119.879C256.081 119.882 263.459 116.193 268.709 108.808Z" />
                    <path d="M389.586 121.37H321.273V97.9483L391.714 3.19189H428.956V91.5574H450.023V121.367H428.956V152.03H389.586V121.37ZM395.332 91.5605V48.9755L364.049 91.5605H395.332Z" />
                    <path
                      d="M292.442 127.362L233.336 128.021C232.324 128.034 231.495 127.221 231.483 126.208L231.367 115.837C231.355 114.824 232.167 113.995 233.18 113.983L292.286 113.323C293.299 113.31 294.127 114.123 294.139 115.136L294.255 125.507C294.264 126.521 293.455 127.349 292.442 127.362Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask6_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={113}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.451 127.038L233.359 128.353C232.346 128.376 231.509 127.573 231.486 126.56L231.255 116.19C231.231 115.177 232.034 114.339 233.046 114.316L292.139 113.001C293.151 112.977 293.988 113.781 294.012 114.794L294.243 125.164C294.264 126.177 293.464 127.014 292.451 127.038Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask6_745_6022)">
                      <path
                        d="M296.262 120.306L229.328 121.048L229.434 130.585L296.368 129.842L296.262 120.306Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask7_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={113}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.442 127.361L233.336 128.021C232.324 128.033 231.495 127.22 231.483 126.207L231.367 115.836C231.355 114.823 232.167 113.995 233.18 113.982L292.286 113.322C293.299 113.31 294.127 114.123 294.139 115.136L294.255 125.507C294.264 126.52 293.455 127.349 292.442 127.361Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask7_745_6022)">
                      <path
                        d="M292.385 115.433L233.126 116.093C231.616 116.109 230.382 114.899 230.363 113.392C230.348 111.881 231.557 110.646 233.063 110.628L292.323 109.968C293.832 109.952 295.066 111.162 295.085 112.669C295.104 114.18 293.895 115.415 292.385 115.433Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M244.459 113.863L238.625 113.928L238.781 127.962L244.614 127.898L244.459 113.863Z"
                      fill="#2A313E"
                    />
                    <path d="M244.537 120.879L238.703 120.943L238.781 127.962L244.615 127.897L244.537 120.879Z" />
                    <path d="M244.458 113.863L238.625 113.928L238.648 116.035L244.482 115.97L244.458 113.863Z" />
                    <path
                      d="M286.818 113.393L280.984 113.458L281.14 127.492L286.974 127.427L286.818 113.393Z"
                      fill="#2A313E"
                    />
                    <path d="M286.896 120.408L281.062 120.473L281.141 127.492L286.974 127.427L286.896 120.408Z" />
                    <path d="M286.818 113.392L280.984 113.457L281.008 115.564L286.841 115.5L286.818 113.392Z" />
                    <path
                      d="M292.599 141.438L233.492 142.097C232.48 142.11 231.652 141.297 231.639 140.284L231.524 129.913C231.511 128.9 232.324 128.071 233.336 128.059L292.442 127.399C293.455 127.387 294.283 128.199 294.295 129.213L294.411 139.584C294.42 140.597 293.611 141.428 292.599 141.438Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask8_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={127}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.6 141.115L233.507 142.428C232.495 142.452 231.658 141.648 231.634 140.635L231.403 130.265C231.379 129.253 232.183 128.415 233.195 128.391L292.288 127.078C293.3 127.054 294.137 127.858 294.161 128.871L294.392 139.241C294.412 140.254 293.612 141.094 292.6 141.115Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask8_745_6022)">
                      <path
                        d="M296.414 134.382L229.48 135.125L229.586 144.661L296.52 143.918L296.414 134.382Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask9_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={127}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.595 141.438L233.488 142.097C232.476 142.11 231.648 141.297 231.635 140.284L231.52 129.913C231.507 128.9 232.32 128.071 233.332 128.059L292.439 127.399C293.451 127.387 294.279 128.199 294.292 129.213L294.407 139.584C294.417 140.597 293.607 141.428 292.595 141.438Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask9_745_6022)">
                      <path
                        d="M292.538 129.509L233.278 130.169C231.769 130.185 230.535 128.975 230.516 127.468C230.5 125.958 231.709 124.723 233.216 124.704L292.475 124.044C293.984 124.028 295.219 125.238 295.238 126.746C295.256 128.256 294.047 129.491 292.538 129.509Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M244.615 127.939L238.781 128.004L238.937 142.038L244.77 141.973L244.615 127.939Z"
                      fill="#2A313E"
                    />
                    <path d="M244.689 134.954L238.855 135.019L238.933 142.038L244.767 141.973L244.689 134.954Z" />
                    <path d="M244.615 127.939L238.781 128.003L238.805 130.111L244.638 130.046L244.615 127.939Z" />
                    <path
                      d="M286.974 127.468L281.141 127.533L281.296 141.567L287.13 141.503L286.974 127.468Z"
                      fill="#2A313E"
                    />
                    <path d="M287.052 134.484L281.219 134.548L281.297 141.567L287.13 141.502L287.052 134.484Z" />
                    <path d="M286.974 127.468L281.141 127.533L281.164 129.64L286.997 129.575L286.974 127.468Z" />
                    <path
                      d="M292.755 155.384L233.648 156.043C232.636 156.056 231.808 155.243 231.795 154.23L231.68 143.859C231.667 142.846 232.48 142.017 233.492 142.005L292.599 141.345C293.611 141.332 294.439 142.145 294.452 143.158L294.567 153.529C294.577 154.542 293.764 155.371 292.755 155.384Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask10_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={141}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.756 155.057L233.663 156.372C232.651 156.396 231.814 155.592 231.79 154.579L231.559 144.209C231.536 143.196 232.339 142.359 233.351 142.335L292.444 141.02C293.456 140.997 294.293 141.8 294.317 142.813L294.548 153.183C294.568 154.196 293.765 155.034 292.756 155.057Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask10_745_6022)">
                      <path
                        d="M296.566 148.326L229.633 149.068L229.739 158.605L296.672 157.862L296.566 148.326Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask11_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={231}
                      y={141}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M292.751 155.384L233.645 156.043C232.632 156.056 231.804 155.243 231.792 154.23L231.676 143.859C231.663 142.846 232.476 142.017 233.488 142.005L292.595 141.345C293.607 141.332 294.435 142.145 294.448 143.158L294.563 153.529C294.573 154.542 293.76 155.371 292.751 155.384Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask11_745_6022)">
                      <path
                        d="M292.698 143.455L233.438 144.115C231.929 144.131 230.695 142.921 230.676 141.414C230.66 139.903 231.87 138.668 233.376 138.65L292.635 137.99C294.145 137.974 295.379 139.184 295.398 140.691C295.413 142.202 294.204 143.437 292.698 143.455Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M244.763 141.884L238.93 141.949L239.085 155.983L244.919 155.918L244.763 141.884Z"
                      fill="#2A313E"
                    />
                    <path d="M244.841 148.899L239.008 148.964L239.086 155.983L244.919 155.918L244.841 148.899Z" />
                    <path d="M244.763 141.884L238.93 141.948L238.953 144.055L244.787 143.991L244.763 141.884Z" />
                    <path
                      d="M287.126 141.413L281.293 141.478L281.449 155.512L287.282 155.447L287.126 141.413Z"
                      fill="#2A313E"
                    />
                    <path d="M287.201 148.428L281.367 148.493L281.445 155.512L287.279 155.447L287.201 148.428Z" />
                    <path d="M287.126 141.413L281.293 141.478L281.316 143.585L287.15 143.52L287.126 141.413Z" />
                    <path
                      d="M414.007 90.691L414.667 149.832C414.679 150.845 413.867 151.673 412.854 151.686L402.489 151.801C401.477 151.814 400.649 151.001 400.636 149.988L399.977 90.8473C399.964 89.8343 400.777 89.0057 401.789 88.9932L412.154 88.8775C413.167 88.8681 413.995 89.6811 414.007 90.691Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask12_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={380}
                      y={117}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M382.492 118.719L441.585 117.405C442.597 117.381 443.434 118.185 443.458 119.198L443.689 129.567C443.713 130.58 442.909 131.418 441.897 131.442L382.804 132.756C381.792 132.78 380.955 131.976 380.931 130.963L380.701 120.594C380.68 119.581 381.483 118.743 382.492 118.719Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask12_745_6022)">
                      <path
                        d="M406.963 86.8789L407.707 153.852L417.236 153.746L416.492 86.7732L406.963 86.8789Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask13_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={399}
                      y={88}
                      width={16}
                      height={64}
                    >
                      <path
                        d="M414.011 90.6905L414.671 149.831C414.683 150.844 413.871 151.673 412.858 151.685L402.493 151.801C401.481 151.813 400.652 151.001 400.64 149.987L399.981 90.8468C399.968 89.8338 400.781 89.0052 401.793 88.9927L412.158 88.877C413.171 88.8677 413.999 89.6806 414.011 90.6905Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask13_745_6022)">
                      <path
                        d="M402.083 90.7471L402.743 150.041C402.758 151.551 401.549 152.786 400.043 152.805C398.534 152.821 397.299 151.611 397.281 150.103L396.621 90.8096C396.606 89.2994 397.815 88.0644 399.321 88.0456C400.83 88.0269 402.068 89.2369 402.083 90.7471Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M400.521 138.712L400.586 144.549L414.612 144.393L414.547 138.556L400.521 138.712Z"
                      fill="#2A313E"
                    />
                    <path d="M407.537 138.635L407.602 144.472L414.616 144.394L414.551 138.557L407.537 138.635Z" />
                    <path d="M400.521 138.712L400.586 144.549L402.692 144.526L402.627 138.689L400.521 138.712Z" />
                    <path
                      d="M400.052 96.3248L400.117 102.162L414.143 102.006L414.078 96.1693L400.052 96.3248Z"
                      fill="#2A313E"
                    />
                    <path d="M407.064 96.2471L407.129 102.084L414.143 102.006L414.079 96.1692L407.064 96.2471Z" />
                    <path d="M400.052 96.3267L400.117 102.164L402.223 102.14L402.158 96.3033L400.052 96.3267Z" />
                    <path
                      d="M428.074 90.5347L428.733 149.675C428.746 150.688 427.933 151.517 426.921 151.53L416.555 151.645C415.543 151.658 414.715 150.845 414.702 149.832L414.043 90.6911C414.031 89.678 414.843 88.8495 415.856 88.837L426.221 88.7213C427.233 88.7119 428.061 89.5248 428.074 90.5347Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask14_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={394}
                      y={117}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M396.562 118.564L455.655 117.249C456.667 117.225 457.504 118.029 457.528 119.042L457.759 129.412C457.783 130.425 456.98 131.262 455.968 131.286L396.875 132.601C395.863 132.624 395.026 131.821 395.002 130.808L394.771 120.438C394.75 119.425 395.553 118.587 396.562 118.564Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask14_745_6022)">
                      <path
                        d="M421.03 86.7232L421.773 153.696L431.302 153.59L430.559 86.6174L421.03 86.7232Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask15_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={414}
                      y={88}
                      width={15}
                      height={64}
                    >
                      <path
                        d="M428.078 90.5347L428.737 149.675C428.749 150.688 427.937 151.517 426.924 151.53L416.559 151.645C415.547 151.658 414.719 150.845 414.706 149.832L414.047 90.6911C414.035 89.678 414.847 88.8495 415.859 88.837L426.225 88.7213C427.237 88.7119 428.065 89.5248 428.078 90.5347Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask15_745_6022)">
                      <path
                        d="M416.154 90.5913L416.813 149.885C416.829 151.395 415.619 152.63 414.113 152.649C412.604 152.665 411.37 151.455 411.351 149.948L410.692 90.6538C410.676 89.1437 411.885 87.9086 413.391 87.8899C414.901 87.8711 416.138 89.0811 416.154 90.5913Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M414.588 138.556L414.652 144.393L428.678 144.237L428.614 138.4L414.588 138.556Z"
                      fill="#2A313E"
                    />
                    <path d="M421.603 138.479L421.668 144.316L428.683 144.238L428.618 138.401L421.603 138.479Z" />
                    <path d="M414.588 138.556L414.652 144.393L416.758 144.37L416.694 138.533L414.588 138.556Z" />
                    <path
                      d="M414.119 96.169L414.184 102.006L428.21 101.85L428.145 96.0135L414.119 96.169Z"
                      fill="#2A313E"
                    />
                    <path d="M421.131 96.0913L421.195 101.928L428.21 101.85L428.145 96.0134L421.131 96.0913Z" />
                    <path d="M414.119 96.1704L414.184 102.007L416.29 101.984L416.225 96.1471L414.119 96.1704Z" />
                    <path
                      d="M442.011 90.3815L442.671 149.522C442.683 150.535 441.871 151.364 440.858 151.376L430.493 151.492C429.481 151.504 428.652 150.692 428.64 149.678L427.981 90.5378C427.968 89.5248 428.781 88.6962 429.793 88.6837L440.158 88.568C441.171 88.5555 441.999 89.3684 442.011 90.3815Z"
                      fill="#F7941D"
                    />
                    <mask
                      id="mask16_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={408}
                      y={117}
                      width={64}
                      height={16}
                    >
                      <path
                        d="M410.5 118.408L469.593 117.094C470.605 117.07 471.442 117.874 471.466 118.886L471.697 129.256C471.72 130.269 470.917 131.107 469.905 131.131L410.812 132.445C409.8 132.469 408.963 131.665 408.939 130.652L408.708 120.282C408.685 119.27 409.488 118.432 410.5 118.408Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask16_745_6022)">
                      <path
                        d="M434.967 86.5679L435.711 153.541L445.24 153.435L444.496 86.4622L434.967 86.5679Z"
                        fill="#F26522"
                      />
                    </g>
                    <mask
                      id="mask17_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={427}
                      y={88}
                      width={16}
                      height={64}
                    >
                      <path
                        d="M442.011 90.381L442.671 149.522C442.683 150.535 441.871 151.363 440.858 151.376L430.493 151.491C429.481 151.504 428.652 150.691 428.64 149.678L427.981 90.5373C427.968 89.5243 428.781 88.6957 429.793 88.6832L440.158 88.5675C441.171 88.555 441.999 89.368 442.011 90.381Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask17_745_6022)">
                      <path
                        d="M430.087 90.4345L430.747 149.728C430.762 151.239 429.553 152.474 428.047 152.492C426.538 152.508 425.303 151.298 425.284 149.791L424.625 90.497C424.61 88.9868 425.819 87.7518 427.325 87.7331C428.834 87.7174 430.072 88.9274 430.087 90.4345Z"
                        fill="#F9AB5D"
                      />
                    </g>
                    <path
                      d="M428.525 138.4L428.59 144.237L442.616 144.081L442.551 138.244L428.525 138.4Z"
                      fill="#2A313E"
                    />
                    <path d="M435.537 138.323L435.602 144.16L442.616 144.082L442.551 138.245L435.537 138.323Z" />
                    <path d="M428.529 138.403L428.594 144.24L430.7 144.216L430.635 138.38L428.529 138.403Z" />
                    <path
                      d="M428.056 96.0142L428.121 101.851L442.147 101.696L442.082 95.8587L428.056 96.0142Z"
                      fill="#2A313E"
                    />
                    <path d="M435.068 95.9365L435.133 101.773L442.147 101.696L442.083 95.8586L435.068 95.9365Z" />
                    <path d="M428.056 96.0156L428.121 101.853L430.227 101.829L430.162 95.9923L428.056 96.0156Z" />
                    <path d="M25.8268 231.776C12.9994 231.776 2.56237 221.333 2.56237 208.498C2.56237 195.663 12.9994 185.22 25.8268 185.22H299.735C308.522 185.22 315.672 178.066 315.672 169.274V167.717H339.274C347.829 167.717 354.792 160.751 354.792 152.19V88.0466C354.792 79.689 361.588 72.8886 369.941 72.8886H414.536C417.476 72.8886 419.87 75.2836 419.87 78.2258V78.4759H413.314C409.43 78.4759 406.273 81.6369 406.273 85.5234V88.9346H408.836V85.5234C408.836 83.0502 410.845 81.0398 413.317 81.0398H419.873V88.9314H422.435V81.0398H429.329C431.8 81.0398 433.81 83.0502 433.81 85.5234V88.6281H436.372V85.5234C436.372 81.6369 433.213 78.4759 429.332 78.4759H422.438V78.2258C422.438 73.8703 418.895 70.3247 414.542 70.3247H369.947C360.182 70.3247 352.236 78.2727 352.236 88.0466V152.19C352.236 159.337 346.423 165.153 339.28 165.153H315.678V145.999C315.678 139.843 311.341 134.687 305.563 133.417V125.954C305.563 121.899 302.263 118.597 298.21 118.597H294.198V121.161H298.21C300.851 121.161 303 123.312 303 125.954V133.12C302.935 133.12 302.869 133.114 302.801 133.114H294.354V135.678H302.797C302.863 135.678 302.932 135.681 302.997 135.684V143.429C302.997 145.452 301.354 147.097 299.332 147.097H294.507V149.66H299.332C302.766 149.66 305.56 146.865 305.56 143.429V136.056C309.91 137.266 313.112 141.262 313.112 145.996V169.268C313.112 176.647 307.113 182.653 299.735 182.653H130.406V97.7111C130.406 88.7657 123.134 81.49 114.194 81.49H101.229C97.4201 81.49 94.3234 84.5885 94.3234 88.3999H96.8858C96.8858 86.0018 98.8357 84.0538 101.229 84.0538H114.194C121.722 84.0538 127.844 90.1821 127.844 97.7111V182.659H25.8268C11.5838 182.656 0 194.25 0 208.498C0 222.746 11.5838 234.34 25.8268 234.34H479.901V231.776H25.8268Z" />
                    <path
                      d="M472.501 193.143H469.848V208.41H472.501V193.143Z"
                      fill="#2A313E"
                    />
                    <path d="M477.295 208.41H465.059V210.73H477.295V208.41Z" />
                    <path d="M477.135 190.819H464.898V193.139H477.135V190.819Z" />
                    <path
                      d="M488.833 213.056H453.537C452.897 213.056 452.375 212.537 452.375 211.893C452.375 211.252 452.894 210.73 453.537 210.73H488.836C489.476 210.73 489.998 211.249 489.998 211.893C489.995 212.534 489.476 213.056 488.833 213.056Z"
                      fill="#DA927E"
                    />
                    <path
                      d="M488.833 248H453.537C452.897 248 452.375 247.481 452.375 246.837C452.375 246.196 452.894 245.674 453.537 245.674H488.836C489.476 245.674 489.998 246.193 489.998 246.837C489.995 247.478 489.476 248 488.833 248Z"
                      fill="#DA927E"
                    />
                    <path
                      d="M487.316 213.056H454.715V245.677H487.316V213.056Z"
                      fill="#995042"
                    />
                    <path
                      d="M481.768 190.82H460.269C459.638 190.82 459.129 190.307 459.129 189.678V185.539C459.129 184.907 459.641 184.397 460.269 184.397H481.768C482.4 184.397 482.909 184.91 482.909 185.539V189.678C482.909 190.31 482.4 190.82 481.768 190.82Z"
                      fill="#F26522"
                    />
                    <mask
                      id="mask18_745_6022"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x={459}
                      y={184}
                      width={24}
                      height={7}
                    >
                      <path
                        d="M481.772 190.82H460.273C459.642 190.82 459.133 190.307 459.133 189.678V185.539C459.133 184.907 459.645 184.397 460.273 184.397H481.772C482.404 184.397 482.913 184.91 482.913 185.539V189.678C482.913 190.31 482.404 190.82 481.772 190.82Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask18_745_6022)">
                      <path
                        d="M483.833 186.692H459.597C458.5 186.692 457.609 185.801 457.609 184.704C457.609 183.606 458.5 182.715 459.597 182.715H483.833C484.93 182.715 485.82 183.606 485.82 184.704C485.82 185.801 484.93 186.692 483.833 186.692Z"
                        fill="#F7941D"
                      />
                    </g>
                    <path
                      d="M458.02 213.056V216.098H478.722V243.172H458.02V245.677H487.315V213.056H458.02Z"
                      fill="#754436"
                    />
                    <path
                      d="M461.128 213.057H459.719V245.677H461.128V213.057Z"
                      fill="#DA927E"
                    />
                    <path
                      d="M468.183 213.057H466.773V245.677H468.183V213.057Z"
                      fill="#DA927E"
                    />
                    <path
                      d="M475.429 213.057H474.02V245.677H475.429V213.057Z"
                      fill="#DA927E"
                    />
                    <path
                      d="M482.484 213.057H481.074V245.677H482.484V213.057Z"
                      fill="#DA927E"
                    />
                  </svg>
                </div>
                <div className="error-content">
                  <h1>Opps, Page Not Found</h1>
                  <p>
                    Something went wrong, web page that is displayed to the user
                    when the server cannot find the requested page.
                  </p>
                  <div className="back-btn">
                    <Link href="/" className="primary-btn3 btn-hover">
                      <i className="bi bi-house-door" />
                      Back To Home
                      <span style={{ top: "50.5px", left: "83.75px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}
