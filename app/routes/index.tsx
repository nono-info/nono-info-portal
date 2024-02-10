import { createRoute } from "honox/factory";
import { TwitterTimeline } from "@/components/social-media/twitter";

export default createRoute((c) => {
  return c.render(
    <section class="grid min-h-[30rem]">
      <div class="h-[calc(100dvh-5rem)] min-h-[40rem] min-w-[24rem] max-w-[30rem] place-self-end pb-4">
        <TwitterTimeline id="NONO_info0827">
          ののinfoの𝕏タイムライン
        </TwitterTimeline>
      </div>
      <script type="module" src="static/scripts/twitter.js" />
    </section>,
    { title: "ののinfo" },
  );
});
