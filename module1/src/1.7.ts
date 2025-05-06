{
  // Spread Operator
  // Rest Operator

  // Spread Operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];

  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];

  // bros1.push(bros2)   //eivabe use kora jabena karon string er modde array rakha jayna
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    nextjs: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //  Rest Operator ===>

  // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
  //   console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);
  // };

  const greetFriends = (...friends: string[]) => {
    //   console.log(`Hi ${friend1}, ${friend2}, ${friend3}`);

    friends.forEach((friend: string) => {
      console.log(friend);
    });
  };

  greetFriends("Abul", "Babul", "Tabul");
}
