{
  //Ternary operator, optional chaining & nullish coalescing operator

  const age: number = 19;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //ternary operator
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //nullish coalescing operator ( if decision making then use null | undefined)

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  //   console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Rafi",
    address: {
      city: "dha",
      road: "tikkapra",
      presentAddress: "dhaka",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
