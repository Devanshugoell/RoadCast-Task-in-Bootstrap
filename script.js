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

const ChangeContent = (dropDown, dropDownItem) => {
  document.querySelectorAll(dropDown).forEach((item) => {
    item.addEventListener("click", function () {
      const dropdownToggle = document.getElementById(dropDownItem);
      dropdownToggle.textContent = this.textContent;
    });
  });
};

function changeHtmlFile(content) {
  if (content === "Products") {
    ChangeContent(".Products", "ProductDropdown");
  } else if (content === "Solutions") {
    ChangeContent(".Solutions", "solutionsDropdown");
  } else if (content === "Resources") {
    ChangeContent(".Resources", "ResourcesDropdown");
  }
}
