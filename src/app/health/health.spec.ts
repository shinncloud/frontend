import { Health } from './health';

describe('Health', () => {
  it('should create an instance', () => {
    expect(new Health(
      true,
      200,
      "http://localhost:5000/",
      "http://localhost:5000/",
      "http://localhost:5000/",
      "GET",
      "",
      "localhost:5000",
      "Linux-4.9.184-linuxkit-x86_64-with-debian-9.9",
      "23c730da5aef",
      654
    )).toBeTruthy();
  });
});
