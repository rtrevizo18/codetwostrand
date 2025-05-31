const MAG_GLASS_SVG_WIDTH = 16;
const MAG_GLASS_SVG_HEIGHT = 16;

function MagGlassSVG({ sizeRatio = 1.0 }) {
  const width = MAG_GLASS_SVG_WIDTH * sizeRatio;
  const height = MAG_GLASS_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

const DESKTOP_SVG_WIDTH = 16;
const DESKTOP_SVG_HEIGHT = 16;

function DesktopSVG({ sizeRatio = 1.0 }) {
  const width = DESKTOP_SVG_WIDTH * sizeRatio;
  const height = DESKTOP_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-pc-display"
      viewBox="0 0 16 16">
      <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
    </svg>
  );
}

const CODE_SVG_WIDTH = 16;
const CODE_SVG_HEIGHT = 16;

function CodeSVG({ sizeRatio = 1.0 }) {
  const width = CODE_SVG_WIDTH * sizeRatio;
  const height = CODE_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-code-slash"
      viewBox="0 0 16 16">
      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
    </svg>
  );
}

const LIGHTBULB_SVG_WIDTH = 16;
const LIGHTBULB_SVG_HEIGHT = 16;

function LightbulbSVG({ sizeRatio = 1.0 }) {
  const width = LIGHTBULB_SVG_WIDTH * sizeRatio;
  const height = LIGHTBULB_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-lightbulb"
      viewBox="0 0 16 16">
      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
    </svg>
  );
}

const PERSON_SVG_WIDTH = 16;
const PERSON_SVG_HEIGHT = 16;

function PersonSVG({ sizeRatio = 1.0 }) {
  const width = PERSON_SVG_WIDTH * sizeRatio;
  const height = PERSON_SVG_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-person-raised-hand"
      viewBox="0 0 16 16">
      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  );
}

export default { MagGlassSVG, DesktopSVG, CodeSVG, LightbulbSVG, PersonSVG };
