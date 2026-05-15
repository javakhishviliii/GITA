
// დაწერეთ ფუნცქცია რომელიც მიიღებს მასივს არგუმენტად და დააბრუნებს ამ მასივის საშუალო არითმეტიკულს.

function Average(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }

    return sum / number.length;
}

console.log(Average([1,2,3,4,5,6,7,8,9,10,11,12]));

// დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს რიცხვს და დააბრუნებს ამ რიცხვის შებრუნებულ მასივს თითოეული წევრით. მაგ: 35231 → [1,3,2,5,3]. 0 => [0]

function reverse(number){
    return number 
        .toString()
        .split('')
        .reverse()
        .map(Number)

}

console.log(reverse(123456789))

// დაწერეთ ფუნქცია რომელიც მიიღებს 2 მასივს არგუმენტად და დააბრუნებს მასივის მხოლოდ იმ წევრებს რომელსაც მეორე მასივი არ შეიცავს მაგ: a = [1, 2] და b = [1] დააბრუნეთ [2]. a = [1, 2, 2, 2, 3] და b = [2] დააბრუნეთ [1, 3].

function OtherDoesnot(x, y) {
     let result = []
     for(let i=0; i<x.length; i++){
        if(!y.includes(x[i])){
            result.push(x[i])
        }
     }

 return result
}
console.log(OtherDoesnot([1,2,3,4,5,6],[1,2,3]))

// დაწერეთ ფუნცქცია რომელსაც გადმოეცემა მასივი და იპოვე მასივში მეორე ყველაზე დიდი რიცხვი. მაგ: [10, 40, 20, 5, 30] => 30

function SecondLargest(array) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < array.length; i++) {

        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];

        } else if (
            array[i] > secondLargest &&
            array[i] !== largest
        ) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

console.log(SecondLargest([10, 40, 20, 5, 30, 60]));

// // დაწერეთ ფუნცქია რომელიც მიიღებს სტირნგების მასივს და უნდა დააბრუნოტ მხოლოდ იმ სიტყვების მასივი რომლებიც არის პალინდორმი: 
// * პალინდორმი ეწოდება სიტყვას რომელიც შემობრუნების შემდეგ იგივე მნიშვნელობას ინარჩუნებს. 
// მაგ: ["mom", "car", "level", "dog"] => ["mom", "level"]

function Palidorm(elements){
    let palindorm = []

    for(let i = 0; i < elements.length; i++){

        let reversedWord = elements[i]
            .split('')
            .reverse()
            .join('')

        if(elements[i] === reversedWord){
            palindorm.push(elements[i])
        }
    }

    return palindorm
}

console.log(Palidorm(["mom", "car", "level", "dog"]))

// დაწერეთ ფუნცქია რომელიც მიიღებს რიცხვების მასივს და დააბრუნებთ რომელია ყველაზე ხშირად გამეორებადი რიცხვი მაგ: [4, 5, 6, 5, 4, 5] => 5

function mostRepeated(numbers){

    let most = 0
    let result

    for(let i = 0; i < numbers.length; i++){

        let count = 0

        for(let j = 0; j < numbers.length; j++){

            if(numbers[i] === numbers[j]){
                count++
            }

        }

        if(count > most){
            most = count
            result = numbers[i]
        }

    }

    return result
}

console.log(mostRepeated([4, 5, 6, 5, 4, 5,5,6,6,7,7,7,7,7]))