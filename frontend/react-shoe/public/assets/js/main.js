const rangeInput = document.querySelectorAll(".range-input input");
const range = document.querySelector(".range-slider .range");

function updateRange() {
  let min = parseInt(rangeInput[0].value);
  let max = parseInt(rangeInput[1].value);
  let percent1 = (min / rangeInput[0].max) * 100;
  let percent2 = (max / rangeInput[1].max) * 100;
  
  range.style.left = percent1 + "%";
  range.style.width = (percent2 - percent1) + "%";
}

rangeInput.forEach(input => {
  input.addEventListener("input", updateRange);
});

updateRange();
