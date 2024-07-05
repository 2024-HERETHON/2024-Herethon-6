document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".starImage");
  const ratingInput = document.getElementById("rating");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      ratingInput.value = value;
      updateStars(value);
    });
  });

  function updateStars(rating) {
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= rating) {
        star.src = "../images/review/Star 5.png";
      } else {
        star.src = "../images/review/Star 5 (1).png";
      }
    });
  }
});
