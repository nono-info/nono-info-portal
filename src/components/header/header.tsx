import { Child } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";
import Logo from "@/components/svg/logo";

export const Header = () => {
  const c = useRequestContext();
  const category = "/" + c.req.path.split("/")[1];

  return (
    <header class="px-6 pt-6 pb-6 grid place-content-end">
      <div class="absolute">
        <a href="/" aria-label="Top page">
          <Logo width="105px" />
        </a>
      </div>
      <nav>
        <ul class="flex gap-1">
          <HeaderLink href="/events" category={category}>
            イベント
          </HeaderLink>
          <HeaderLink href="/about" category={category}>
            このサイトについて
          </HeaderLink>
        </ul>
      </nav>
    </header>
  );
};

type HeaderLinkProps = {
  href: string;
  category: string;
  children?: Child;
};

const HeaderLink = (props: HeaderLinkProps) => {
  const isActive = props.category === props.href;

  return (
    <>
      <li>
        <a
          class={`
            px-2.5 py-1.5 rounded-md text-xs ud-gothic font-bold border hover:(bg-stone-300) dark:(text-stone-200 hover:bg-stone-700)
            ${isActive ? "border-stone-800 dark:border-stone-200" : "border-transparent"}
          `}
          href={props.href}
        >
          {isActive ? <h1 class="inline">{props.children}</h1> : props.children}
        </a>
      </li>
    </>
  );
};

export default Header;
