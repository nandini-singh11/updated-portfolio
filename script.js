const themes = [
  {
    text: "Nandini Singh",
    bgColor: "#fdeef3",
    textColor: "#e91e63"
  },
  {
    text: "Web Developer",
    bgColor: "#e3f2fd",
    textColor: "#2196f3"
  },
  {
    text: "DevOps Learner",
    bgColor: "#e8f5e9",
    textColor: "#4caf50"
  }
];

let index = 0;

function applyTheme(theme) {
  document.getElementById("typing-text").textContent = theme.text;
  document.body.style.backgroundColor = theme.bgColor;
  document.body.style.color = theme.textColor;
  document.querySelector("header").style.color = theme.textColor;

  // Update section text color
  document.querySelectorAll("section h2, section p, section li").forEach(el => {
    el.style.color = theme.textColor;
  });
}

function cycleThemes() {
  applyTheme(themes[index]);
  index = (index + 1) % themes.length;
}

setInterval(cycleThemes, 3000);
cycleThemes(); // Initial call

// Dark Mode Toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Back to Top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Dark Mode Toggle
document.getElementById('dark-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
