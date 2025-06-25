document.addEventListener("DOMContentLoaded", function () {
    let countEl = document.getElementById("count-el");
    let saveEl = document.getElementById("save-el");
    let totalEl = document.getElementById("total-el");

    let count = 0;
    let total = 0;

    window.increment = function () {
        count++;
        countEl.innerText = count;
    };

    window.save = function () {
        let now = new Date().toLocaleTimeString();
        let countStr = `${count} (${now}) - `;
        saveEl.textContent += countStr;
        total += count;
        totalEl.innerText = `Total People Counted: ${total}`;
        count = 0;
        countEl.innerText = count;
    };

    window.clearSave = function () {
        saveEl.innerText = "Previous Entries: ";
        count = 0;
        total = 0;
        countEl.innerText = count;
        totalEl.innerText = "Total People Counted: 0";
    };
});
