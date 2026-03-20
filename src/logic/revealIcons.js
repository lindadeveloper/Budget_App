export default function revealIcons() {
  const viewAllBtn = document.getElementById("viewAllIcons");
  const viewIcon = document.getElementById("viewIcon");
  const viewTextLabel = document.getElementById("viewTextLabel");

  const slideLeftBtn = document.querySelector(".slide-left-btn");
  const slideRightBtn = document.querySelector(".slide-right-btn");
  const mainContent = document.querySelector(".main-content");
  const trackIcons = document.querySelector(".track-icons");
  const categoryIconContainer = document.querySelector(".category-icon-container");

  let viewedAll = false;
  viewAllBtn.addEventListener("click", () => {
    if (viewedAll === false) {
      slideLeftBtn.classList.add("reveal-icons");
      slideRightBtn.classList.add("reveal-icons");
      mainContent.classList.add("reveal-icons");
      trackIcons.classList.add("reveal-icons");
      categoryIconContainer.classList.add("reveal-icons");
      trackIcons.classList.remove("reveal-mobile");
      categoryIconContainer.classList.remove("reveal-mobile");
      viewIcon.textContent = "view_array";
      viewTextLabel.textContent = "view less";
      viewedAll = true;
    } else {
      slideLeftBtn.classList.remove("reveal-icons");
      slideRightBtn.classList.remove("reveal-icons");
      mainContent.classList.remove("reveal-icons");
      trackIcons.classList.remove("reveal-icons");
      categoryIconContainer.classList.remove("reveal-icons");
      trackIcons.classList.add("reveal-mobile");
      categoryIconContainer.classList.add("reveal-mobile");
      viewIcon.textContent = "view_cozy";
      viewTextLabel.textContent = "view all";
      viewedAll = false;
    }
  });
}
