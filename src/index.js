import './style.css';

fetch('https://api.tvmaze.com/search/shows?q=spiderman')
  .then((respose) => respose.json())
  .then((jsonData) => jsonData);