export default function revealIcons() {
  const viewAllBtn = document.getElementById("viewAllIcons");
  const viewIcon = document.getElementById("viewIcon");
  const viewTextLabel = document.getElementById("viewTextLabel");

  const trackIcons = document.querySelector(".track-icons");
  const slideLeftBtn = document.querySelector(".slide-left-btn");
  const slideRightBtn = document.querySelector(".slide-right-btn");
  const categoryIconContainer = document.querySelector(".category-icon-container");
  const mainContent = document.querySelector(".main-content");

  let viewedAll = false;
  viewAllBtn.addEventListener("click", () => {
    const rTrack = document.querySelector(".track-icons.reveal-icons");
    const rLeftBtn = document.querySelector(".slide-left-btn.reveal-icons");
    const rRightBtn = document.querySelector(".slide-right-btn.reveal-icons");
    const rcategoryIconContainer = document.querySelector(".category-icon-container.reveal-icons");
    const rMainContent = document.querySelector(".main-content.reveal-icons");
    if (!viewedAll) {
      trackIcons.classList.add("reveal-icons");
      slideLeftBtn.classList.add("reveal-icons");
      slideRightBtn.classList.add("reveal-icons");
      categoryIconContainer.classList.add("reveal-icons");
      mainContent.classList.add("reveal-icons");
      viewIcon.textContent = "view_array";
      viewTextLabel.textContent = "view less";
      viewedAll = !viewedAll;
    }
    if (viewedAll) {
      rTrack.classList.remove("reveal-icons");
      rLeftBtn.classList.remove("reveal-icons");
      rRightBtn.classList.remove("reveal-icons");
      rcategoryIconContainer.classList.remove("reveal-icons");
      rMainContent.classList.remove("reveal-icons");
      viewIcon.textContent = "view_cozy";
      viewTextLabel.textContent = "view all";
      viewedAll = !viewedAll;
    }
  });
}
