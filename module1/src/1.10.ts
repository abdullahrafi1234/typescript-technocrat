{
  //Union  types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDev" | "expertDev";

  // type er type
  type Developer = FrontendDeveloper | FullstackDeveloper;

  // Union type use
  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    blood: "A+" | "B+" | "B(-)";
    gender: "male" | "female";
    phone: number;
  };

  const user1: User = {
    name: "RAFI",
    phone: 88017224389145,
    gender: "female",
    blood: "B(-)",
  };

  // Intersection types

  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDev = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDev = FrontendDev & BackendDev;

  const fullstackDev: FullstackDev = {
    skills: ["html", "css", "js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
