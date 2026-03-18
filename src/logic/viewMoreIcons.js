export default function viewMoreIcons() {
  const nextBtn = document.getElementById("slideRight");
  const prevBtn = document.getElementById("slideLeft");
  const iconContainer = document.getElementById("trackIcons");
  const categoryIcon = document.querySelector(".category-list");

  nextBtn.addEventListener("click", () => {
    const slideWidth = categoryIcon.clientWidth;
    iconContainer.scrollLeft += slideWidth;
  });

  prevBtn.addEventListener("click", () => {
    const slideWidth = categoryIcon.clientWidth;
    iconContainer.scrollLeft -= slideWidth;
  });
}
