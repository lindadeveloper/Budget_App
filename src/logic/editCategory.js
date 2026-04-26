//to remove categories from the category modal
export function editCategory(currentId) {
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
