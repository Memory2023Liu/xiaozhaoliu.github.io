const SITE_TITLE = "Xiaozhao's Notes";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".site-title").forEach((element) => {
    element.textContent = SITE_TITLE;
  });
});
