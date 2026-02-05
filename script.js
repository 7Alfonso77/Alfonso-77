const tapArea = document.getElementById("tapArea");
const countEl = document.getElementById("count");
const tapButton = document.getElementById("tapButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

const updateCount = () => {
  countEl.textContent = count.toString();
};

const spawnSushi = (event) => {
  const pop = document.createElement("span");
  pop.className = "sushi-pop";
  pop.textContent = "🍣";

  const rect = tapArea.getBoundingClientRect();
  const x = event?.clientX ?? rect.left + rect.width / 2;
  const y = event?.clientY ?? rect.top + rect.height / 2;

  pop.style.left = `${x - rect.left}px`;
  pop.style.top = `${y - rect.top}px`;

  tapArea.appendChild(pop);

  pop.addEventListener("animationend", () => {
    pop.remove();
  });
};

const increment = (event) => {
  count += 1;
  updateCount();
  spawnSushi(event);
};

tapArea.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest("button")) {
    return;
  }
  increment(event);
});

tapButton.addEventListener("click", (event) => {
  increment(event);
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCount();
});

updateCount();
