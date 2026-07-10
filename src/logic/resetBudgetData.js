import { resetCategoriesData } from "../data/modifyCategoriesData.js";

export function resetAllData() {
  document.getElementById("resetBtn").addEventListener("click", () => {
    resetCategoriesData();
    location.reload(); // reloads the page so everything re-renders fresh
  });
}
