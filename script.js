const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const labelSpan = document.getElementById("label");
const countSpan = document.getElementById("count");

let count = 0;

decreaseButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

increaseButton.addEventListener("click", () => {
    count++;
    updateCount();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateCount();
});

function updateCount() {
    countSpan.textContent = count;
}
