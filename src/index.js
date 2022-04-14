import './style.css';

const displayItem = (results) => {
  const card = document.querySelector('.cards');
  card.innerHTML = '';
  results.forEach((item) => {
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="${item.image.medium}">
                         <p class="movi-title">${item.name}</p>
                         <button type="submit" class="reservation-btn">Reservation</button>`;
    card.appendChild(scoreLi);
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
                         <p class="movi-title">${item.name}</p>`;
    card.appendChild(scoreLi);
  });
};

const BASE_URL = `https://api.tvmaze.com/search/shows?q=blac`;
  fetch(BASE_URL)
  .then((respose) => respose.json())
  .then((jsonData) => {
   const result = jsonData.map((item) => item.show);
    displayhomeItem(result);
    })
