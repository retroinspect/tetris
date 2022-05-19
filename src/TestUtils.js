import { Block } from "./Block.js";

export const blockClasses = [
  Block({
    color: "red",
    forms: [
      [
        [1, 1],
        [1, 1],
      ],
    ],
    origins: [{ y: 0, x: 0 }],
  }),

  Block({
    color: "red",
    forms: [
      [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ],
    ],
    origins: [{ y: 0, x: 0 }],
  }),

  Block({
    color: "red",
    forms: [
      [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
    ],
    origins: [{ y: 0, x: 0 }],
  }),

  Block({
    color: "red",
    forms: [
      [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
    ],
    origins: [{ y: 0, x: 0 }],
  }),

  Block({
    color: "red",
    forms: [
      [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ],
    ],
    origins: [{ y: 0, x: 0 }],
  })


];
