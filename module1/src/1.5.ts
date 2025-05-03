//Reference type ==> Object

const user: {
  readonly company: string; //ype ==> literal type
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Abdullah",
  lastName: "Bhuiyan",
  isMarried: true,
};

// user.company = "ph";
