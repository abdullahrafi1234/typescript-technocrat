// =====> Function

// Normal Function
function add(num1: number, num2: number = 10) {
  return num1 + num2;
}

add(2, 5);

// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object ==> function == method

const poorUser = {
  name: "Rafi",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is : ${this.balance + balance}`;
  },
};

// Maping
const arr: number[] = [1, 4, 10];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
