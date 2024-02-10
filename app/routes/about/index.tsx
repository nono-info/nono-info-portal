import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(<div></div>, {
    title: "このサイトについて - ののinfo",
    description: "このサイトについての情報を掲載しています。",
  });
});
