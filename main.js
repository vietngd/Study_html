var a = 3;
var b = 1;
var result = 0 || "M" || undefined || NaN;
console.log("result:", result);
if (result) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}
// function showDialog() {
//   alert("Hi,Xin chao cac ban!");
// }
// showDialog();

function writeLog() {
  for (var param of arguments) {
    //element dau tien s gan vao bien param roi lap di lap lai dn het mang argurments
    console.log(param);
  }
}
writeLog("Log1", "Log2", "Log3");
//merge
var lastName = "Nguyen Duc Viet";
var firstName = "PTIT";
function fullName() {
  console.log(`Toi la: ${lastName} ${firstName}`); // Toi la: Nguyen Duc Viet PTIT
}
fullName();

// expression function
function showMessage2() {
  console.log("GFdhdvferf");
}
setTimeout(function () {
  //   alert("Hi");
}, 1000);
var myObject = function () {
  console.log("ABC");
};
showMessage2();

//Tao chuoi
var fullName = 'Nguyen Duc Viet hoc "PTIT"';
console.log(fullName.length); // 26
//Template String
var myString = "Hoc JS tai JS JS F8";
console.log(myString.indexOf("JS", 1)); // 4 myString.indexOf('') : tim vi tri cu the cua phan tu( lastIndexOf: vi tri cuoi cung)
console.log(myString.slice(0, 7)); // cat chuoi tu phan tu 0 den phan tu 7: Hoc JS
// Replace
console.log(myString.replace(/JS/g, "JavaScript")); // ('JS' ,'JV') : thay doi 1 chuoi (/JS/,'JV'): ghi de tat ca chu "JS" thanh "JV" dgl bieu thuc chinh quy
// Covert to upper caser: chuyen doi tat ca chuoi thanh chu hoa
console.log(myString.toUpperCase());
// convert to lower caser: chu hoa thanh chu thuong
console.log(myString.toLowerCase());
// Trim: loai bo khoang trang thua o trong chuoi
console.log(myString.trim());
// split
var languages = "Javafa, PHfP, Rufby";
console.log(languages.split("f")); // ket qua se la: ['Java' , 'a, PH', 'P,Ru','by']
// get a charactor by index
const myString2 = "Nguyen Duc Viet";
console.log(myString2[3]);
var num = 1234.917188;
