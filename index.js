// js/index.js

document.addEventListener("DOMContentLoaded", () => {
  const countEl  = document.getElementById("count-el");
  const saveEl   = document.getElementById("save-el");
  const totalEl  = document.getElementById("total-el");
  const incBtn   = document.getElementById("increment-btn");
  const inc5Btn  = document.getElementById("increment-5-btn");
  const inc10Btn = document.getElementById("increment-10-btn");
  const decBtn   = document.getElementById("decrement-btn");
  const dec5Btn  = document.getElementById("decrement-5-btn");
  const saveBtn  = document.getElementById("save-btn");
  const resetBtn = document.getElementById("reset-btn");

  let count = 0;
  let total = parseInt(localStorage.getItem("total")) || 0;

  saveEl.textContent = localStorage.getItem("history") || "Previous Entries:";
  totalEl.innerText  = `Total People Counted: ${total}`;
  updateCountDisplay();
  updateSaveButton();

  function updateCountDisplay() {
    countEl.innerText = count;
    updateSaveButton();
  }

  function updateSaveButton() {
    saveBtn.disabled = (count === 0);
  }

  function persist() {
    localStorage.setItem("total", total);
    localStorage.setItem("history", saveEl.textContent);
  }

  function changeCount(delta) {
    count = Math.max(0, count + delta);
    updateCountDisplay();
  }

  function save() {
    if (count === 0) return;
    // const timestamp = new Date().toISOString();
    saveEl.textContent += ` ${count} —`;
    total += count;
    count = 0;
    totalEl.innerText = `Total People Counted: ${total}`;
    updateCountDisplay();
    persist();
  }

  function clearSave() {
    if (!confirm("Clear all history and reset counters?")) return;
    count = 0;
    total = 0;
    saveEl.textContent = "Previous Entries:";
    countEl.innerText   = "0";
    totalEl.innerText   = "Total People Counted: 0";
    saveBtn.disabled     = true;
    localStorage.removeItem("total");
    localStorage.removeItem("history");
  }

  incBtn.addEventListener("click", ()    => changeCount(1));
  inc5Btn.addEventListener("click", ()   => changeCount(5));
  inc10Btn.addEventListener("click", ()  => changeCount(10));
  decBtn.addEventListener("click", ()    => changeCount(-1));
  dec5Btn.addEventListener("click", ()   => changeCount(-5));
  saveBtn.addEventListener("click", save);
  resetBtn.addEventListener("click", clearSave);
});
