import cards from './index.js';

describe('my TodoList class ', () => {
  const kk = cards;
  test('add a new task', () => {
    kk.addTask('add the task');
    expect(kk).tobe(1);
  });
});
