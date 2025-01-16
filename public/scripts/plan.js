document.getElementById("plan-upload-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const file = formData.get("plan-file");

  if (!file) {
    alert("Please upload a file!");
    return;
  }

  // Show success message
  alert("Plan uploaded successfully! Our team will review it shortly.");
  e.target.reset();
});
