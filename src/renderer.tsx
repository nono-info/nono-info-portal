import "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Style } from "hono/css";
import Header from "./components/header/header";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title?: string }): Response;
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html lang="ja">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/static/style.css" rel="stylesheet" />
          <script src="https://cdn.twind.style" crossorigin="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Noto+Sans+JP:wght@100..900&family=BIZ+UDGothic:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js" />
          ) : (
            <script type="module" src="/src/client.ts" />
          )}
          <title>{title}</title>
          <Style />
        </head>
        <body>
          <Header />
          <main class="pl-40 pr-4">{children}</main>
        </body>
      </html>
    );
  },
  {
    docType: true,
  },
);
