export const comparisonTestResults = (
  userResult: Array<boolean>,
  otherResult: Array<boolean>
): string => {
  let count = 0;
  userResult.map((result, index) => {
    if (result === otherResult[index]) {
      count += 1;
    }
  });
  return ((count * 100) / 6).toFixed(2);
};
