import { Cards } from "./types";

export const getRandomElements = function (sourceArray:Array<Cards>, neededElements:number) {
  const result = [];
  for (let i = 0; i < neededElements; i++) {
    const index = Math.floor(Math.random() * sourceArray.length);
    result.push(sourceArray.splice(index, 1)[0]);
  }
  return [...result, ...result];
};

export const shuffle = function (array:Array<object>) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
