// src/scripts/whatsapp.js
// Bulk order WhatsApp link builder
// Reads pack size dropdown + quantity input + business name → builds wa.me URL

(function () {
  const form = document.getElementById('bulk-wa-form');
  const btn = document.getElementById('bulk-wa-btn');
  const waNumber = btn?.dataset.wa;

  if (!form || !btn || !waNumber) return;

  function buildLink() {
    const packSize = form.querySelector('#pack-size')?.value || '1 kg';
    const qty = form.querySelector('#qty')?.value || '1';
    const biz = form.querySelector('#biz-name')?.value?.trim() || '';

    const lines = [
      'Hi! I would like to get a bulk quote for Tea Reserve CTC Tea.',
      `Pack size: ${packSize}`,
      `Quantity: ${qty} units`,
    ];
    if (biz) lines.push(`Business: ${biz}`);

    const message = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${waNumber}?text=${message}`;
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const qty = parseInt(form.querySelector('#qty')?.value || '1', 10);
    if (isNaN(qty) || qty < 1) {
      alert('Please enter a valid quantity (minimum 1).');
      return;
    }
    window.open(buildLink(), '_blank', 'noopener,noreferrer');
  });

  // Update button label preview on change
  ['#pack-size', '#qty'].forEach(sel => {
    form.querySelector(sel)?.addEventListener('change', () => {
      // Re-enable button after any change
      btn.removeAttribute('disabled');
    });
  });
})();
