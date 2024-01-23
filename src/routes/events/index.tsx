import { Hono } from "hono";
import { Child } from "hono/jsx";
import Mbf15 from "./mbf-15";

const app = new Hono();

app.get("/", (c) => c.render(<Events page="events" />, { title: "イベント - ののinfo" }));
app.get("/mbf-15", (c) =>
  c.render(<Mbf15 />, { title: "森久保乃々プチオンリー | MyBestFriends 15 - ののinfo" }),
);

const Events = () => {
  return (
    <article>
      <h2 class="text-3xl font-semibold mb-2">主催・関連イベント一覧</h2>
      <ul class="my-4 flex flex-col gap-2 list-disc list-inside">
        <EventLink href="https://otoginomori.net/">おとぎの森へようこそ</EventLink>
        <EventLink href="/events/mbf-15">森久保乃々プチオンリー at MyBestFriends 15</EventLink>
      </ul>
    </article>
  );
};

type EventLinkProps = {
  href: string;
  children: Child;
};

const EventLink = (props: EventLinkProps) => {
  return (
    <li>
      <a
        class="ml-[-0.5rem] px-2 py-1.5 rounded-md text-lg font-semibold hover:bg-stone-300 dark:hover:bg-stone-700"
        href={props.href}
        target={
          props.href.slice(0, 4) === "http" || props.href.slice(0, 2) === "//" ? "_blank" : "_self"
        }
      >
        {props.children}
      </a>
    </li>
  );
};

export default app;
