import { Child } from "hono/jsx";

type TwitterTimelineProps = {
  id: string;
  children?: Child;
};

export const TwitterTimeline = (props: TwitterTimelineProps) => {
  return (
    <div class="h-full w-full overflow-scroll rounded-xl">
      <a
        class="twitter-timeline"
        aria-label="Twitter Timeline"
        data-lang="ja"
        data-chrome="noheader noborders"
        href={`https://twitter.com/${props.id}?ref_src=twsrc%5Etfw`}
      >
        <div class="skeleton group grid place-content-center">
          <p class="invisible font-sans text-sm group-hover:visible">
            {props.children}
          </p>
        </div>
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
    </div>
  );
};
