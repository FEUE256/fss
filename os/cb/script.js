  const toggleBtn = document.getElementById('toggleRoadmap');
  const fontSelector = document.getElementById('fontSelector');
  const pageTitle = document.getElementById('pageTitle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
      toggleBtn.textContent = 'Switch to Dark Mode';
    } else {
      toggleBtn.textContent = 'Switch to Light Mode';
    }
  });

  fontSelector.addEventListener('change', () => {
    document.body.style.fontFamily = fontSelector.value;
    pageTitle.style.fontFamily = fontSelector.value;
  });
