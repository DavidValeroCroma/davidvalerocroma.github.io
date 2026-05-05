const navButtons = document.querySelectorAll('.nav-btn');
const backButtons = document.querySelectorAll('.back-btn');
const pages = document.querySelectorAll('.page');

let currentPageId = 'hero-page';

function showPage(pageId) {
  if (currentPageId === pageId) return;

  const targetPage = document.getElementById(pageId);
  const currentPage = document.getElementById(currentPageId);

  if (!targetPage) return;

  if (currentPage) {
    currentPage.classList.remove('active');
  }

  targetPage.classList.add('active');
  currentPageId = pageId;
}

// Navigation button listeners
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const pageName = button.getAttribute('data-page');
    showPage(`${pageName}-page`);
  });
});

// Back button listeners
backButtons.forEach(button => {
  button.addEventListener('click', () => {
    showPage('hero-page');
  });
});

// Initialize with hero page
showPage('hero-page');
