import "./styles.css";
import { toggleTheme } from "./modules/theme.js";
import Storage from "./modules/storage.js";
import StorageService from "./modules/storageService";
import UI from "./modules/ui.js"

document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("aside-menu").classList.toggle("hidden");
});

const storageService = new StorageService(Storage);
const ui = new UI(storageService)