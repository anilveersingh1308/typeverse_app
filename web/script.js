document.addEventListener("DOMContentLoaded", () => {
    const typingBox = document.querySelector(".typing-box p");
    const text = typingBox.textContent.trim();
    let currentIndex = 0;
  
    // Split the text into spans for individual letters
    typingBox.innerHTML = text
      .split("")
      .map((char, index) => `<span data-index="${index}">${char}</span>`)
      .join("");
  
    const spans = typingBox.querySelectorAll("span");
  
    // Highlight the first letter
    spans[currentIndex].classList.add("highlight");
  
    // Listen for keypress events
    document.addEventListener("keydown", (event) => {
      const key = event.key;
  
      // Ignore non-character keys
      if (key.length > 1) return;
  
      const currentSpan = spans[currentIndex];
  
      // Check if the typed key matches the current letter
      if (currentSpan.textContent === key) {
        currentSpan.classList.remove("highlight");
        currentSpan.classList.add("correct");
  
        // Move to the next letter
        currentIndex++;
        if (currentIndex < spans.length) {
          spans[currentIndex].classList.add("highlight");
        }
      } else {
        // Add an error effect if the key doesn't match
        currentSpan.classList.add("error");
        setTimeout(() => currentSpan.classList.remove("error"), 200);
      }
  
      // Highlight the pressed key on the virtual keyboard
      const virtualKey = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
      if (virtualKey) {
        virtualKey.classList.add("active");
        setTimeout(() => virtualKey.classList.remove("active"), 200);
      }
    });
  });
