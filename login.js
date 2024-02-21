function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Replace with your actual username and password
  var validUsername = "ari";
  var validPassword = "ariisstupid";

  if (username === validUsername && password === validPassword) {
    window.location.href = "files.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Enable login on Enter key press
document.getElementById("password").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
