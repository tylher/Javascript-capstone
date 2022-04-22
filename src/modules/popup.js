const temp = ({
  genres, image, language, summary, name, status,
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
                  <div
                    class="inner-star-rating"
                  >
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
          <section class="comments">
            <div class="show-comments">
              <h3 class='title()'>Comments</h3>
              <ul class="comments-holder"></ul>
            </div>
            <div class="add-comment">
              <h3>Add new comment</h3>
              <form>
                <input type="text" class="username" placeholder="Your name" />
                <textarea class="usercomment" placeholder="Your insight"></textarea>
                <button type="button">Comment</button>
              </form>
            </div>
          </section>
        </div>
      </div>
  `;

  return card;
};

// const id = 'jvrwtpOKv3EF9dzf4scl';

function renderPopUp(func) {
  const popup = document.querySelector('.popup');
  popup.insertAdjacentHTML('beforeend', func);
}

export { temp, renderPopUp };
