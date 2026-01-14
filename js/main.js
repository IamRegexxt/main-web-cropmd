document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('learn-more');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const dataTarget = btn.getAttribute('data-target');
    const href = btn.getAttribute('href');
    const targetId = (dataTarget || (href && href.startsWith('#') ? href.slice(1) : null) || 'features').trim();

    if (!targetId) {
      console.warn('Learn more: no target specified.');
      return;
    }

    const targetEl = document.getElementById(targetId) || document.querySelector(`a[name="${targetId}"]`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // make the element focusable and focus it for accessibility (tabindex added in HTML recommended)
      try { targetEl.focus({ preventScroll: true }); } catch (err) { /* ignore */ }
    } else {
      console.warn(`Learn more target '#${targetId}' not found.`);
    }
  });
});

