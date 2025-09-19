function typeWriter(element, text, delay = 100) {
  let i = 0;
  element.textContent = "";
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    }
  }
  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("typing-text");  const subtitle = document.getElementById("typing-subtitle");

  typeWriter(title, "Vanessa Hudsmar", 120);

  setTimeout(() => {
    subtitle.classList.add("fade-in");
  }, 2000);
});

