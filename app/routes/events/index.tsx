import { createRoute } from "honox/factory";
import { Child } from "hono/jsx";

export default createRoute((c) => {
  return c.render(
    <article>
      <h2 class="mb-2 font-sans text-5xl font-bold">関連イベント</h2>
      <ul class="my-4 flex flex-col gap-2">
        <EventLink href="https://otoginomori.net/">
          <img
            class="inline rounded-md"
            src="/static/image/events/otoginomori.jpg"
            alt="おとぎの森へようこそ"
            width="400px"
          />
        </EventLink>
        <EventLink href="/events/mbf-15">
          森久保乃々プチオンリー at MyBestFriends 15
        </EventLink>
      </ul>
    </article>,
    {
      title: "イベント - ののinfo",
      description: "ののinfoの関連イベントの一覧です。",
    },
  );
});

type EventLinkProps = {
  href: string;
  children: Child;
};

const EventLink = (props: EventLinkProps) => {
  return (
    <li>
      <a
        class="@dark:hover:bg-stone-700 ml-[-0.5rem] block h-fit w-fit rounded-xl p-2 font-sans text-lg font-semibold hover:bg-stone-300"
        href={props.href}
        target={
          props.href.slice(0, 4) === "http" || props.href.slice(0, 2) === "//"
            ? "_blank"
            : "_self"
        }
      >
        {props.children}
      </a>
    </li>
  );
};
