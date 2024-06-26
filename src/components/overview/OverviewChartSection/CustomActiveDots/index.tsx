import { useEffect } from "react";

const CustomActiveDots = (props) => {
  const { cx, cy, value, setActiveDotPos } = props;

  useEffect(() => {
    setActiveDotPos({ x: cx, y: cy });
  }, []);

  return (
    <svg
      x={cx - 37}
      y={cy - 65}
      width="74"
      height="79"
      viewBox="0 0 74 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.16"
        cx="37"
        cy="65"
        r="13"
        stroke="#3751FF"
        strokeWidth="2"
      />
      <g filter="url(#filter0_d_584_172)">
        <circle cx="37" cy="65" r="7" fill="white" />
        <circle cx="37" cy="65" r="5" stroke="#3751FF" strokeWidth="4" />
      </g>
      <g filter="url(#filter1_d_584_172)">
        <mask
          id="path-4-outside-1_584_172"
          maskUnits="userSpaceOnUse"
          x="4"
          y="2.99997"
          width="66"
          height="38"
          fill="black"
        >
          <rect fill="white" x="4" y="2.99997" width="66" height="38" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 3.99997H65C67.2091 3.99997 69 5.79083 69 7.99997V30C69 32.2091 67.2091 34 65 34L44 34L37.2603 39.7768C37.1105 39.9052 36.8895 39.9052 36.7397 39.7768L30 34L9 34C6.79086 34 5 32.2091 5 30V7.99997C5 5.79083 6.79086 3.99997 9 3.99997Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 3.99997H65C67.2091 3.99997 69 5.79083 69 7.99997V30C69 32.2091 67.2091 34 65 34L44 34L37.2603 39.7768C37.1105 39.9052 36.8895 39.9052 36.7397 39.7768L30 34L9 34C6.79086 34 5 32.2091 5 30V7.99997C5 5.79083 6.79086 3.99997 9 3.99997Z"
          fill="white"
        />
        <path
          d="M65 34V34.5V34ZM44 34V33.5H43.815L43.6746 33.6203L44 34ZM37.2603 39.7768L36.9349 39.3972L36.9349 39.3972L37.2603 39.7768ZM36.7397 39.7768L37.0651 39.3972L37.0651 39.3972L36.7397 39.7768ZM30 34L30.3254 33.6203L30.185 33.5H30V34ZM9 34V34.5V34ZM65 3.49997H9V4.49997H65V3.49997ZM69.5 7.99997C69.5 5.51469 67.4853 3.49997 65 3.49997V4.49997C66.933 4.49997 68.5 6.06697 68.5 7.99997H69.5ZM69.5 30V7.99997H68.5V30H69.5ZM65 34.5C67.4853 34.5 69.5 32.4853 69.5 30H68.5C68.5 31.933 66.933 33.5 65 33.5V34.5ZM44 34.5L65 34.5V33.5L44 33.5V34.5ZM43.6746 33.6203L36.9349 39.3972L37.5857 40.1565L44.3254 34.3796L43.6746 33.6203ZM36.9349 39.3972C36.9724 39.3651 37.0276 39.3651 37.0651 39.3972L36.4143 40.1565C36.7513 40.4454 37.2487 40.4454 37.5857 40.1565L36.9349 39.3972ZM37.0651 39.3972L30.3254 33.6203L29.6746 34.3796L36.4143 40.1565L37.0651 39.3972ZM9 34.5L30 34.5V33.5L9 33.5V34.5ZM4.5 30C4.5 32.4853 6.51472 34.5 9 34.5V33.5C7.067 33.5 5.5 31.933 5.5 30H4.5ZM4.5 7.99997V30H5.5V7.99997H4.5ZM9 3.49997C6.51472 3.49997 4.5 5.51469 4.5 7.99997H5.5C5.5 6.06697 7.067 4.49997 9 4.49997V3.49997Z"
          fill="#DFE0EB"
          mask="url(#path-4-outside-1_584_172)"
        />
      </g>
      <text
        textAnchor="middle"
        dy={26}
        dx={36}
        fontSize={14}
        fill="#252733"
        fontWeight="bold"
      >
        {value[1]}
      </text>

      <defs>
        <filter
          id="filter0_d_584_172"
          x="28"
          y="57"
          width="18"
          height="18"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.215686 0 0 0 0 0.317647 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_584_172"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_584_172"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_584_172"
          x="0.5"
          y="0.499969"
          width="73"
          height="44.8732"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_584_172"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_584_172"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CustomActiveDots;
