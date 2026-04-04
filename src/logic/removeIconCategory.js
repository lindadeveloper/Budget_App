//to remove categories from the category modal
export function openRemoveCategoryConfirmation(currentId) {
  console.log(currentId);
  const deleteCategoryBtn = document.getElementById("deleteCatIconBtn");
  const cancelCategoryBtn = document.getElementById("cancelCatIconBtn");
  const confirmationDialog = document.getElementById("confirmationDialog");

  const removeBtn = document.getElementById(`removeBtn-${currentId}`);
  removeBtn.addEventListener("click", openConfirmation);

  function openConfirmation() {
    confirmationDialog.showModal();
    deleteCategoryBtn.addEventListener("click", removeCategory, { once: true });
    cancelCategoryBtn.addEventListener("click", cancelCategory, { once: true });
  }

  function cancelCategory() {
    confirmationDialog.close();
  }

  function removeCategory() {
    const categoryIcon = document.getElementById(`category-icon-${currentId}`);
    categoryIcon.remove();
    removeBtn.closest(".modal-icon").remove();
    currentId = null;
    confirmationDialog.close();
  }
}
//   const removeBtn = document.querySelector(`#category-icon-${currentId} [data-action="remove"]`);

// deleteCategoryBtn.addEventListener("click", removeCategories, { once: true });

// const carouselIcon = document.getElementById(`category-icon-${currentId}`);
// carouselIcon.remove();
// removeBtn.closest(".modal-icon").remove();
// removeBtn.addEventListener(
//   "click",
//   () => {
//     const carouselIcon = document.getElementById(`category-icon-${currentIcon}`);
//     carouselIcon?.remove();
//     removeBtn.closest(".modal-icon")?.remove();
//   },
//   { once: true },
// );

// function removeCategories() {
//   carouselIcon.remove();
//   removeBtn.closest(".modal-icon").remove();
// }
