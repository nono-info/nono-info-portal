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
        <link href="/static/styles/reset.css" rel="stylesheet" />
        <link href="/static/styles/style.css" rel="stylesheet" />
        <link href="/static/styles/uno.css" rel="stylesheet" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <Script src="/app/client.ts" />
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
});
