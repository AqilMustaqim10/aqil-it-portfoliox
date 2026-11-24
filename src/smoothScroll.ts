const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let target = window.scrollY;
let frame = 0;

function stop() {
  cancelAnimationFrame(frame);
  frame = 0;
  target = window.scrollY;
}

function animate() {
  const next = window.scrollY + (target - window.scrollY) * 0.12;
  window.scrollTo({ top: next, behavior: 'instant' });
  if (Math.abs(target - next) > 0.5) frame = requestAnimationFrame(animate);
  else {
    window.scrollTo({ top: target, behavior: 'instant' });
    frame = 0;
  }
}

window.addEventListener('wheel', (event) => {
  if (event.ctrlKey || reducedMotion.matches || event.deltaY === 0) return;
  for (let element = event.target as HTMLElement | null; element && element !== document.body; element = element.parentElement) {
    const overflow = getComputedStyle(element).overflowY;
    if (/(auto|scroll)/.test(overflow) && element.scrollHeight > element.clientHeight &&
      ((event.deltaY < 0 && element.scrollTop > 0) || (event.deltaY > 0 && element.scrollTop + element.clientHeight < element.scrollHeight - 1))) return;
  }
  event.preventDefault();
  if (!frame) target = window.scrollY;
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
  target = Math.max(0, Math.min(target + delta, document.documentElement.scrollHeight - window.innerHeight));
  if (!frame) frame = requestAnimationFrame(animate);
}, { passive: false });

window.addEventListener('touchstart', stop, { passive: true });
window.addEventListener('keydown', stop);
window.addEventListener('mousedown', stop);
