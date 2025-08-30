document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});
