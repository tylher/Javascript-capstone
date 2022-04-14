const temp = ({
  genres, image, language, summary, name, rating, status,
}) => {
  const card = `
  <div class="popup-card">
        <i class="fa-solid fa-xmark"></i>
        <div class="img-box">
          <img src="${image.original}" alt="" />
        </div>
        <div class="text-box">
          <h2>${name}</h2>
          ${summary}
          <div class="movie-details">
          <div class="flex-grp">
            <div>
              <h4>Genres :</h4>
              <ul class="genres">
                ${genres.map((genre) => `
                <li>${genre}</li>
                `).join('')}
              </ul>
            </div>
            <div>
              <h4>Rating :</h4>
              <div class="star-rating">
                <div class="outer-star-rating">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <div class="inner-star-rating " style="width:${rating.average * 10}%">
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
            <div>
              <h4>Language :</h4>
              <p>${language}</p>
            </div>
            <div>
              <h4>Status :</h4>
              <p>${status}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  `;

  return card;
};

function renderPopUp(func) {
  const popup = document.querySelector('.popup');
  popup.insertAdjacentHTML('beforeend', func);
}

export { temp, renderPopUp };
