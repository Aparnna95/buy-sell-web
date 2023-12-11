function dropDown() {
  document.getElementById("category-drop-down-id").style.display = "none";
  var display = document.getElementById("drop-down-id").style.display;
  if (display == "none") {
    document.getElementById("drop-down-id").style.display = "";
  } else {
    document.getElementById("drop-down-id").style.display = "none";
  }
}

function categoryDropDown() {
  document.getElementById("drop-down-id").style.display = "none";
  var display = document.getElementById("category-drop-down-id").style.display;
  if (display == "none") {
    document.getElementById("category-drop-down-id").style.display = "";
  } else {
    document.getElementById("category-drop-down-id").style.display = "none";
  }
}
