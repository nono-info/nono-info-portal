import { Child } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";
import Logo from "@/components/svg/logo";

export const Header = () => {
  const c = useRequestContext();
  const category = "/" + c.req.path.split("/")[1];

  return (
    <header class="grid place-content-end px-6 pb-6 pt-6">
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
        {isActive ? (
          <a
            class="ud-gothic @dark:border-stone-200 @dark:text-stone-200 @dark:hover:bg-stone-700 rounded-md border border-solid border-stone-800 px-2.5 py-1.5 text-xs font-bold hover:bg-stone-300"
            href={props.href}
          >
            <h1 class="inline">{props.children}</h1>
          </a>
        ) : (
          <a
            class="ud-gothic @dark:text-stone-200 @dark:hover:bg-stone-700 rounded-md border border-solid border-transparent px-2.5 py-1.5 text-xs font-bold hover:bg-stone-300"
            href={props.href}
          >
            {props.children}
          </a>
        )}
      </li>
    </>
  );
};

export default Header;
