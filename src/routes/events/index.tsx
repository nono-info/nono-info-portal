import { Hono } from "hono";
import Mbf15 from "./mbf-15";

const app = new Hono();

app.get("/", (c) => c.render(<Events page="events" />, { title: "イベント - ののinfo" }));
app.get("/mbf-15", (c) =>
  c.render(<Mbf15 />, { title: "森久保乃々プチオンリー | MyBestFriends 15 - ののinfo" }),
);

const Events = () => {
  return (
    <div class="events">
      <a href="/events/mbf-15">MBF15</a>
    </div>
  );
};

export default app;
