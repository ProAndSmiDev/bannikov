(function() {
  const toggleButton = document.querySelector('.js--toggle-burger');
  const toggleMenu = document.querySelector('.js--toggle-by-burger');

  toggleButton.addEventListener('click', () => {
    if(toggleMenu.hasAttribute('style')) {
      toggleMenu.removeAttribute('style');
    } else {
      toggleMenu.style.left = '0';
    }
  });
})();
