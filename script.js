const buttons = document.querySelectorAll(".filter-btn");
const buttons2 = document.querySelectorAll(".filter-btn2");
const inputElement = document.getElementById("inputValue");

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

const handleSignUp = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(inputElement.value)) {
    alert(
      `Thank you ${inputElement.value} , We have recieved your mail and will contact you shortly`
    );
    inputElement.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
};
