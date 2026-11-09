
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Article search
const searchInput = document.getElementById("searchInput");
const articles = document.querySelectorAll(".article-card");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let visibleCount = 0;

  articles.forEach(article => {
    const matches = article.textContent.toLowerCase().includes(query);
    article.hidden = !matches;

    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
});

// Footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form demo
document.getElementById("contactForm")
  .addEventListener("submit", event => {
    event.preventDefault();

    document.getElementById("formMessage").textContent =
      "Thank you! This demo form is working, but a backend is needed to deliver messages.";

    event.target.reset();
  });
