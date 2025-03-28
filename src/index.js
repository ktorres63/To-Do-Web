import "./styles.css";
import { toggleTheme } from "./modules/theme.js";

document.getElementById("toggleTheme").addEventListener("click", toggleTheme);

document.getElementById("menu-btn").addEventListener("click", function () {
  const aside = document.getElementById("aside-menu");
  aside.classList.toggle("hidden");
});

const dialog = document.getElementById("project-dialog");
const openDialogBtn = document.getElementById("add-project");
const cancelBtn = document.getElementById("cancel-btn");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});
