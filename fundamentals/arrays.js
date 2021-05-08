const arr = [1, 2, 3, 4, 5, 6];
console.log(arr[0], arr[5]);

arr[6] = 7;
console.log(arr);

arr.push({ id: 1010 }, null, undefined, "Natã");
console.log(arr);

console.log(arr.pop());
delete arr[0];
console.log(arr);

console.log(typeof arr); //objeto
