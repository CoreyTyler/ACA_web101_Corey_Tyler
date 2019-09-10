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

var myLocation = document.getElementById("my-coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    myLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  myLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}
