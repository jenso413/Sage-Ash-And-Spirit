var topKFrequent = function (nums, k) {
  let dict = {};

  for (let num of nums) {
    if (dict[num] != undefined) {
      dict[num]++;
    } else {
      dict[num] = 1;
    }
  }

  // create bucket
  const bucket1 = Array(nums.length + 1).fill([]);
  console.log(bucket1);

  const bucket = [];
  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  console.log(bucket);

  // populate our bucket
  for (let key in dict) {
    let count = dict[key];
    bucket[count].push(key);
  }

  let res = [];

  // create array from bucket
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length == 0) {
      continue;
    }

    res = [...res, ...bucket[i]];
  }

  return res.slice(0, k);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
