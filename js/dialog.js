function openDialog() {
  document.getElementById("dialog").style.display = "";
  $("#dialog").dialog({
    resizable: false,
    height: "auto",
    width: 300,
    modal: true,
    buttons: [
      {
        text: "Request",
        class: "btn-request",
        click: function () {
          document.getElementById("btn-send-id").style.display = "none";
          document.getElementById("btn-buy-id").style.display = "";
          $("#dialog").dialog("close");
        },
      },
      {
        text: "Cancel",
        class: "btn-cancel",
        click: function () {
          $("#dialog").dialog("close");
        },
      },
    ],
  });
}

function sendApprovalDialog() {
  document.getElementById("dialog").style.display = "";
  $("#dialog").dialog({
    resizable: false,
    height: "auto",
    width: 300,
    modal: true,
    buttons: [
      {
        text: "Request",
        class: "btn-request",
        click: function () {
          $("form").attr("action", "home.html");
          $("#dialog").dialog("close");
          $("form").submit();
        },
      },
      {
        text: "Cancel",
        class: "btn-cancel",
        click: function () {
          $("#dialog").dialog("close");
        },
      },
    ],
  });
}

function openCategoryDialog() {
  document.getElementById("dialog").style.display = "";
  $("#dialog").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: [
      {
        text: "Cancel",
        class: "btn-cancel",
        click: function () {
          $("#dialog").dialog("close");
        },
      },
      {
        text: "Next",
        class: "btn-next",
        click: function () {
          window.location.href = "selling-add.html";
          $("#dialog").dialog("close");
        },
      },
    ],
  });
}
