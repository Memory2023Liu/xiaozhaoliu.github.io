const SITE_TITLE = "Xiaozhao Liu's Research";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".site-title").forEach((element) => {
    element.textContent = SITE_TITLE;
  });
});
