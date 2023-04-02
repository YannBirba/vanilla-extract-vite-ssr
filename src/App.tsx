import { Title, Meta } from "react-head";
import {
  ColorModeProvider,
  ColorModeToggle,
} from "./ColorModeToggle/ColorModeToggle";
import "./App.css";

const pageTitle = "vanilla-extract — Zero-runtime Stylesheets-in-TypeScript.";
const description = "Zero-runtime Stylesheets-in-TypeScript.";

export const App = () => {
  return (
    <ColorModeProvider>
      <Title>{pageTitle}</Title>
      <Meta property="og:title" content={pageTitle} />
      <Meta name="twitter:title" content={pageTitle} />
      <Meta name="description" content={description} />
      <Meta property="og:description" content={description} />
      <Meta name="twitter:description" content={description} />
      <ColorModeToggle />
      <p>Hello world!</p>
    </ColorModeProvider>
  );
};
