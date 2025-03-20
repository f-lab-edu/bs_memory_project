import { describe, test } from 'vitest';

describe('ExamPage routing test', () => {
  test('if no selected verses on page reload, it redirects to "/" ');
  test('when clicks "암송하기" or "홈" link, "시험 내용이 초기화 됩니다. 페이지를 벗어나시겠습니까?" confirm message pops up', () => {});
});

describe('ExamPage rendering test', () => {
  test('when starts rendering, nav links and loader renders', () => {});
  test('when suspense resolves, test area replaces loader', () => {});
  test('when suspense rejects, "데이터 조회에 실패했습니다." message and retry button replaces loader', () => {});
});
