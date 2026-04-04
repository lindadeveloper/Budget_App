import { populateIcons } from "./logic/populateIcons.js";
import { menuToggle } from "./logic/menuToggle.js";
import { viewMoreIcons } from "./logic/viewMoreIcons.js";
import { revealIcons } from "./logic/revealIcons.js";

async function loadComponent(id, url) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element #${id} not found`);
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("File not found");
    }
    element.insertAdjacentHTML("beforeend", await res.text());
  } catch (error) {
    element.insertAdjacentHTML("afterbegin", `<p>Component failed to load</p>`);
  }
}

populateIcons();
menuToggle();
viewMoreIcons();
revealIcons();

loadComponent("site-header", "/src/components/header.html");
loadComponent("site-footer", "/src/components/footer.html");
