const getLength = () => {
  const commentItem = document.querySelectorAll('.comment-item');
  return commentItem.length;
};

const displayCommentLength = () => {
  const commentHeader = document.querySelector('.show-comments>h3');
  commentHeader.innerHTML += ` ( ${getLength()} )`;
};

export default displayCommentLength;