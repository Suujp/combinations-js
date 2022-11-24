const combinations = (elements, k) => {
  const ans = [];
  if (elements.length < k || k <= 0) {
    ans.push([]);
  } else if (k === 1) {
    for (let i = 0; i < elements.length; i++) {
      ans[i] = [elements[i]];
    }
  } else {
    for (let i = 0; i < elements.length - k + 1; i++) {
      const tmp = combinations(elements.slice(i + 1), k - 1);
      for (let j = 0; j < tmp.length; j++) {
        ans.push([elements[i]].concat(tmp[j]));
      }
    }
  }

  return ans;
};

const elements = [1, 2, 3, 4, 5];
const k = 3;
console.log(combinations(elements, k));