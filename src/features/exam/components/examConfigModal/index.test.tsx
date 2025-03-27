import { describe, test } from 'vitest';

describe('ExamConfigModal rendering test', () => {
  test('renders "제한시간" input with default value 30', () => {});
  test('renders "순서" select with default value "기본 순"', () => {});
  test('renders "표시" select with default value "장절"', () => {});
});

describe('ExamConfigModal operation test', () => {
  test('when clicks "확인" button, modal shows off and routes to "/exam"');
});
