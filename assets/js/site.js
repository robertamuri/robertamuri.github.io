document.querySelectorAll("[data-abstract]").forEach((button) => {
  button.addEventListener("click", () => {
    const abstract = button.closest(".paper").querySelector(".abstract");
    abstract.classList.toggle("show");
    button.textContent = abstract.classList.contains("show") ? "Hide abstract" : "Abstract";
  });
});
