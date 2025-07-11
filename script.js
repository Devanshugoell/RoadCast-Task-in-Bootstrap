const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("bg-F1F3FD"));
    btn.classList.add("bg-F1F3FD");
  });
});
