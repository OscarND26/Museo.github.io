const facts = [
  "🧐 dato curioso 1",
  "🖼️ dato curioso 2",
  "👣 dato curioso 3",
  "🕯️ dato curioso 4",
  "🎧 dato curioso 5",
  "📚 dato curioso 6",
  "🧪 dato curioso 7"
];

const factDisplay = document.getElementById("factDisplay");
const newFactBtn = document.getElementById("newFactBtn");

newFactBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});
