//to remove categories from the category modal
export function deleteConfirmation(categoryCurrentId) {
  const deleteCategoryBtn = document.getElementById("deleteCatIconBtn");
  const cancelCategoryBtn = document.getElementById("cancelCatIconBtn");
  const confirmationDialog = document.getElementById("confirmationDialog");

  const removeBtn = document.getElementById(`removeBtn-${categoryCurrentId}`);
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
    const categoryIcon = document.getElementById(`category-icon-${categoryCurrentId}`);
    categoryIcon.remove();
    removeBtn.closest(".modal-icon").remove();
    categoryCurrentId = null;
    confirmationDialog.close();
  }
}
