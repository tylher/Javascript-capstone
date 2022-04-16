/**
 * @jest-environment jsdom
 */

document.body.innerHTML = ' <div class="home_cards"></div >';

const Createcard = () => {
  const scoreLi = document.createElement('div');
  scoreLi.className = 'card';
  scoreLi.innerHTML = `<img src="">
                         <p class="movi-title"></p>
                         <div>
                         <button type="submit" class="comment-btn">Comment</button>
                         <i class="fa-regular fa-heart"></i><span class='likes-num'>0</span>
                         </div>`;
  return scoreLi;
};

const addItem = () => {
  const homepagetemp = document.querySelector('.home_cards');
  homepagetemp.appendChild(Createcard());
};

test('add an Item', () => {
  const homepagetemp = document.querySelector('.home_cards');
  addItem();
  expect(homepagetemp.childrenList.length).toBe(1);
});