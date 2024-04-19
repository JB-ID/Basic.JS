const arr = ["Andrew", "Bob", "Clark", "David", "Ethan", "Fernando", "Gabriel"];
console.log("1. " + arr.join(","));

const tambahan = ["Harold", "Iglesias", "Jackson"];
console.log("2. " + arr.join(",") + "," + tambahan.join(","));

console.log("3. " + arr[1], arr[3], arr[5]);

tambahan.pop();
console.log("4. " + arr.join(",") + "," + tambahan.join(","));

arr.shift();
console.log("5. " + arr.join(",") + "," + tambahan.join(","));

arr.unshift("Andy");
console.log("6. " + arr.join(",") + "," + tambahan.join(","));

arr.splice(5, 1, "Francesco");
console.log("7. " + arr.join(","));

arr.splice(4, 1);
console.log("8. " + arr.join(","));
