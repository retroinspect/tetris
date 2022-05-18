import { Block } from "./Block.js";
import { BlockManager } from "./BlockManager.js";

console.log("BlockManager.spec.ts");

const test1 = () => {
  const actual = BlockManager.toTable([
    {
      color: "red",
      form: [
        [1, 1],
        [1, 1],
      ],
      y: 0,
      x: 0
    }], 3, 3)

  const expected = [
    ["red", "red", "#bbb"],
    ["red", "red", "#bbb"],
    ["#bbb", "#bbb", "#bbb"],
  ]

  console.log(
    actual.join("") ===
    expected.join("")
  );
};

const test2 = () => {
  const actual = BlockManager.toTable([
    {
      color: "red",
      form: [
        [1, 1],
        [1, 1],
      ],
      y: 1,
      x: 1
    }], 3, 3)

  const expected = [
    ["#bbb", "#bbb", "#bbb"],
    ["#bbb", "red", "red"],
    ["#bbb", "red", "red"],
  ]

  console.log(
    actual.join("") ===
    expected.join("")
  );
};


const test3 = () => {
  console.log("test3");
  const actual = BlockManager.addBlock(
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ],
    [],
    new Block({
      color: "red",
      forms: [[
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ]],
      origins: [{ y: 0, x: 0 }]
    }),
  ).table;

  console.log(actual);

  const expected = [
    ["red", "red", "#bbb"],
    ["#bbb", "red", "red"],
    ["#bbb", "#bbb", "#bbb"],
  ];

  console.log(actual.join("") === expected.join(""));
};

const test4 = () => {
  const actual = BlockManager.addBlock(
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["green", "#bbb", "#bbb"],
    ], [],

    new Block({
      color: "red",
      forms: [[
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],

      ]],
      origins: [{ y: 0, x: 0 }]
    }),

  ).table.join("");

  const expected = [
    ["#bbb", "red", "#bbb"],
    ["#bbb", "red", "red"],
    ["green", "red", "#bbb"],
  ].join("");

  console.log(actual === expected);
};

export const test5 = () => {
  const actual = BlockManager.addBlock(

    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ], [],
    new Block({
      color: "red",
      forms: [[
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ]],
      origins: [{ y: 0, x: 0 }]
    }),
  ).table;

  console.log(actual);

  const expected = [
    ["#bbb", "red", "red"],
    ["red", "red", "#bbb"],
    ["#bbb", "#bbb", "#bbb"],
  ];

  console.log(actual.join("") === expected.join(""));
};

export const test6 = () => {
  let actual;
  try {
    actual = BlockManager.addBlock(
      [
        ["green", "green", "#bbb"],
        ["#bbb", "green", "#bbb"],
        ["#bbb", "#bbb", "#bbb"],
      ],
      [],
      new Block({
        color: "red",
        forms: [[
          [1, 1],
          [1, 1],
        ]],
        origins: [{ y: 0, x: 0 }]
      }),
    );
  } catch (error) {
    console.log(true);
    return
  }

  console.log(false);
  console.log(actual);
};

export const tests = {
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
};
