// Importáld be a HumanHero és TransformerHero osztályokat.

import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  {
    id: 1,
    name: "Gabi",
    photo: "gabi.jpg",
    sex: "female",
    age: 20,
    health: 10,
  },
  {
    id: 2,
    name: "Viktor",
    photo: "viktor.jpg",
    sex: "male",
    age: 21,
    health: 9,
  },
  {
    id: 3,
    name: "Gergely",
    photo: "gergely.jpg",
    sex: "male",
    age: 22,
    health: 8,
  }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  {
    id: 1,
    name: "Gabi",
    photo: "gabi.jpg",
    wings: 2,
    wheels: 0,
    clan: "medgyes",
  },
  {
    id: 2,
    name: "Viktor",
    photo: "viktor.jpg",
    wings: 2,
    wheels: 0,
    clan: "dios",
  },
  {
    id: 3,
    name: "Gergely",
    photo: "gergely.jpg",
    wings: 2,
    wheels: 0,
    clan: "gyor",
  }
];
