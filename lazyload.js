(function(window, document) {
  window.addEventListener('DOMContentLoaded', lazyLoad);
  window.addEventListener('scroll', () => {
    throttle(lazyLoad(), 100);
  });
    
  function lazyLoad() {
    const elms = document.querySelectorAll('img, iframe');
    for (let i = 0; i < elms.length; i++) {
      if ((elms[i].getBoundingClientRect().top - window.innerHeight < 0) && elms[i].getAttribute('data-src')) {
        elms[i].setAttribute('src', elms[i].getAttribute('data-src'));
        elms[i].removeAttribute('data-src');
      }
    }
  }
  
  function throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait) < Date.now()) {
        fn();
        time = Date.now();
      }
    }
  }
})(window, document);
