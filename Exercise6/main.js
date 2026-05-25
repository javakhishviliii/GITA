// // 1) 1
// 5
// 4
// 3
// 2

// // 2) 1
// 5
// 3
// 2
// 4


// დაწერეთ სლიფ ფუნქცია რომელიც პარამეტრად მიიღებს მილიწამს და დაიძინებს, ანუ სისტემა გაჩერდება პარამეტრის მიხედვით. await sleep(1000) სადაც ამ ფუნცქიას გამოიყენებთ 1 წამი უნდა გაჩერდეს ხოლმე სისტემა, გაითვალისწინეთ await ით უნდა გააჩეროთ ანუ პრომისი უნდა დააბრუნოს ფუნქციამ

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log("start");

  await sleep(1000);

  console.log("1 wamis shemdeg");
}

main();


//  დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს რიცხვს 1-დან 20-მდე თქვენი მიზანია ფუნცქიის შიგნით ფუნქციამ ყოველ 1 წამში რენდომ რიცხვი დააგენერიროს მანამ სანამ რენდომ დაგენერირებული რიცხვი არ დამეთხვევა პარამეტს, როგორც კი ისინი ერთმანეთს დაემთხვევა გააჩერეთ რენდომ რიცხვის დალოგვა

function randomUntilMatch(target) {

  const interval = setInterval(() => {

    const randomNumber = parseInt(Math.random() * 20) + 1;

    console.log(randomNumber);

    if (randomNumber === target) {
      console.log("matched");

      clearInterval(interval);
    }

  }, 100);
}

randomUntilMatch(7);

// დაწერეთ ფუნცქია რომელსაც გადაეცემა 2 პარამეტრი 1 - ნებისმიერი რიცხვი 2 - დროის ერთეული მილიწამებში, თქვენი მიზანია დალოგოთ რიცხვები ამ რიცხვიდან 0 მდე იმ დროის ინტერვალში რაც არის მეორე პარამეტრი და 0ზე გააჩეროთ.

function countdown(number, ms) {

  const interval = setInterval(() => {

    console.log(number);

    if (number === 0) {
      clearInterval(interval);
    }

    number--;

  }, ms);

}

countdown(10, 1000);