// დაწერეთ ფუნცქია რომელიც გადააკონვერტირებს ცელსიუს ფარენჰეიტში და დააბრუნებს პასუხს.



function converter(celsius){
    let fahrenheit = (celsius * 9/5) +32;
    return fahrenheit;
}
console.log(converter(12))

// დაწერე თუნცქია რომელიც მიიღებს სტრინგს არგუმენტად და დააბრუნებს ამ სრინგის შებრუნებულს(reverse).

function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    return reversed;
}

console.log(reverseString("gamarjoba"));
// დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს წინადადებას და დათვლის რამდენი სიტყვაა შიგნით(ეს ლექციაზე არ გაგვიკეთებია მაგრამ შეგიძლია დასერჩოთ)

function counter(winadadeba){
    return winadadeba.split(" ").length;
}
console.log(counter("so when i was trying to watch tv something fell off"))

// დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს სიტყვას და დააბრუნებს რამდენი ხმოვანია ამ სიტყვაში

function vowelCounter(word) {
    let vowels = "აეიოუaeiou";
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
        }
    }

    return count;
}

console.log(vowelCounter("aaaaaeeiouoaaaa"));

// დაწერეთ ფუნცქია რომელიც მიიღებს რიცხს პარამეტრად და დაგიბრუნებთ ამ რიცხვის ფაქტორიალს
function factorial(number) {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(12));

//  დაწერეთ ფუნცქია რომლეიც მიიღებს რიცხს პარამეტრად და დაგიბრუნებთ 0 დან ამ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამს
function vowelSum(Ricxvi){
    let result = 0;
    for(let i=0; i<=Ricxvi; i++){
        if(i % 2 === 0){
            result = result +i;
        }
    }
    return result;
}
console.log(vowelSum(30))

//  დაწერეთ ფუნცქია რომელიც მიიღებს სტუდენტის ქულას არგუმენტად და დაგირბუნებთ სტუდენტის შეფასებას A,B,C,E,F

function studentGrade(Grade){
    if(Grade>=91 && Grade<=100){
        return "A";
    }else if(Grade>=75 && Grade<=90){
        return "B";
    }else if(Grade>=60 && Grade<=74){
        return "C";
    }else if(Grade>=51 && Grade<=59){
        return "E";
    }else if(Grade>=1 && Grade<=50){
        return "F";
    }else{
        return NaN;
    }
}
console.log(studentGrade(133))

// დაწერეთ ფუნცქია რომელიც მიიღებს პაროლს პარამეტრად თქვენი მიზანია შეამოწმოთ თუ არის 8 სიმბოლოზე მეტი შეიცავს რიცხვს და ერთი დიდ ასოს(capital letter)
function passwordCheck(Password) {
    let hasUppercase = false;

    for (let i = 0; i < Password.length; i++) {
        let it = Password[i];

        if (it === it.toUpperCase() && isNaN(it)) {
            hasUppercase = true;
        }
    }

    if (Password.length > 8 && hasUppercase) {
        return true;
    } else {
        return false;
    }
}

console.log(passwordCheck("Gamarjoba"));