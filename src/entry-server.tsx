import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "./App";
import { HeadProvider } from "react-head";

const headTags: React.ReactElement<unknown>[] = [];

export function render() {
  const head = ReactDOMServer.renderToString(
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Shrikhand&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=DM+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://www.monolisa.dev/api/fonts/initial"
        rel="stylesheet"
      />
      <>{headTags}</>
    </>
  );
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HeadProvider headTags={headTags}>
        <App />
      </HeadProvider>
    </React.StrictMode>
  );
  return { html, head };
}
