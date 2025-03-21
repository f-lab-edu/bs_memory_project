import { diff_match_patch } from 'diff-match-patch';

const dmp = new diff_match_patch();

const getExamResultHTML = (input: string, answer: string) => {
  const diff = dmp.diff_main(input, answer);
  return dmp.diff_prettyHtml(diff);
};

export default getExamResultHTML;
