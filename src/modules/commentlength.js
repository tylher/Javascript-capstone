const getLength = () => {
  let size = 0;
  const commentItem = document.querySelectorAll('.comment-item');
  size = commentItem.length;
  return size;
};

const displayCommentLength = () => {
  const commentHeader = document.querySelector('.show-comments>h3');
  commentHeader.innerHTML = `Comments ( ${getLength()} )`;
};

export default displayCommentLength;