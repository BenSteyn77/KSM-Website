const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll(".page");
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

function showPage(pageName, shouldScroll = true) {
  pages.forEach((page) => page.classList.remove("active"));
  const selected = document.getElementById(`page-${pageName}`);
  if (selected) selected.classList.add("active");

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === pageName);
  });

  if (shouldScroll) window.scrollTo({ top: 0, behavior: "smooth" });
  window.location.hash = pageName === "home" ? "#home" : `#${pageName}`;
  closeMenu();
}

function closeMenu() {
  navMenu.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pageName = link.dataset.pageLink;
    showPage(pageName);
  });
});

document.querySelectorAll(".anchor-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href");
    if (!target || !target.startsWith("#")) return;

    event.preventDefault();

    if (target === "#contact" || target === "#faq") {
      showPage("home", false);
      setTimeout(() => {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }

    closeMenu();
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("open"));
    if (!wasOpen) item.classList.add("open");
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("year").textContent = new Date().getFullYear();

function loadPageFromHash() {
  const page = window.location.hash.replace("#", "");
  if (["home", "social", "paid", "web"].includes(page)) {
    showPage(page, false);
  }
}

loadPageFromHash();
window.addEventListener("hashchange", loadPageFromHash);
