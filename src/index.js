import './style.css';
import './popup.css';
import { temp, renderPopUp } from './modules/popup.js';
import getShow from './modules/get-show.js';

const like = false;
const displayItem = (results) => {
  const card = document.querySelector('.cards');
  card.innerHTML = '';
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<p class="movi-title">${item.name}</p>
                         <img src="${item.image.medium}">
                         <button type="submit" class="reservation-btn">Reservation</button>`;
    card.appendChild(scoreLi);
  });
};

const searchShow = (query) => {
  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(BASE_URL)
    .then((respose) => respose.json())
    .then((jsonData) => {
      const results = jsonData.map((item) => item.show);
      displayItem(results);
      const commentBtn = document.querySelectorAll('.comment-btn');
      commentBtn.forEach((comment) => {
        comment.addEventListener('click', (e) => {
          const NAME = e.target.parentElement.parentElement.childNodes[0].textContent;
          results.map((item) => {
            if (NAME === item.name) {
              displayPopUp(item.id);
            }
            return '';
          });
        });
      });
    })
    .catch(() => {
      displayItem([]);
    });
};

const acceil = document.querySelector('.title');
const searchArea = document.querySelector('.search');
let setTimeoutTOken = 0;
window.onload = () => {
  clearTimeout(setTimeoutTOken);
  searchArea.onkeyup = () => {
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
                         <p class="movi-title">${item.name}</p>`;
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
