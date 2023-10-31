"use client"

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function getRandomElement<T>(arr: T[]):T {
    return arr[getRandomInt(arr.length)]
}

export function shuffleArray<T>(arr: T[]):T[] {
    let arrayCopy = [...arr]
    let oldElement;
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let rand = getRandomInt(i + 1)
      oldElement = arrayCopy[i];
      arrayCopy[i] = arrayCopy[rand];
      arrayCopy[rand] = oldElement;
    }
    return arrayCopy;
}