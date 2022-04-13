import './style.css';
import './popup.css';
import { temp, renderPopUp } from './modules/popup.js';
import getShow from './modules/get-show.js';

const displayItem = (results) => {
  const card = document.querySelector('.cards');
  card.innerHTML = '';
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<p class="movi-title">${item.name}</p>
                         <img src="${item.image.original}">
                         <button type="submit" class="comment-btn">Comment</button>`;
    card.appendChild(scoreLi);
  });
};

const displayPopUp = async (id) => {
  await getShow(id).then((data) => {
    renderPopUp(temp(data));
  });
};

const searchShow = (query) => {
  const BASE_URL = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(BASE_URL)
    .then((respose) => respose.json())
    .then((jsonData) => {
      const results = jsonData.map((item) => item.show);
      console.log(results);
      displayItem(results);
      const commentBtn = document.querySelectorAll('.comment-btn');
      commentBtn.forEach((comment) => {
        comment.addEventListener('click', (e) => {
          const NAME = e.target.parentElement.childNodes[0].innerHTML;
          results.map((item) => {
            if (NAME === item.name) {
              console.log(item.id);
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
