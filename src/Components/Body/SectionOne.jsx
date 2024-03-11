import { TypeAnimation } from "react-type-animation";
import "../../styles/section-one.css";

export default function SectionOne() {
  const textColor = "change-color";

  return (
    <>
      <svg
        className="graphic-element"
        width="594"
        height="440"
        viewBox="0 0 594 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_38_28)">
          <path
            d="M67.295 142.908C73.17 88.7828 121.81 49.6684 175.935 55.5434L402.334 80.1177C486.545 89.2584 547.402 164.935 538.261 249.147V249.147C529.12 333.358 453.444 394.215 369.232 385.074L142.833 360.5C88.7082 354.625 49.5938 305.985 55.4688 251.86L67.295 142.908Z"
            fill="#6A4DFF"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_38_28"
            x="0.884827"
            y="0.959351"
            width="592.285"
            height="439.024"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27"
              result="effect1_foregroundBlur_38_28"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="graphic-element red-element"
        width="185"
        height="185"
        viewBox="0 0 185 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3_481)">
          <path
            d="M34 77.907C34 53.6578 53.6578 34 77.907 34H107.093C131.342 34 151 53.6578 151 77.907V107.093C151 131.342 131.342 151 107.093 151H77.907C53.6578 151 34 131.342 34 107.093V77.907Z"
            fill="#F03A66"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_481"
            x="0"
            y="0"
            width="185"
            height="185"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="17"
              result="effect1_foregroundBlur_3_481"
            />
          </filter>
        </defs>
      </svg>

      <div className="section-one">
        <h1>
          <span>
            Ciao! <br />
          </span>{" "}
          My name is Carmela and <br />
          this is the portfolio of a <br />
          <TypeAnimation
            sequence={[
              "Visual designer.",
              2000,

              (el) => el.classList.add(textColor),

              "Front end developer.",
              2000,
              (el) => el.classList.remove(textColor),
            ]}
            className="section-one__typeanimation"
            repeat={Infinity}
          />
        </h1>
      </div>
    </>
  );
}
