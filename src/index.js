import "./styles.css";
import { toggleTheme } from "./modules/theme.js";
import { setupUI } from "./modules/ui.js";

document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("aside-menu").classList.toggle("hidden");
});

// Configurar la UI
setupUI();
