{
  //Type alias in typescript

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: number;
    address: string;
  };

  const student1: Student = {
    name: "Rafi",
    age: 80,
    gender: "male",
    contactNo: 88017225648522,
    address: "dhaka",
  };

  // const student2: {
  //   name: string;
  //   age: number;
  //   gender: string;
  //   address: string;
  // } = {
  //   name: "Rubi",
  //   age: 70,
  //   gender: "female",
  //   address: "dhaka",
  // };

  const student2: Student = {
    name: "Rubi",
    age: 70,
    gender: "female",
    address: "dhaka",
  };

  const student3: Student = {
    name: "Abul",
    age: 50,
    gender: "female",
    address: "dhaka",
  };

  // type declare
  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Bhuiyan";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  //type alias in function
  const add: Add = (num1, num2) => num1 + num2;
}
