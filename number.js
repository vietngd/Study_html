// var age = 18;
// var PI = 3.1444123248;

// var result = 20 / "abc";
// console.log((result = 20 / "abc"));
// console.log(isNaN(result)); // kime tra xem cos phai so hop le khong
// // Lam viec voi Number
// console.log(PI.toFixed(7));

var language = ["Javascript", "PHP", "Ruby", "Dart"];
// console.log(language.toString()); // chuyen kieu du lieu arr sang kieu string
// console.log(language.join(" - ")); // thay doi dau phay
// console.log(language.pop()); // xoa element cuoi mang va tra ve phan tu da xoa
// console.log(language.push("C++")); // them 1 phan tu vao cuoi mang va tra ve do dai cua mang sau khi them
// console.log(language.shift()); // xoa di phan tu cua dau mang va in ra phan tu da xoa
// console.log(language.unshift("HTML")); // them 1 1phan tu vao dau mang va in ra do dai phan tu
// console.log(language.splice(1, 1, "chèn thêm")); // xoa, cat, chen phan tu moi vao mang
// var language2 = ["C++", "Python"];
// console.log(language.concat(language2)); //merge 2 mang
console.log(language.slice(3)); // cat phan tu trong mang
console.log(language);

function getLastElement(array) {
  console.log(array[array.length - 1]);
  console.log(array.slice(array.length - 1));
  console.log(array.slice(0, 1));
}

var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
