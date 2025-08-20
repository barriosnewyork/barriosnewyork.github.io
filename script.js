// Accessible tabs using the boolean `hidden` attribute on panels
const tabs   = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('.panel');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    // reset all
    tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
    panels.forEach(p => p.hidden = true);

    // set new state
    btn.setAttribute('aria-selected', 'true');
    const id    = btn.getAttribute('aria-controls'); // e.g., "writing"
    const panel = document.getElementById(id);
    if (panel) panel.hidden = false;
  });
});
