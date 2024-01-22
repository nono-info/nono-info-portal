import { Child } from "hono/jsx";

type TwitterTimelineProps = {
  id: string;
  children?: Child;
};

export const TwitterTimeline = (props: TwitterTimelineProps) => {
  return (
    <div class="w-full h-full overflow-scroll rounded-xl">
      <a
        class="twitter-timeline"
        data-lang="ja"
        data-chrome="noheader noborders"
        href={`https://twitter.com/${props.id}?ref_src=twsrc%5Etfw`}
      >
        <div class="skeleton grid place-content-center group">
          <p class="text-sm invisible group-hover:visible">{props.children}</p>
        </div>
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
    </div>
  );
};
