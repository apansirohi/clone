// Simple accordion: click a trigger to expand/collapse its panel.
// This mirrors what Bootstrap's accordion does under the hood, but written
// by hand so it's clear exactly what's happening.

document.querySelectorAll('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
  });
});
