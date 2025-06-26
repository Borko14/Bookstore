document.addEventListener("DOMContentLoaded", function () {
  const purchaseForm = document.getElementById("purchaseForm");
  if (purchaseForm) {
    purchaseForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("nameInput").value;
      if(name !== ""){
      alert(`${name}, благодарим за поръчката!`);
      purchaseForm.reset();
      }
    });
  }

  const reviewForm = document.getElementById("reviewForm");
  const textArea = document.getElementById("reviewText");
  const reviewContainer = document.getElementById("reviewContainer");

  if (reviewForm) {
    reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const comment = textArea.value.trim();
      const name = document.getElementById("namePut").value;
      if (comment !== "" && name !== "") {
        const newReview = document.createElement("p");
        newReview.textContent = `${name}: ${comment}`;
        reviewContainer.append(newReview);
        reviewForm.reset();
      }
    });
  }
});