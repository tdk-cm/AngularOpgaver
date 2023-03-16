import { SlowtypePipe } from './slowtype.pipe';

describe('SlowtypePipe', () => {
  it('create an instance', () => {
    const pipe = new SlowtypePipe();
    expect(pipe).toBeTruthy();
  });
});
