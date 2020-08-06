import { CapitalWordPipe } from './capital-word.pipe';

describe('CapitalWordPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalWordPipe();
    expect(pipe).toBeTruthy();
  });
});
