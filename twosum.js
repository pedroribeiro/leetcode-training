var twoSum = function (nums, target) {
  let map = {};

  for (const [i, item] of nums.entries()) {
    let rem = target - item;
    if (map[rem] || map[rem] === 0) {
      return [map[rem], i];
    }
    map[item] = i;
  }
};