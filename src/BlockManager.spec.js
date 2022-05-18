import { BlockManager } from "./TableManager.js";

console.log("BlockManager.spec.ts");

const test1 = () => {
  const table = BlockManager.addBlock(
    {
      color: "red",
      form: [
        [1, 1],
        [1, 1],
      ],
    },
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ]
  );

  console.log(
    table.join("") ===
      [
        ["red", "red", "#bbb"],
        ["red", "red", "#bbb"],
        ["#bbb", "#bbb", "#bbb"],
      ].join("")
  );
};

const test2 = () => {
  const actual = BlockManager.stripForm([
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
  ]).join("");

  const expected = [
    [1, 0],
    [1, 1],
    [1, 0],
  ].join("");

  console.log(actual === expected);
};

const test3 = () => {
  console.log("test3");
  const actual = BlockManager.addBlock(
    {
      color: "red",
      form: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
    },
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ]
  );

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
    {
      color: "red",
      form: [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
    },
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["green", "#bbb", "#bbb"],
    ]
  ).join("");

  const expected = [
    ["#bbb", "red", "#bbb"],
    ["#bbb", "red", "red"],
    ["green", "red", "#bbb"],
  ].join("");

  console.log(actual === expected);
};

export const test5 = () => {
  const actual = BlockManager.addBlock(
    {
      color: "red",
      form: [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
      ],
    },
    [
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
      ["#bbb", "#bbb", "#bbb"],
    ]
  );

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
      {
        color: "red",
        form: [
          [1, 1],
          [1, 1],
        ],
      },
      [
        ["green", "green", "#bbb"],
        ["#bbb", "green", "#bbb"],
        ["#bbb", "#bbb", "#bbb"],
      ]
    );
  } catch (error) {
    console.log(true);
    return
  }

  console.log(false);
  console.log(actual);
};

export const tests = {
  // test1,
  test6,
};
