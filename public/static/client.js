const r=document.querySelector(".twitter-timeline"),a=window.matchMedia("(prefers-color-scheme: dark)"),d=a.matches;r&&r.setAttribute("data-theme",d?"dark":"light");function m(c){let e=document.getElementById("twitter-widget-0");if(e){let i=e.getAttribute("src");if(i){var t;c.matches?t=i.replace("theme=light","theme=dark"):t=i.replace("theme=dark","theme=light"),e.setAttribute("src",t)}}}a.addEventListener("change",m);