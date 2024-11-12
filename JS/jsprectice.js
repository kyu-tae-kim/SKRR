// 클래스 만들기 

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}years old`)
    };
};

const Alice = new Person('Alice','9');

Alice.sayHello();


class Rectangle {
    constructor(height, width) {
      this._height = height;
      this.width = width;
    }
  
    get height() {
      return this._height + 10;
    }

    set height(value) {
        if (value > 0){
            this._height = value;
        } else {
            console.log("높이는 0보다 커야 합니다.");
        }
    }
}
const rectangle = new Rectangle(10, 20);

console.log(rectangle);
console.log(rectangle.height, rectangle.width);

rectangle.height = 15; // Setter를 통해 높이 변경
console.log(rectangle.height, rectangle.width);

rectangle.height = -5; // Setter를 통해 높이 변경 시 유효성 검사
console.log(rectangle.height, rectangle.width);


// 빈 객체 생성
// const obj = {};

// // 초기값을 가진 객체 생성
// const person = {
//   name: 'Mike',
//   age: 20,
// };

// console.log(person.name)
// console.log(person['age'])

// function printPerson(per) { 
//     console.log(`Name: ${per.name}`);
//     console.log(`Age: ${per.age}`);
// }

// printPerson(person); // 함수에 객체를 전달하여 데이터 출력

const obj = {
    'pizza': '🍕',
    'chicken': '🍗',
    'meat': '🍖'
  };
  
  for (const key in obj) {
    console.log(key); // 속성(key) 출력
    console.log(obj[key]); // 값(value) 출력
  }

  const array = ['🍕', '🍗', '🍖'];

  for (const value of array) {
    console.log(value); // 배열의 요소 값 출력
  }
  
const obj1 = { key: 'value' };
const obj2 = obj1; // 얕은 복사
obj2.key = 'new value';
console.log(obj1.key); // 출력: 'new value'

let json = JSON.stringify(true);
console.log(json); // 출력: "true"

