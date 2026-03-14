import categoriesData from "../data/categoriesData.js";

export default function populateExpenses() {
  const categoryDetails = document.getElementById("category-details");
  // const categoryName = document.getElementById("catergory-name");

  categoriesData.forEach((itemObj) => {
    categoryDetails.innerHTML += `
        <div id="expense-details">
            <p>${itemObj.category}</p>
            <span>${itemObj.name}</span>
            <p>End date: ${itemObj.date}</p>
            <p>Goal Limit ${itemObj.price} USD</p>
            <div class="progress-bar"></div>
            <button>Edit</button>
        </div>;`;
  });
}
