const pages = document.querySelectorAll(".page");
const controls = document.querySelectorAll("[data-go]");

function showPage(pageName) {
  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === pageName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

controls.forEach((control) => {
  control.addEventListener("click", () => {
    showPage(control.dataset.go);
  });
});
