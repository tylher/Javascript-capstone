import _ from 'lodash';
import './style.css';

fetch("https://api.tvmaze.com/search/shows?q=spiderman")
.then((respose) => {
  return respose.json();
})
.then((jsonData) => {
  console.log(jsonData);
})