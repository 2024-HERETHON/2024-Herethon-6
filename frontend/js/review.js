document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".starImage");
  const ratingInput = document.getElementById("rating");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;

      // Check if the clicked star is already active
      if (star.classList.contains("purple") && ratingInput.value == rating) {
        // Reset all stars to the original color
        stars.forEach((s) => s.classList.remove("purple"));
        ratingInput.value = 0; // Reset the rating value
      } else {
        // Set the rating value
        ratingInput.value = rating;

        // Update the stars to reflect the current rating
        stars.forEach((s, i) => {
          if (i < rating) {
            s.classList.add("purple");
          } else {
            s.classList.remove("purple");
          }
        });
      }
    });
  });
});
