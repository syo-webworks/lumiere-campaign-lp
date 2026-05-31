// ==========================================
// Lumière Hair Salon Campaign LP
// script.js
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------
  // ハンバーガーメニュー
  // ------------------------------
  const menuButton = document.querySelector(".lp-menu-button");
  const nav = document.querySelector(".lp-nav");
  const navLinks = document.querySelectorAll(".lp-nav a");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("is-active");
      nav.classList.toggle("is-active");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuButton && nav) {
        menuButton.classList.remove("is-active");
        nav.classList.remove("is-active");
      }
    });
  });

  // ------------------------------
  // スムーススクロール
  // ------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href === "#") return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const header = document.querySelector(".lp-header");
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ------------------------------
  // スクロール時のヘッダー
  // ------------------------------
  const header = document.querySelector(".lp-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    });
  }

  // ------------------------------
  // FAQ開閉
  // ------------------------------
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.setAttribute("aria-expanded", "false");

    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");

      if (faqItem) {
        faqItem.classList.toggle("is-open");

        const isOpen = faqItem.classList.contains("is-open");
        question.setAttribute("aria-expanded", isOpen);
      }
    });
  });
});
