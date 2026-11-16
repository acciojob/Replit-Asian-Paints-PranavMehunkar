//your JS code here. If required.

const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

const gridItems = document.querySelectorAll(".grid-item");

changeButton.addEventListener("click", function () {
    const blockId = Number(blockInput.value);
    const color = colorInput.value.trim();

    // Reset all blocks before applying the new color
    gridItems.forEach(function (item) {
        item.style.backgroundColor = "transparent";
    });

    // Change color only if the block ID is valid
    if (blockId >= 1 && blockId <= 9 && Number.isInteger(blockId) && color !== "") {
        document.querySelectorAll(".grid-item")[blockId - 1].style.backgroundColor = color;
    }
});

resetButton.addEventListener("click", function () {
    gridItems.forEach(function (item) {
        item.style.backgroundColor = "transparent";
    });

    blockInput.value = "";
    colorInput.value = "";
});
