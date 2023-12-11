function selectCategory(element) {
  const allElements = document.querySelectorAll(".circle");
  allElements.forEach((element) => {
    element.classList.remove("active");
  });
  var clickId = element.id;
  document.getElementById(clickId).classList.add("active");
}
