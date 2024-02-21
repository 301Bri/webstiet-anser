function uploadFile() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  if (file) {
    var formData = new FormData();
    formData.append("file", file);

    // Replace with the actual upload endpoint on the server
    var uploadEndpoint = "upload.php";

    fetch(uploadEndpoint, {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          alert("File uploaded successfully!");
        } else {
          alert("Error uploading file. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
  } else {
    alert("Please select a file to upload.");
  }
}
