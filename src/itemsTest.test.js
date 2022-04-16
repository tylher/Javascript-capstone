import { displayItem } from './index.js';

describe('my TodoList class ', () => {
  const kk = displayItem();
  test('add a new task', () => {
    kk.addTask('add the task');
    expect(kk).tobe(1);
  });
});
