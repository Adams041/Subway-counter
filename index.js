// js/index.js
document.addEventListener("DOMContentLoaded", function () {
  const countEl = document.getElementById("count-el");
  const saveEl = document.getElementById("save-el");
  const totalEl = document.getElementById("total-el");

  let count = 0;
  let total = 0;

  window.increment = function () {
    count++;
    updateCount();
  };

  window.incrementByFive = function () {
    count += 5;
    updateCount();
  };

  window.incrementByTen = function () {
    count += 10;
    updateCount();
  };

  window.decrement = function () {
    if (count > 0) {
      count--;
      updateCount();
    }
  };

  window.decrementByFive = function () {
    if (count >= 5) {
      count -= 5;
    } else {
      count = 0;
    }
    updateCount();
  };

  window.save = function () {
    if (count === 0) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    saveEl.textContent += ` ${count} (${time}) —`;
    total += count;
    totalEl.textContent = `Total People Counted: ${total}`;
    count = 0;
    updateCount();
  };

  window.clearSave = function () {
    saveEl.textContent = "Previous Entries: ";
    totalEl.textContent = "Total People Counted: 0";
    count = 0;
    total = 0;
    updateCount();
  };

  function updateCount() {
    countEl.textContent = count;
  }
});
// This code handles the incrementing, decrementing, saving, and clearing of the count.