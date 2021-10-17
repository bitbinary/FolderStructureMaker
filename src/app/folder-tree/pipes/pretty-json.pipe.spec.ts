import { PrettyJSONPipe } from './pretty-json.pipe';

describe('PrettyJSONPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyJSONPipe();
    expect(pipe).toBeTruthy();
  });
});
