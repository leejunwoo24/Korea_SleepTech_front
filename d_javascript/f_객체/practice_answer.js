let person = {
    name: "이준우",
    age: 25,
    isStudent: true
}

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[1]);


function add(sum, num){
  return sum + num;
}


console.log('=== 문제 2 ===');

for(const key in person){
  console.log(`${key}: ${person[key]}`);
}




let upperFruits = fruits.map(fruit => fruit.toUpperCase())
                    .forEach(fruit => console.log(fruit));


let array1 = [1, 2, 3];
let array2 = [4 , 5, 6];

function combineArrays(array1, array2){
  for( let i = 0; i < array1.length; i++){
    array1[i] += array2[i];
  }

  return array1;
}

console.log(combineArrays(array1, array2));


function deepCopy(person){
  return JSON.parse(JSON.stringify(person));
}

let personCopy = deepCopy(person);

personCopy.name = '이도경';
console.log(person);


const users = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 17},
    {name: 'Doe', age: 18}
];


const filterUsers = users.filter(user => user.age >= 18)
                        .map(user => user.name)
                        .forEach(user => console.log(user));

