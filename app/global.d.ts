import {} from "hono";

type Og = {
  url: string;
  type: string;
  image: string;
  twitterCard: string;
};

type Head = {
  title?: string;
  description?: string;
  og?: Og;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head,
    ): Response | Promise<Response>;
  }
}
