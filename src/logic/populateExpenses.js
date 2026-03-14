import categoriesData from "../data/categoriesData.js";

export default function populateExpenses(objName) {
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
  categoryTitle.textContent = objName;

  categoriesData.forEach((itemObj) => {
    if (objName === itemObj.category) {
      expenseList.insertAdjacentHTML(
        "beforeend",
        `<div id="expense-details">
            <p>${itemObj.category}</p>
            <span>${itemObj.name}</span>
            <p>End date: ${itemObj.date}</p>
            <p>Goal limit: ${itemObj.price} USD</p>
            <div class="progress-bar"></div>
            <button>Edit</button>
        </div>
        `,
      );
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
