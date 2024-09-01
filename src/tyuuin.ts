export type Tyuuin = "syonanoka" | "futananoka";

const assertNever = (_: never, msg: string): never => {
  throw new Error(msg);
};

export const toJapanese = (tyuuin: Tyuuin): string => {
  switch (tyuuin) {
    case "syonanoka":
      return "初七日";
    case "futananoka":
      return "二七日";
    default:
      return assertNever(tyuuin, `Unexpected tyuuin: ${tyuuin}`);
  }
};
