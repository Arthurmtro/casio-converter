export const toggleTheme = () => {
  document.documentElement.classList.add("theming");
  document.documentElement.addEventListener(
    "transitionend",
    () => {
      if (document.documentElement) {
        document.documentElement.classList.remove("theming");
      }
    },
    { once: true }
  );
  localStorage.setItem(
    "mtro-theme",
    String(document.documentElement.classList.contains("light"))
  );
  document.documentElement.classList.toggle("light");
};
