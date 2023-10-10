document.addEventListener("DOMContentLoaded", function () {
    function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  
    // Gulingkan ke elemen dengan ID yang sesuai saat halaman dimuat
    const targetId = window.location.hash.substring(1);
    if (targetId) {
      scrollToElement(targetId);
    }
  
  });
  
  function showLeftContent() {
    const leftContent = document.getElementById('left-content');
    const rightContent = document.getElementById('right-content');
    leftContent.style.display = 'flex';
    rightContent.style.display = 'none';
    leftContent.classList.remove('fadeOut');
    leftContent.classList.add('fadeIn');
    rightContent.classList.remove('fadeIn');
    rightContent.classList.add('fadeOut');
}

function showRightContent() {
    const leftContent = document.getElementById('left-content');
    const rightContent = document.getElementById('right-content');
    leftContent.style.display = 'none';
    rightContent.style.display = 'flex';
    leftContent.classList.remove('fadeIn');
    leftContent.classList.add('fadeOut');
    rightContent.classList.remove('fadeOut');
    rightContent.classList.add('fadeIn');
}
