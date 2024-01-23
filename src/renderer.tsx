import "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Style } from "hono/css";
import Header from "./components/header/header";

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

export const renderer = jsxRenderer(
  ({ children, title, description, og }) => {
    return (
      <html lang="ja">
        <head prefix="og: http://ogp.me/ns#">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/static/style.css" rel="stylesheet" />
          <script src="https://cdn.twind.style" crossorigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=BIZ+UDGothic:wght@400;700&display=auto"
            rel="stylesheet"
          />
          {import.meta.env.PROD ? (
            <script type="module" src="/static/client.js" />
          ) : (
            <script type="module" src="/src/client.ts" />
          )}
          <title>{title}</title>
          <meta name="description" content={description} />
          {og ? (
            <>
              <meta property="og:url" content={og.url} />
              <meta property="og:type" content={og.type} />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:site_name" content="ののinfo" />
              <meta property="og:image" content={og.image} />
              <meta name="twitter:card" content={og.twitterCard} />
              <meta name="twitter:site" content="@NONO_info0827" />
            </>
          ) : (
            <>
              <meta property="og:url" content="https://nonoinfo.com/" />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:site_name" content="ののinfo" />
              <meta property="og:image" content="" />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@NONO_info0827" />
            </>
          )}
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
