const temp = ({
  genres, image, language, summary, name, rating,
}) => {
  const card = `
    <div class="popup-card">
        <div class="img-box">
          <img src='${image.original}' alt="">
        </div>
        <div class="text-box">
          <h2>${name}</h2>
          ${summary}
          <div class="flex-grp">
          <div><h4>Genres : </h4> <ul class="genres">
            ${genres
    .map((genre) => ` <li> ${genre} </li>`)
    .join('')}
        </ul></div>
        <div>
        <h4> Rating : </h4>
        <div class="star-rating">
            <div class="star-rating-group" style="width:${rating.average * 10
}%">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
            </div>
        </div>
    </div>

          </div>
          <div class="flex-grp">
          <div><h4>Language : </h4><p>${language}</p></div>

          <p></p>
          </div>
        </div>

      </div>`;

  return card;
};

function renderPopUp(func) {
  const popup = document.querySelector('.popup');
  popup.insertAdjacentHTML('beforeend', func);
}

export default { temp, renderPopUp };