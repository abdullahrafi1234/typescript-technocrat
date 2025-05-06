{
  //Object Destructuring

  const user = {
    id: 345,
    name: {
      firstName: "Abdullah Al",
      middleName: "Rafi",
      lastName: "Bhuiyan",
    },
    phone: "07122544548",
    address: "Dhaka",
  };

  const {
    phone,
    name: { middleName },
  } = user;

  //  Array Destructuring
  const friends = ["ross", "samanta", "rachal", "abul", "juba"];

  const [, , bestFriend, ...rest] = friends;
}
