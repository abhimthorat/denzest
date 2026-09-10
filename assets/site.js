document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobilemenu");
  const links = document.querySelector(".links");
  if (!button || !links) return;
  button.addEventListener("click", () => {
    const open = links.classList.toggle("mobile-open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("mobile-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
  }));
});
