import populateIcons from "./logic/populateIcons.js";
import populateExpenses from "./logic/populateExpenses.js";

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
    element.innerHTML = await res.text();
  } catch (error) {
    element.innerHTML = `<p>Component failed to load</p>`;
  }
}

populateIcons();
populateExpenses();

loadComponent("site-header", "/src/components/header.html");
loadComponent("site-footer", "/src/components/footer.html");
