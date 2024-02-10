import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
    };
  } else {
    return {
      plugins: [honox(), pages()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./app"),
        },
      },
    };
  }
});
