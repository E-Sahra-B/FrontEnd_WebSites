let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".icon-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("icon-stack", "icon-embed");
  } else {
    closeBtn.classList.replace("icon-embed", "icon-stack");
  }
}
