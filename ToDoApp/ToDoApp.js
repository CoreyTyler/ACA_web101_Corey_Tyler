$("#addIt").click(function() {
  $("#list").append(
    $("<li>", {
      text: $("#textField").val()
    })
  );
});

$("#list").click(function() {
  $(this).remove();
});
