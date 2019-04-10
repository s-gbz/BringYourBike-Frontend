import { IssueNumToStrPipe } from './issue-num-to-str.pipe';

describe('IssueNumToStrPipe', () => {
  it('create an instance', () => {
    const pipe = new IssueNumToStrPipe();
    expect(pipe).toBeTruthy();
  });
});
