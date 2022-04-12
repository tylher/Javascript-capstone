import './style.css';

fetch('https://api.tvmaze.com/shows')
  .then((respose) => respose.json())
  .then((jsonData) => jsonData);