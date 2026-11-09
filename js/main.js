"use strict";
const grid = document.querySelector('#movie-grid');
const status = document.querySelector('#status');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
let movies = null;
function poster(movie, index) {
  if (movie.poster) { const img = document.createElement('img'); img.className = 'poster'; img.src = movie.poster; img.alt = movie.title + ' poster'; img.loading = 'lazy'; img.onerror = () => img.replaceWith(placeholder(movie, index)); return img; }
  return placeholder(movie, index);
}
function placeholder(movie, index) {
  const el = document.createElement('div'); el.className = 'poster'; el.dataset.tone = String(index % 3);
  const top = document.createElement('div'); top.className = 'poster-top'; top.textContent = 'FRAME BY FRAME';
  const art = document.createElement('div'); art.className = 'poster-art'; const name = document.createElement('span'); name.textContent = movie.title; art.append(name);
  const bottom = document.createElement('div'); bottom.className = 'poster-bottom'; bottom.textContent = 'FILM / ' + movie.year;
  el.append(top, art, bottom); return el;
}
function card(movie, index) {
  const a = document.createElement('a'); a.className = 'movie-card'; a.href = 'movie.html?id=' + encodeURIComponent(movie.id); a.setAttribute('aria-label', movie.title + ', ' + movie.rating + ' out of 10'); a.append(poster(movie,index));
  const meta = document.createElement('div'); meta.className = 'card-meta'; meta.textContent = movie.year + '  /  ' + movie.genre;
  const title = document.createElement('h3'); title.className = 'card-title'; title.textContent = movie.title;
  const rating = document.createElement('div'); rating.className = 'rating'; rating.textContent = '★ ' + movie.rating + ' '; const suffix = document.createElement('small'); suffix.textContent = '/ 10'; rating.append(suffix);
  const desc = document.createElement('p'); desc.className = 'card-review'; desc.textContent = movie.shortReview || 'Review coming soon.';
  a.append(meta, title, rating, desc); return a;
}
function render() {
  if (movies === null) return;
  const q = search.value.trim().toLocaleLowerCase(); let results = movies.filter(m => m.title.toLocaleLowerCase().includes(q));
  if (sort.value !== 'default') { const [field,dir] = sort.value.split('-'); const key = field === 'rating' ? 'rating' : 'year'; results = [...results].sort((a,b) => dir === 'desc' ? b[key]-a[key] : a[key]-b[key]); }
  grid.replaceChildren(...results.map((m,i)=>card(m,i)));
  status.textContent = results.length ? '' : 'No films found. Try another title.';
}
search.addEventListener('input',render); sort.addEventListener('change',render);
fetch('data/movies.json').then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); }).then(data => {if(!Array.isArray(data))throw new Error('Data format'); movies=data; document.querySelector('#total-count').textContent=String(movies.length).padStart(2,'0')+' FILMS IN THE COLLECTION';render();}).catch(()=>{status.textContent='無法載入電影資料。請用本機伺服器或 GitHub Pages 開啟網站。';});
