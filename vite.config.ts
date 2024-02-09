import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { getEnv } from "@hono/vite-dev-server/cloudflare-pages";
import ssg from "@hono/vite-ssg";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: "./src/client.ts",
          output: {
            dir: "public",
            entryFileNames: "static/client.js",
          },
        },
        emptyOutDir: false,
      },
    };
  } else {
    return {
      plugins: [
        pages(),
        ssg(),
        devServer({
          entry: "src/index.tsx",
          env: getEnv({
            bindings: {
              NAME: "Hono",
            },
            kvNamespaces: ["MY_KV"],
          }),
        }),
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    };
  }
});
