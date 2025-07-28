//Iteratively
function fibs(n) {
  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  console.log("Iteratively:")
  console.log(result);
  return result;
}

fibs(8);


//Recursively
console.log("Recursively:");
function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  
  return fibs;
}

console.log(fibsRec(8));


//Merge Sort
console.log("Merge Sort");
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
console.log(mergeSort([105, 79, 100, 110])); 