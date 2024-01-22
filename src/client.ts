// --- Twitter widget ---
const timeline = document.querySelector(".twitter-timeline");
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const isDark = mediaQueryList.matches;
if (timeline) timeline.setAttribute("data-theme", isDark ? "dark" : "light");

function themeChanged(e: MediaQueryListEvent) {
  let twitterWidget = document.getElementById("twitter-widget-0");
  if (twitterWidget) {
    let src = twitterWidget.getAttribute("src");

    if (src) {
      var newSrc: string;

      if (e.matches) {
        newSrc = src.replace("theme=light", "theme=dark");
      } else {
        newSrc = src.replace("theme=dark", "theme=light");
      }

      twitterWidget.setAttribute("src", newSrc);
    }
  }
}

mediaQueryList.addEventListener("change", themeChanged);
// --- End Twitter widget ---
