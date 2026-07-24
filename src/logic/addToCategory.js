import { categoriesData } from "../data/categoriesData.js";

export function addToCategory() {
  const inputCatOptions = document.getElementById("inputCatOptions");
  inputCatOptions.addEventListener("input", (event) => {
    categoriesData.forEach((itemObj) => {
      if (event.target.value === itemObj.category) {
        return itemObj.category;
      } else {
        return event.target.value;
      }
    });
  });
}
