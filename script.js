const pageOne = document.querySelector(".page1");
const pageTwo = document.querySelector(".page2");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelector(".btn");
const resultRating = document.getElementById("rating");

    submitButton.addEventListener("click", () => {
  pageOne.style.display = "none"
  pageTwo.style.display = "block"

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      resultRating.innerHTML = rating.innerHTML
    })
  })
})