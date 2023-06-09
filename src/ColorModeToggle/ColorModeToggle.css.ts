import { createVar, style } from "@vanilla-extract/css";
import { darkMode } from "../sprinkles.css";
import { vars } from "../themes.css";

const toggleBrightness = createVar();
const toggleContent = createVar();
const focusRingColor = createVar();

export const root = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: 24,
  height: 42,
  width: 42,
  vars: {
    [toggleBrightness]: "0",
    [toggleContent]: '"☀️"',
    [focusRingColor]: vars.palette.pink400,
  },
  ":focus-visible": {
    boxShadow: `0px 0px 0px 3px ${focusRingColor}`,
  },
  "::before": {
    content: toggleContent,
    filter: `contrast(0) brightness(${toggleBrightness})`,
  },
  selectors: {
    [`.${darkMode} &`]: {
      vars: {
        [toggleBrightness]: "10",
        [toggleContent]: '"🌙"',
        [focusRingColor]: vars.palette.pink500,
      },
    },
  },
});
