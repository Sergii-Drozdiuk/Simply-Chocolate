!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('#overlay-modal-2'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal-1[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active-2');
      overlay.classList.add('active-2');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal-2');

      parentModal.classList.remove('active-2');
      overlay.classList.remove('active-2');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active-2').classList.remove('active-2');
        document.querySelector('.overlay-2').classList.remove('active-2');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active-2').classList.remove('active-2');
    this.classList.remove('active-2');
  });
});
