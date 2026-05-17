// წაშალეთ მასივის თითოეულ ელემენტს წაუშლის ბოლო სიმბოლოს მაგ: ["one","two","three"] => ["on","tw","thre"]

function lastletter(winadadeba){
    let result = []
    for(i=0; i<winadadeba.length; i++){
        let word = winadadeba[i]
        let newword = word.slice(0, word.length -1)
        result.push(newword)
    }
    return result
}
console.log(lastletter(["me", 'salami', 'gamarjoba']))

// იპოვეთ მასივში 2 ყველაზე პატარა ელემენტის ჯამი, მაგ: [19,5,42,2,77] => 7
function smallestSum(ricxvebi){

    let smallest = Infinity
    let secondSmallest = Infinity

    for(let i = 0; i < ricxvebi.length; i++){

        let ricxvi = ricxvebi[i]

        if(ricxvi < smallest){

            secondSmallest = smallest
            smallest = ricxvi

        }else if(ricxvi < secondSmallest){

            secondSmallest = ricxvi
        }
    }

    return smallest + secondSmallest
}

console.log(smallestSum([1,2,3,4,5,6,7,8,9]))

// გამოთვალეთ მასივის რიცხვების ჯამი ForEach ის გამოყენებით მაგ: [10, 12, 4, 2] => 28

function getSum(numbers){

    let sum = 0

   numbers.forEach((number) => {
   sum += number
})

    return sum
}

console.log(getSum([10, 12, 4, 2]))

// დაამუშავეთ მასივი რომ დააბრუნოს სტინგი მხოლოდ იმ ელემენტებით რომლის სიგრძე არის 5-ზე მეტი და შეაწებეთ #-ით მაგ: ["cat","parrot","dog","elephant"] => "PARROT#ELEPHANT"

function Sityvebi(words){

    return words
        .filter(word => word.length > 5)
        .map(word => word.toUpperCase())
        .join("#")
}

console.log(Sityvebi(["cat","parrot","dog","elephant"]))

// დააჯგუფეთ მასივი კლასის მიხედვით და გამოითვალეთ საშუალო ქულა

const students = [

  { name: "Ann",  cls: "A", grade: 90 },
  { name: "Ben",  cls: "B", grade: 75 },
  { name: "Cara", cls: "A", grade: 80 }

]

const groupedByClass = students.reduce((prev, {cls, grade}) => {

    if(!prev[cls]){

        prev[cls] = {
            total: grade,
            count: 1
        }

    }else{

        prev[cls].total += grade
        prev[cls].count++
    }

    return prev

}, {})

for(let cls in groupedByClass){

    groupedByClass[cls] =
        groupedByClass[cls].total /
        groupedByClass[cls].count
}

console.log(groupedByClass)