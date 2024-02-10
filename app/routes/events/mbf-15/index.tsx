import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div>
      <h2 class="text-5xl font-bold">MBF15</h2>
      <p>2024年5月4日</p>
    </div>,
    {
      title: "森久保乃々プチオンリー | MyBestFriends 15 - ののinfo",
      description:
        "2024年5月4日に開催予定の森久保乃々プチオンリーに関するページです。",
    },
  );
});
