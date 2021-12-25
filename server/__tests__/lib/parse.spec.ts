import { getPageBlocks } from 'src/lib/parse';
import examplePageData from './examplePageData.json';

describe('노션 페이지 파싱 테스트', () => {
  test('getPageBlocks', () => {
    expect(getPageBlocks(examplePageData)).toEqual([]);
  });
});
