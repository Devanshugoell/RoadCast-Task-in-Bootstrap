const buttons = document.querySelectorAll(".filter-btn");
const buttons2 = document.querySelectorAll(".filter-btn2");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("bg-F1F3FD"));
    btn.classList.add("bg-F1F3FD");
  });
});

buttons2.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons2.forEach((b) => b.classList.remove("bg-F1F3FD"));
    btn.classList.add("bg-F1F3FD");
  });
});
