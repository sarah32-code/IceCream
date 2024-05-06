"use strict";

const iceCreamConeRadio = document.getElementById("iceCreamConeRadio");
const iceCreamCupRadio = document.getElementById("iceCreamCupRadio");
const toppingsRow = document.getElementById("toppingsRow");

window.onload = function () {
    iceCreamConeRadio.onclick = toggleToppingsRowVisibility;
    iceCreamCupRadio.onclick = toggleToppingsRowVisibility;
};

function toggleToppingsRowVisibility() {
    let shouldBeVisible = iceCreamCupRadio.checked;

    if (shouldBeVisible) {
        toppingsRow.style.display = "block";
    } else {
        toppingsRow.style.display = "none";
    }
}
