const ui = {
  print(text) {
    const t = document.getElementById("transcript");
    t.innerHTML += `<div>${text}</div>`;
    t.scrollTop = t.scrollHeight;
  }
};

document.getElementById("submitBtn").addEventListener("click", () => {
  const input = document.getElementById("commandInput");
  const cmd = input.value;
  input.value = "";
  parseCommand(cmd);
});

document.getElementById("commandInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    document.getElementById("submitBtn").click();
  }
});

document.querySelectorAll("#quickBtns button").forEach(btn => {
  btn.addEventListener("click", () => {
    parseCommand(btn.dataset.cmd);
  });
});
