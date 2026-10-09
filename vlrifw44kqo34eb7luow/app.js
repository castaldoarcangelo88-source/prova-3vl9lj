(function () {
  var box = document.getElementById('consenso');
  if (!box) return;
  var btns = document.querySelectorAll('.pay-btn');
  var hint = document.getElementById('pay-hint');
  function sync() {
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (box.checked) { b.setAttribute('href', b.getAttribute('data-href')); b.removeAttribute('aria-disabled'); }
      else { b.removeAttribute('href'); b.setAttribute('aria-disabled', 'true'); }
    }
    if (hint) hint.hidden = box.checked;
  }
  box.checked = false;
  box.addEventListener('change', sync);
  sync();
})();
