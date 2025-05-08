{
  //Interface, type alias vs interface
  //
  // There are 3 type of usage of type alias and Interface 1. Object 2. Array 3. Function
  //
  // type alias
  type User1 = {
    name: string;
    age: number;
  };
  // interface
  interface User2 {
    name: string;
    age: number;
  }

  type UserRole1 = User1 & { role: string };

  const user1: UserRole1 = {
    name: "Rafi",
    age: 100,
    role: "manager",
  };

  interface UserRole2 extends User2 {
    role: string;
  }

  const user2: UserRole2 = {
    name: "Rafi",
    age: 100,
    role: "co-man",
  };

  interface UserRole3 extends User1 {
    role: string;
  }

  const user3: UserRole3 = {
    name: "Rafi",
    age: 100,
    role: "ceo",
  };
}
