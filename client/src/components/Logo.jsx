import styles from './Logo.module.css';

const LOGO_SVG_WIDTH = 112;
const LOGO_SVG_HEIGHT = 109;

function LogoSVG({ sizeRatio }) {
  const width = LOGO_SVG_WIDTH * sizeRatio;
  const height = LOGO_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      className={styles.logo_svg}
      width={width}
      zoomAndPan="magnify"
      viewBox="0 0 84 81.749997"
      height={height}
      preserveAspectRatio="xMidYMid meet"
      version="1.0">
      <defs>
        <clipPath id="f2040244fc">
          <path
            d="M 24.925781 36.886719 L 68.957031 36.886719 L 68.957031 80.917969 L 24.925781 80.917969 Z M 24.925781 36.886719 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="9e82b9174f">
          <path
            d="M 46.941406 36.886719 C 34.78125 36.886719 24.925781 46.742188 24.925781 58.902344 C 24.925781 71.0625 34.78125 80.917969 46.941406 80.917969 C 59.101562 80.917969 68.957031 71.0625 68.957031 58.902344 C 68.957031 46.742188 59.101562 36.886719 46.941406 36.886719 Z M 46.941406 36.886719 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="98a462a73a">
          <path
            d="M 44.3125 0 L 49.546875 0 L 49.546875 32.40625 L 44.3125 32.40625 Z M 44.3125 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="2fd2fc99d1">
          <path
            d="M 46.929688 0 C 45.484375 0 44.3125 7.253906 44.3125 16.199219 C 44.3125 25.148438 45.484375 32.402344 46.929688 32.402344 C 48.375 32.402344 49.546875 25.148438 49.546875 16.199219 C 49.546875 7.253906 48.375 0 46.929688 0 Z M 46.929688 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="3afca31730">
          <path
            d="M 60 8 L 73 8 L 73 37 L 60 37 Z M 60 8 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="61da62df61">
          <path
            d="M 69.171875 7.164062 L 74.09375 8.949219 L 63.953125 36.894531 L 59.03125 35.109375 Z M 69.171875 7.164062 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="9a5bfbc7d6">
          <path
            d="M 71.632812 8.058594 C 70.273438 7.566406 66.902344 13.417969 64.105469 21.132812 C 61.304688 28.847656 60.136719 35.5 61.496094 35.992188 C 62.855469 36.488281 66.226562 30.632812 69.023438 22.917969 C 71.824219 15.203125 72.992188 8.550781 71.632812 8.058594 Z M 71.632812 8.058594 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="b771fdf499">
          <path
            d="M 23 9 L 36 9 L 36 35 L 23 35 Z M 23 9 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="70ef283dcd">
          <path
            d="M 21.992188 10.636719 L 26.8125 8.59375 L 37.335938 33.421875 L 32.519531 35.464844 Z M 21.992188 10.636719 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="69ee3f97f9">
          <path
            d="M 24.402344 9.613281 C 23.070312 10.179688 24.347656 16.191406 27.253906 23.046875 C 30.160156 29.902344 33.59375 35.003906 34.925781 34.4375 C 36.257812 33.875 34.980469 27.859375 32.074219 21.003906 C 29.167969 14.148438 25.734375 9.050781 24.402344 9.613281 Z M 24.402344 9.613281 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="f1a87ef6b4">
          <path
            d="M 1 32 L 24 32 L 24 49 L 1 49 Z M 1 32 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="7e4dc6762e">
          <path
            d="M 0.128906 35.621094 L 4.046875 30.125 L 24.941406 45.011719 L 21.023438 50.511719 Z M 0.128906 35.621094 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="a581722d2b">
          <path
            d="M 2.089844 32.871094 C 1.007812 34.390625 4.804688 38.953125 10.570312 43.0625 C 16.335938 47.171875 21.886719 49.269531 22.96875 47.753906 C 24.050781 46.234375 20.253906 41.671875 14.488281 37.5625 C 8.722656 33.453125 3.167969 31.355469 2.089844 32.871094 Z M 2.089844 32.871094 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="3957a104f4">
          <path
            d="M 70 29 L 82 29 L 82 45 L 70 45 Z M 70 29 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="51d6007e23">
          <path
            d="M 79.4375 28.1875 L 83.65625 31.28125 L 73.167969 45.597656 L 68.945312 42.503906 Z M 79.4375 28.1875 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="6189a9cc5a">
          <path
            d="M 81.546875 29.734375 C 80.382812 28.878906 77.089844 31.390625 74.195312 35.339844 C 71.300781 39.289062 69.902344 43.183594 71.066406 44.039062 C 72.230469 44.890625 75.523438 42.382812 78.417969 38.433594 C 81.3125 34.484375 82.710938 30.589844 81.546875 29.734375 Z M 81.546875 29.734375 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#f2040244fc)">
        <g clip-path="url(#9e82b9174f)">
          <path
            d="M 24.925781 36.886719 L 68.957031 36.886719 L 68.957031 80.917969 L 24.925781 80.917969 Z M 24.925781 36.886719 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#98a462a73a)">
        <g clip-path="url(#2fd2fc99d1)">
          <path
            d="M 44.3125 0 L 49.546875 0 L 49.546875 32.40625 L 44.3125 32.40625 Z M 44.3125 0 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#3afca31730)">
        <g clip-path="url(#61da62df61)">
          <g clip-path="url(#9a5bfbc7d6)">
            <path
              d="M 69.171875 7.164062 L 74.09375 8.949219 L 63.953125 36.894531 L 59.03125 35.109375 Z M 69.171875 7.164062 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#b771fdf499)">
        <g clip-path="url(#70ef283dcd)">
          <g clip-path="url(#69ee3f97f9)">
            <path
              d="M 21.992188 10.636719 L 26.8125 8.59375 L 37.335938 33.421875 L 32.519531 35.464844 Z M 21.992188 10.636719 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#f1a87ef6b4)">
        <g clip-path="url(#7e4dc6762e)">
          <g clip-path="url(#a581722d2b)">
            <path
              d="M 0.128906 35.621094 L 4.046875 30.125 L 24.917969 44.996094 L 21 50.496094 Z M 0.128906 35.621094 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
      <g clip-path="url(#3957a104f4)">
        <g clip-path="url(#51d6007e23)">
          <g clip-path="url(#6189a9cc5a)">
            <path
              d="M 79.4375 28.1875 L 83.65625 31.28125 L 73.179688 45.578125 L 68.957031 42.484375 Z M 79.4375 28.1875 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LogoSVG;
