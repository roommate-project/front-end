export const checkItemGender = ['남자', '여자'];
export const checkItemHost = ['집 소유자만 보기', '룸메이트만 보기'];
export const checkItemRoom = ['기숙사', '원룸', '투룸', '쓰리룸이상'];
export const matchingRate = [...new Array(21)].map((_, i) => 5 * i);
export const rangeData = [
  {
    name: '거주기간',
    min: 'minMonth',
    max: 'maxMonth',
    maxValue: 25,
    unit: 1,
    index: ' 개월',
  },
  {
    name: '나이',
    min: 'minAge',
    max: 'maxAge',
    maxValue: 101,
    unit: 1,
    index: ' 세',
  },
  {
    name: '월세',
    min: 'minCost',
    max: 'maxCost',
    maxValue: 105,
    unit: 5,
    index: ' 만원',
  },
];
