export function setupUI() {
  const dialog = document.getElementById("project-dialog");
  const openDialogBtn = document.getElementById("add-project");
  const cancelBtn = document.getElementById("cancel-btn");
  const form = dialog.querySelector("form");
  const projectNameInput = document.getElementById("project-name");
  const projectList = document.getElementById("project-list");

  // Abrir diálogo
  openDialogBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

  // Cerrar diálogo
  cancelBtn.addEventListener("click", () => {
    dialog.close();
  });

  // Manejar envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const projectName = projectNameInput.value.trim();
    if (projectName === "") return;

    const newProject = document.createElement("div");
    newProject.classList.add("aside-link");
    newProject.innerHTML = `<p>📌 ${projectName}</p>`;

    projectList.appendChild(newProject);
    projectNameInput.value = "";
    dialog.close();
  });
}
