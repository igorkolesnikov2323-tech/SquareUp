const minInput = document.querySelector(".min-range");
const maxInput = document.querySelector(".max-range");
const rangeSelected = document.querySelector(".range-selected");
const minBubble = document.getElementById("min-value");
const maxBubble = document.getElementById("max-value");

function updateRange() {
    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);
    const maxLimit = parseInt(minInput.max);

    if (maxVal - minVal < 500) {
        if (this.className === "min-range") {
            minInput.value = maxVal - 500;
            minVal = maxVal - 500;
        } else {
            maxInput.value = minVal + 500;
            maxVal = minVal + 500;
        }
    }

    minBubble.textContent = `$${minVal}`;
    maxBubble.textContent = `$${maxVal}`;
    
    const leftPercent = (minVal / maxLimit) * 100;
    const rightPercent = (maxVal / maxLimit) * 100;
    
    rangeSelected.style.left = leftPercent + "%";
    rangeSelected.style.right = (100 - rightPercent) + "%";

    minBubble.style.left = leftPercent + "%";
    maxBubble.style.left = rightPercent + "%";
}

minInput.addEventListener("input", updateRange);
maxInput.addEventListener("input", updateRange);

updateRange.call(minInput);
