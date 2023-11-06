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

export function arrayIncludes<T>(haystack: T[], needle: T):boolean {
  return !!haystack.find(e => e === needle)
}

export function removeElement<T>(haystack: T[], needle: T):T[] {
  return haystack.filter(e => e !== needle)
}

export function pushElement<T>(haystack: T[], needle: T):T[] {
  return arrayIncludes(haystack, needle) ? [...haystack] : [...haystack, ...[needle]]
}

export function toggleElement<T>(haystack: T[], needle: T):T[] {
  return arrayIncludes(haystack, needle) ? removeElement(haystack, needle) : pushElement(haystack, needle)
}