window.addEventListener('load', () => {
  setTimeout(function () {
    const loader = document.querySelector('.loader');
    if (loader !== null) {
      loader.classList.add('loader--hidden');
      loader.addEventListener('transitionend', () => {
        try {
          document.body.removeChild(loader);
        } catch (err) {
          console.log('loading.js', err);
        }
      });
    }
  }, 1000);
});
