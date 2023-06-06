const list = document.querySelector('mobile-nav-list');
const modal = document.querySelector('modal-header');

list.addEventListener('click', e => {
  const target = e.target;
  if (target.classList.contains('mobile-nav-link')) {
    modal.classList.remove('active');
  }
});
