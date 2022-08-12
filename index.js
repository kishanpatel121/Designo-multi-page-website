const closeBtn = document.getElementById("close-btn");
const openBtn = document.getElementById("open-btn");
const navElement = document.getElementById("nav");
const headerElement = document.getElementById("header");

closeBtn.addEventListener("click", () => {
  navElement.classList.remove("navigation-open");
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
  headerElement.classList.remove("header");
});

openBtn.addEventListener("click", () => {
  navElement.classList.add("navigation-open");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  headerElement.classList.add("header");
});
