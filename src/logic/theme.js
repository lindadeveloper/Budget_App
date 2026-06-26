export function theme() {
  const themeIcon = document.getElementById("themeIconBtn");
  const themeIconImg = document.getElementById("themeIconImg");
  const html = document.documentElement;
  const themeIconText = document.getElementById("themeIconTxt");

  themeIcon.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";
    themeIconImg.textContent = newTheme === "dark" ? "dark_mode" : "wb_sunny";
    themeIcon.title = newTheme === "dark" ? "Dark Mode" : "Light Mode";
    themeIconText.textContent = newTheme === "dark" ? "Dark" : "Light";

    html.setAttribute("data-theme", newTheme);
  });
}
