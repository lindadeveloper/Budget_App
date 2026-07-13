import { resetCategoriesData } from "../data/modifyCategoriesData.js";

//bug found: light and dark theme would reset to light
export function resetAllData() {
  document.getElementById("resetBtn").addEventListener("click", () => {
    resetCategoriesData();
    location.reload(); // reloads the page so everything re-renders fresh
  });
}
