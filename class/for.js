const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "굴" },
];
//     undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits.number + " " + fruits.title);
}
//     undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].number + " " + fruits[i].title);
}
//     VM5548:2 1 레드향
//     VM5548:2 2 샤인머스켓
//     VM5548:2 3 산청딸기
//     VM5548:2 4 한라봉
//     VM5548:2 5 사과
//     VM5548:2 6 애플망고
//     VM5548:2 7 딸기
//     VM5548:2 8 천혜향
//     VM5548:2 9 과일선물세트
//     VM5548:2 10 굴
//     undefined
for (let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i].number} ${fruits[i].title}`);
}
//     VM6078:2 1 레드향
//     VM6078:2 2 샤인머스켓
//     VM6078:2 3 산청딸기
//     VM6078:2 4 한라봉
//     VM6078:2 5 사과
//     VM6078:2 6 애플망고
//     VM6078:2 7 딸기
//     VM6078:2 8 천혜향
//     VM6078:2 9 과일선물세트
//     VM6078:2 10 굴
//     undefined
