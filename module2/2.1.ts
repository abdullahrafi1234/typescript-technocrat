{
  //type assertion
  let anything: any;

  anything = "Next Level";

  anything = 222;

  (anything as string).length;

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGram(90) as number;
  const result2 = kgToGram("890") as string;
  console.log(result1);
  console.log(result2);

  try {
  } catch (error) {
    console.log(error.message);
  }
}
