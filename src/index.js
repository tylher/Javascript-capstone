import './style.css';
import './popup.css';
import './media.css';
import { temp, renderPopUp } from './modules/popup.js';
import getShow from './modules/get-show.js';
import displayComment from './modules/commentTemp.js';
import { updateLikes } from './modules/save-get-likes.js';

const card = document.querySelector('.cards');
const numberItem = document.querySelector('.number');
const acceil = document.querySelector('.title');
const searchArea = document.querySelector('.Search');
const homecard = document.querySelector('.home_cards');
const displayhomeItem = (result) => {
  homecard.innerHTML = '';
  result.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="${item.image.medium}">
                         <p class="movi-title">${item.name}</p>
                         <div class='buttons-holder'>
                         <button type="submit" class="comment-btn">Comment</button>
                         <div class='likes-holder'>
                         <i class="fa-regular fa-heart"></i><span class='likes-num'>0</span>
                         </div>
                         </div>`;
    homecard.appendChild(scoreLi);
  });
  const cards = document.querySelectorAll('.card');
  numberItem.textContent = cards.length;
};

const displayItem = (results) => {
  card.innerHTML = '';
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="${item.show.image.original}">
                         <p class="movi-title">${item.show.name}</p>
                         <div class='buttons-holder'>
                         <button type="submit" class="comment-btn">Comment</button>
                         <div class='likes-holder'>
                          <i class="fa-regular fa-heart"></i><span class='likes-num'>0</span>
                          </div>
                         </div>`;
    card.appendChild(scoreLi);
  });
  const cards = document.querySelectorAll('.card');
  numberItem.textContent = cards.length;
};

const backgroundBlur = () => {
  const popup = document.querySelector('.popup');
  const cover = document.querySelector('.cover');
  const body = document.querySelector('body');
  popup.style.display = 'flex';
  cover.style.display = 'block';
  body.style.overflowY = 'hidden';
  const closeBtn = document.querySelector('.fa-xmark');
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    cover.style.display = 'none';
    body.style.overflowY = 'auto';
  });
};

const setRatingwidth = (item) => {
  const fullWidth = document.querySelector('.star-rating').offsetWidth;
  const rating = document.querySelector('.inner-star-rating');
  rating.style.width = `${fullWidth * (item.rating.average / 10)}px`;
};

const displayPopUp = async (id) => {
  const popup = document.querySelector('.popup');
  const result = await getShow(id);
  popup.innerHTML = '';
  renderPopUp(temp(result));
  backgroundBlur();
  displayComment(id);
  setRatingwidth(result);
  return '';
};

const searchShow = async (query) => {
  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;
  const respose = await fetch(BASE_URL);
  const res = await respose.json();
  const results = res.map((item) => item);
  displayItem(results);
  updateLikes(results);
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;
      results.map((item) => {
        if (NAME === item.show.name) {
          displayPopUp(item.show.id);
        }
        return '';
      });
    });
  });
};

const displayHomePage = async () => {
  const BASE_URL = 'https://api.tvmaze.com/shows';
  const respose = await fetch(BASE_URL);
  const res = await respose.json();
  const result = res.map((item) => item);
  displayhomeItem(result);
  updateLikes(result);
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((comment) => {
    comment.addEventListener('click', (e) => {
      const NAME = e.target.parentElement.parentElement.childNodes[2].textContent;
      result.map((item) => {
        if (NAME === item.name) {
          displayPopUp(item.id);
        }
        return '';
      });
    });
  });
};

let setTimeoutTOken = 0;
window.onload = () => {
  clearTimeout(setTimeoutTOken);
  searchArea.onkeyup = () => {
    if (searchArea.value !== '') {
      card.classList.add('block');
      card.classList.remove('none');
      acceil.classList.add('none');
      acceil.classList.remove('block');
      homecard.innerHTML = '';
    } else {
      card.classList.add('none');
      card.classList.remove('block');
      acceil.classList.add('block');
      acceil.classList.remove('none');
    }
    setTimeoutTOken = setTimeout(() => {
      searchShow(searchArea.value);
    }, 350);
  };
};

searchArea.addEventListener('input', (e) => {
  e.preventDefault();
  if (e.target.value.trim() === '') {
    displayHomePage();
  }
});

displayHomePage();

export default displayItem;