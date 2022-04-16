/**
 * @jest-environment jsdom
 */

describe('test item add functionality', () => {
  document.body.innerHTML = `<main class="content">
      <div class="title">
        <div>
          <h1>Discover</h1>
          <h5>New Movies, Actors, Shows, and Genres</h5>
        </div>
        <div class="home_cards"></div>
      </div>
      <div class="cards"></div>
    </main>`;
  const addItem = () => {
    const homecard = document.querySelector('.home_cards');
    const scoreLi = document.createElement('div');
    scoreLi.className = 'card';
    scoreLi.innerHTML = `<img src="">
                         <p class="movi-title"></p>
                         <div>
                         <button type="submit" class="comment-btn">Comment</button>
                         <i class="fa-regular fa-heart"></i><span class='likes-num'>0</span>
                         </div>`;
    homecard.appendChild(scoreLi);
  };

  test('Add a new Item', () => {
    addItem();
    expect(document.querySelector('.home_cards').children.length).toBe(1);
  });
});
