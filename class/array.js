// 이메일 마스킹처리하기

const email = "cjt3591@gmail.com";
// undefined
email.includes("@");
// true
email.split("@");
// (2) ['cjt3591', 'gmail.com']
let userMail = email.split("@")[0];
// undefined
userMail;
// 'cjt3591'
let company = email.split("@")[1];
// undefined
company;
// 'gmail.com'
let maskingMail = [];
// undefined
maskingMail.push(userMail[0]);
// 1
maskingMail.push(userMail[1]);
// 2
maskingMail.push(userMail[2]);
// 3
maskingMail.push("*");
// 4
maskingMail.push("*");
// 5
maskingMail.push("*");
// 6
maskingMail.push("*");
// 7
maskingMail;
// (7) ['c', 'j', 't', '*', '*', '*', '*']
maskingMail.join("");
// 'cjt****'
let result = maskingMail.join("") + "@" + company;
// undefined
result;
// 'cjt****@gmail.com'
