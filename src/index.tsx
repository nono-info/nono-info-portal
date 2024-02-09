import { Hono } from "hono";
import { renderer } from "./renderer";
import Home from "@/routes/home";
import events from "@/routes/events";
import About from "./routes/about";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => c.render(<Home />, { title: "ののinfo" }));
app.get("/about", (c) =>
  c.render(<About />, { title: "このサイトについて - ののinfo" }),
);
app.route("/events", events);

export default app;
