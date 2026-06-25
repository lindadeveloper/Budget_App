export function theme() {
  const themeIcon = document.getElementById("themeIcon");
  const rootHtml = document.documentElement;

  themeIcon.addEventListener("click", () => {
    const currentTheme = rootHtml.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    rootHtml.setAttribute("data-theme", newTheme);
  });
}
