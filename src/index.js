import './style.css';
import './popup.css';
import { temp, renderPopUp } from './modules/popup.js';
import getShow from './modules/get-show.js';

const displayItem = (results) => {
  const card = document.querySelector('.cards');
  card.innerHTML = '';
  const like = 0;
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="${item.image.medium}">
                         <p class="movi-title">${item.name}</p>
                         <div>
                         <button type="submit" class="comment-btn">Comment</button>
                         ${like ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'}
                         </div>`;
    card.appendChild(scoreLi);
  });
};

const backgroundBlur = () => {
  const popup = document.querySelector('.popup');
  const cover = document.querySelector('.cover');
  const body = document.querySelector('body');
  cover.classList.add('d-block');
  body.style.overflow = 'hidden';
  const closeBtn = document.querySelector('.fa-xmark');
  closeBtn.addEventListener('click', () => {
    popup.classList.add('d-none');
    cover.classList.remove('d-block');
    body.style.overflowY = 'scroll';
  });
};

const displayPopUp = async (id) => {
  const popup = document.querySelector('.popup');
  await getShow(id).then((data) => {
    popup.innerHTML = '';
    popup.classList.remove('d-none');
    popup.style.zIndex = '1';
    renderPopUp(temp(data));
    backgroundBlur();
  });
};

const searchShow = async (query) => {
  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;
  await fetch(BASE_URL)
    .then((respose) => respose.json())
    .then((jsonData) => {
      const results = jsonData.map((item) => item.show);
      displayItem(results);
    })
    .catch(() => {
      displayItem([]);
    });
};

const acceil = document.querySelector('.title');
const searchArea = document.querySelector('.Search');
let setTimeoutTOken = 0;
window.onload = () => {
  clearTimeout(setTimeoutTOken);
  searchArea.onkeyup = () => {
    if (searchArea.value.trim().legth === 0) {
      return;
    }

    if (searchArea.value !== '') {
      acceil.classList.add('none');
      acceil.classList.remove('block');
    } else {
      acceil.classList.add('block');
      acceil.classList.remove('none');
    }
    setTimeoutTOken = setTimeout(() => {
      searchShow(searchArea.value);
    }, 250);
  };
};

const displayhomeItem = (result) => {
  const card = document.querySelector('.home_cards');
  card.innerHTML = '';
  result.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="${item.image.medium}">
                         <p class="movi-title">${item.name}</p>
                         <button type="submit" class="reservation-btn">Comment</button>`;
    card.appendChild(scoreLi);
  });
};

const BASE_URL = 'https://api.tvmaze.com/search/shows?q=blac';
fetch(BASE_URL)
  .then((respose) => respose.json())
  .then((jsonData) => {
    const result = jsonData.map((item) => item.show);
    displayhomeItem(result);
  });