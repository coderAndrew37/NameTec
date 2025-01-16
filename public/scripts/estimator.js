document.getElementById("openEstimator").addEventListener("click", () => {
  document.getElementById("estimatorModal").classList.remove("hidden");
});

document.getElementById("closeEstimator").addEventListener("click", () => {
  document.getElementById("estimatorModal").classList.add("hidden");
});

document.getElementById("calculateCost").addEventListener("click", () => {
  const size = parseFloat(document.getElementById("project-size").value);
  const material = parseFloat(document.getElementById("material-type").value);

  if (!size || !material) {
    alert("Please enter all fields");
    return;
  }

  const cost = size * material;
  document.getElementById(
    "estimatedCost"
  ).textContent = `Estimated Cost: KES ${cost.toLocaleString()}`;
});
