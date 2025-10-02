// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".landing-header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Typing effect for hero text
const typingText = document.querySelector(".typing-text");
const text = "🚀 រៀនអនឡាញបានគ្រប់ទីកន្លែង";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Scroll animation for cards
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
