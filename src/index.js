import { Renderer } from "../Renderer.js";
import { Data } from "./Data.js";
import { blocks } from "../blocks.config.js";
import { randomElement } from "../utils.js";
import { Block } from "./Block.js";
import { BlockManager } from "./TableManager.js";
import { tests } from "./BlockManager.spec.js";

const base = document.getElementById("game");

const renderer = new Renderer(base);

const colors = blocks.map((b) => b.color);
const getColor = () => randomElement(["#bbb"]);

const cells = Array(20)
  .fill(Array(20).fill())
  .map((row) => Array.from(row.map((cell) => getColor())));

let data = new Data({
  table: cells,
  nextBlock: BlockManager.getRandomBlock().block,
});

renderer.render(data);

document.getElementById("next").onclick = () => {
  renderer.clear();
  data.table = BlockManager.addBlock(data.nextBlock, data.table);
  data.nextBlock = BlockManager.getRandomBlock().block;
  renderer.render(data);
};

document.getElementById("next-timestamp").onclick = () => {
  console.log("next timestamp");
  renderer.clear();
  data.table = BlockManager.fall(data.table);
  renderer.render(data);
};

for (const tc of Object.keys(tests)) {
  console.log(tc);
  tests[tc]();
}
