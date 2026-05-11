//  დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს ამ სტირნგის აბრივიატურას მაგალითად getAbbr('John Doe') => "J.D"

function getAbbr(fullName) {
    let words = fullName.split(" ")

    return words[0][0] + "." + words[1][0]
}

console.log(getAbbr("John Doe"))
//დაწერეთ ფუნცქია რომელიც არგუმენტად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვების ჯამს მაგ: getSumOfDigit(123) => 6 ახსნა 1 + 2 + 3


function getSumOfDigit(number){
    let numbers = String(number).split('')

    return Number(numbers[0]) +
           Number(numbers[1]) +
           Number(numbers[2]);
}

console.log(getSumOfDigit(333));

// 3) დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს სტრინგს და წაშლის ამ სტრინგიდან ყველა გამეორებად ასოს. მაგ: removeDuplicates('banana') => 'ban'

function removeDuplicates(word){
    let result = ""

    for(let i = 0; i < word.length; i++){

        if(!result.includes(word[i])){
            result += word[i]
        }

    }

    return result
}

console.log(removeDuplicates("zdzdzdzdzd"))
// დაწერეთ ფუნქცია რომელიც წაშლის ყველა სფეისს სტრინგინდან მაგ: removeSpaces('1 2 aab') => '12aab' უნდა გამოიტენოთ for ლუპი
function removeSpaces(text){
    let result = "";

    for(let i = 0; i < text.length; i++){

        if(text[i] !== " "){
            result += text[i];
        }

    }

    return result;
}

console.log(removeSpaces("1 2 aab"));
//დაწერეთ ფუნცქია რომელიც მიიღებს წინადადებას და შემოაბრუნებს თითოეულ სიტყვას მაგ: reverseEachWord('Hello World') =>  "olleH dlroW"

function reverseEachWord(sentence){

    let words = sentence.split(" ");
    let result = "";

    for(let i = 0; i < words.length; i++){

        let reversed = "";

        for(let j = words[i].length - 1; j >= 0; j--){
            reversed += words[i][j];
        }

        result += reversed + " ";
    }

    return result;
}

console.log(reverseEachWord(`gamarjoba`));