
  
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
