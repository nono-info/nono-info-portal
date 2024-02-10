import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import Header from "@/components/header/header";

type Og = {
  url: string;
  type: string;
  image: string;
  twitterCard: string;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props?: { title?: string; description?: string; og?: Og },
    ): Response;
  }
}

export default jsxRenderer(({ children, title, description, og }) => {
  return (
    <html lang="ja">
      <head prefix="og: http://ogp.me/ns#">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <style>
          {`
            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            :where([hidden]:not([hidden="until-found"])) {
              display: none !important;
            }
            :where(html) {
              -webkit-text-size-adjust: none;
              color-scheme: dark light;
              tab-size: 2;
            }
            @media (prefers-reduced-motion: no-preference) {
              :where(html:focus-within) {
                scroll-behavior: smooth;
              }
            }
            :where(body) {
              line-height: 1.5;
              font-family: system-ui, sans-serif;
              -webkit-font-smoothing: antialiased;
            }
            :where(button) {
              all: unset;
            }
            :where(input, button, textarea, select) {
              font: inherit;
              color: inherit;
            }
            :where(textarea) {
              resize: vertical;
              resize: block;
            }
            :where(button, label, select, summary, [role="button"], [role="option"]) {
              cursor: pointer;
            }
            :where(:disabled) {
              cursor: not-allowed;
            }
            :where(label:has(> input:disabled), label:has(+ input:disabled)) {
              cursor: not-allowed;
            }
            :where(a) {
              color: inherit;
              text-decoration: none;
            }
            :where(ul, ol) {
              list-style: none;
            }
            :where(img, svg, video, canvas, audio, iframe, embed, object) {
              display: block;
            }
            :where(img, picture, svg, video) {
              max-inline-size: 100%;
              block-size: auto;
            }
            :where(p, h1, h2, h3, h4, h5, h6) {
              font-size: inherit;
              overflow-wrap: break-word;
            }
            :where(h1, h2, h3) {
              line-height: calc(1em + 0.5rem);
              text-wrap: balance;
            }
            :where(hr) {
              border: none;
              border-block-start: 1px solid;
              color: inherit;
              block-size: 0;
              overflow: visible;
            }
            :where(:focus-visible) {
              outline: 3px solid CanvasText;
              box-shadow: 0 0 0 5px Canvas;
              outline-offset: 1px;
            }
            :where(:focus-visible, :target) {
              scroll-margin-block: 8vh;
            }
            :where(.visually-hidden:not(:focus-within, :active)) {
              clip-path: inset(50%) !important;
              height: 1px !important;
              width: 1px !important;
              overflow: hidden !important;
              position: absolute !important;
              white-space: nowrap !important;
              border: 0 !important;
            }

            html {
              color: rgb(231 229 228);
              background-color: rgb(28 25 23);

              @media (prefers-color-scheme: light) {
                color: rgb(28 25 23);
                background-color: rgb(231 229 228);
              }
            }

            a:hover {
              cursor: pointer;
            }

            .skeleton {
              width: 100%;
              height: 100%;
              background-color: rgb(225 224 223);

              background: linear-gradient(
                102deg,
                rgb(225 224 223) 25%,
                rgb(214 211 209) 37%,
                rgb(225 224 223) 63%
              );
              animation: skeletonLoading 1.4s ease infinite;
              background-size: 400% 100%;

              @media (prefers-color-scheme: dark) {
                background-color: rgb(31 28 26);
                background: linear-gradient(
                  102deg,
                  rgb(31 28 26) 25%,
                  rgb(50 47 45) 37%,
                  rgb(31 28 26) 63%
                );
                background-size: 400% 100%;
              }
            }

            @keyframes skeletonLoading {
              from {
                background-position: 100% 50%;
              }
              to {
                background-position: 0 50%;
              }
            }

            a[href^="http"]::after,
            a[href^="//"]::after
            {
              content: "";
              display: inline-block;
              width: 0.7em;
              height: 0.7em;
              margin: 0 0 0 0.3em;
              vertical-align: middle;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2378716c' viewBox='0 0 512 512'%3E%3Cpath d='M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'/%3E%3C/svg%3E");
            }
          `}
        </style>
        <link href="/static/styles/uno.css" rel="stylesheet" />
        <Script src="/app/client.ts" />
        {og ? (
          <>
            <meta property="og:url" content={og.url} />
            <meta property="og:type" content={og.type} />
            <meta property="og:image" content={og.image} />
            <meta name="twitter:card" content={og.twitterCard} />
          </>
        ) : (
          <>
            <meta property="og:url" content="https://nonoinfo.com/" />
            <meta property="og:type" content="article" />
            <meta property="og:image" content="" />
            <meta name="twitter:card" content="summary" />
          </>
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="ののinfo" />
        <meta name="twitter:site" content="@NONO_info0827" />
        <Style />
      </head>
      <body>
        <Header />
        <main class="pl-40 pr-4">{children}</main>
      </body>
    </html>
  );
});
