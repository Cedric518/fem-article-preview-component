const shareOptions = document.querySelector(".share__options");
const shareButton = document.querySelector(".share__button");

shareButton.addEventListener("click", function () {
  shareOptions.classList.toggle("active");
});
