const getFixedValue = (value, multiple) => {
  let fixedValue;
  if (multiple) {
    fixedValue = value;
  } else {
    fixedValue = value && value.slice(0, 1);
  }

  if (fixedValue) {
    return fixedValue;
  }

  // 如果不是数组， 返回数组兜底
  return [];
};

export default {
  getFixedValue,
};
