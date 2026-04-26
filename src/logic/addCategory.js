import { openModal } from "./openModal.js";

export function addCategory() {
  const addCategoryTitle = "New Category";
  const addCategoryBtn = document.getElementById("addCategoryBtn");
  addCategoryBtn.addEventListener("click", () => {
    openModal(addCategoryTitle);
  });
}
