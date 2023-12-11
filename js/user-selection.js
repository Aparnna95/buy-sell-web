function userSelection(element) {
  var clickId = element.id;
  if (clickId == "seller-id") {
    var e = document.getElementById("buyer-id");
    e.classList.remove("active");

    $("form").attr("action", "seller-approval.html");
  } else {
    var e = document.getElementById("seller-id");
    e.classList.remove("active");
    $("form").attr("action", "home.html");
  }
  document.getElementById(clickId).classList.add("active");
}
