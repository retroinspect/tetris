import { Block } from "./Block.js";
import { BlockManager } from "./BlockManager.js";
import { blockClasses } from "./TestUtils.js";

console.log("BlockManager.spec.ts");

const test1 = () => {
  const block = new blockClasses[0]();

  const actual = BlockManager.toTable([block], 3, 3);

  const expected = [
    ["red", "red", "#bbb"],
    ["red", "red", "#bbb"],
    ["#bbb", "#bbb", "#bbb"],
  ];

  console.log(actual.join("") === expected.join(""));
};

const test2 = () => {
  const block = new blockClasses[0]();
  block.move(1, 1);

  const actual = BlockManager.toTable([block], 3, 3);

  const expected = [
    ["#bbb", "#bbb", "#bbb"],
    ["#bbb", "red", "red"],
    ["#bbb", "red", "red"],
  ];

  console.log(actual.join("") === expected.join(""));
};

const test3 = () => {
  const block = new blockClasses[2]();

  const actual = BlockManager.addBlock(
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ],
    [],
    block
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
    ],
    [],
    new blockClasses[3]()
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
    ],
    [],
    new blockClasses[4]()
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
      new blockClasses[0]()
    );
  } catch (error) {
    console.log(true);
    return;
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
