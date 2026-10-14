'use strict';
const data = window.GRACEBENCH;
document.getElementById('abstract-text').textContent = data.abstract;
const film = document.getElementById('research-film');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reducedMotion.matches) { film.autoplay = false; film.pause(); }
document.querySelectorAll('[data-seek]').forEach(button => button.addEventListener('click', () => { film.currentTime = Number(button.dataset.seek); film.play().catch(() => {}); }));
let storedTime = 0;
try { storedTime = Number(localStorage.getItem('gracebench-film-v3')) || 0; } catch { /* Optional storage. */ }
let readyToStore = false;
film.addEventListener('loadedmetadata', () => { if (storedTime > 0 && storedTime < film.duration - 1) film.currentTime = storedTime; else readyToStore = true; });
film.addEventListener('seeked', () => { readyToStore = true; });
let lastSaved = -1;
film.addEventListener('timeupdate', () => {
  const second = Math.floor(film.currentTime);
  if (readyToStore && second !== lastSaved) { try { localStorage.setItem('gracebench-film-v3', String(second)); } catch { /* Optional storage. */ } lastSaved = second; }
});
let resumeWhenVisible = false;
new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) { resumeWhenVisible = !film.paused; film.pause(); }
  else if (resumeWhenVisible && !reducedMotion.matches) { film.play().catch(() => {}); resumeWhenVisible = false; }
}, { threshold: .1 }).observe(film);

let condition = 'detailed', sortColumn = 0, ascending = false;
const lowerIsBetter = index => [2, 3, 6].includes(index);
function renderResults() {
  const rows = [...data.results[condition]];
  const best = Array.from({ length: 7 }, (_, index) => Math[lowerIsBetter(index) ? 'min' : 'max'](...rows.map(row => row.scores[index])));
  rows.sort((a, b) => (ascending ? 1 : -1) * (a.scores[sortColumn] - b.scores[sortColumn]));
  document.getElementById('results-body').innerHTML = rows.map(row => `<tr><td>${row.model}</td>${row.scores.map((value, index) => `<td${value === best[index] ? ' class="best"' : ''}>${value.toFixed(4)}</td>`).join('')}</tr>`).join('');
  document.getElementById('table-caption').textContent = `${condition === 'detailed' ? 'Detailed' : 'Concise'} instructions · 169 tasks per model`;
  document.querySelectorAll('[data-condition]').forEach(button => { const selected = button.dataset.condition === condition; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('[data-sort]').forEach(button => { button.parentElement.removeAttribute('aria-sort'); if (Number(button.dataset.sort) === sortColumn) button.parentElement.setAttribute('aria-sort', ascending ? 'ascending' : 'descending'); });
}
document.querySelectorAll('[data-condition]').forEach(button => button.addEventListener('click', () => { condition = button.dataset.condition; renderResults(); }));
document.querySelectorAll('[data-sort]').forEach(button => button.addEventListener('click', () => { const index = Number(button.dataset.sort); ascending = index === sortColumn ? !ascending : lowerIsBetter(index); sortColumn = index; renderResults(); }));
renderResults();
const dialog = document.getElementById('figure-dialog');
document.querySelectorAll('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const image = document.getElementById('dialog-image'); image.src = link.href; image.alt = link.querySelector('img').alt; dialog.showModal();
}));
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.getElementById('copy-citation').addEventListener('click', async event => {
  const button = event.currentTarget, content = document.getElementById('bibtex');
  try { await navigator.clipboard.writeText(content.textContent); button.textContent = 'Copied'; document.getElementById('copy-status').textContent = 'BibTeX copied to clipboard.'; setTimeout(() => { button.textContent = 'Copy'; }, 2000); }
  catch { const range = document.createRange(); range.selectNodeContents(content); window.getSelection().removeAllRanges(); window.getSelection().addRange(range); button.textContent = 'Press Ctrl/Cmd+C'; document.getElementById('copy-status').textContent = 'Citation selected for copying.'; }
});
