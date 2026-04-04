import { categoriesData } from "../data/categoriesData.js";

export function populateExpenses(objName) {
  const expenseList = document.getElementById("expense-list");
  const categoryTitle = document.getElementById("category-title");

  //to make the first letter uppercased on every word
  function titleCase(str) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  }

  expenseList.innerHTML = "";
  categoryTitle.textContent = titleCase(objName);

  categoriesData.forEach((itemObj) => {
    let goalLimit = itemObj.price + 100;

    if (objName === itemObj.category) {
      const progress = Math.round((itemObj.price / goalLimit) * 100);
      expenseList.insertAdjacentHTML(
        "beforeend",
        `<div class="expense-wrapper">
          <div id="expense-details" class="expense-details">
            <span class="item-name">${itemObj.name}</span>
            <div class="date-goal-wrap">
              <span>End date: ${itemObj.date}</span>
              <span>Goal limit: $${goalLimit}</span>
            </div>
            <div class="progress">
              <p class="total-spent">Total spent: $${itemObj.price}</p>
              <div 
                id="progressBar"
                class="progress-bar"
                data-width="${progress}%"
                role="progressbar" 
                aria-valuenow="${progress}" 
                aria-valuemin="0"
                aria-valuemax="100">
                ${progress}%
              </div>
            </div>
          </div>
          <button class="edit-btn">
            <span class="material-symbols-outlined">edit_note</span>
            <span>Edit</span>
          </button>
        </div>
        `,
      );
      document.querySelectorAll(".progress-bar").forEach((bar) => {
        bar.style.setProperty("--target-width", bar.dataset.width);
      });
    }
  });
}
// For more security, use this method instead, but it's more verbose:

// const expenseDiv = document.createElement("div");
// expenseDiv.id = "expense-details";

// const categoryPara = document.createElement("p");
// categoryPara.textContent = itemObj.category;
// expenseDiv.appendChild(categoryPara);

// const span = document.createElement("span");
// span.textContent = itemObj.name;
// expenseDiv.appendChild(span);

// const datePara = document.createElement("p");
// datePara.textContent = `End date: ${itemObj.date}`;
// expenseDiv.appendChild(datePara);

// const goalPara = document.createElement("p");
// goalPara.textContent = `Goal limit $${itemObj.price}`;
// expenseDiv.appendChild(goalPara);

// const progressDiv = document.createElement("p");
// progressDiv.classList.add("progress-bar");
// expenseDiv.appendChild(progressDiv);

// const editBtn = document.createElement("button");
// editBtn.textContent = "edit";
// expenseDiv.appendChild(editBtn);

// categoryDetails.appendChild(expenseDiv);
