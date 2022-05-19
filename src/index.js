import { Renderer } from "../Renderer.js";
import { Data } from "./Data.js";
import { randomElement } from "../utils.js";
import { Block } from "./Block.js";
import { BlockManager } from "./BlockManager.js";
import { tests } from "./BlockManager.spec.js";
import { getTable } from "./utils.js";

const base = document.getElementById("game");

const renderer = new Renderer(base);

let blocks = [];
let currentBlock = null;

let data = new Data({
  table: getTable(20, 20),
  nextBlock: BlockManager.getRandomBlock(),
});

renderer.render(data);

document.getElementById("next").onclick = () => {
  renderer.clear();
  const { table, blocks: nbs } = BlockManager.addBlock(
    data.table,
    blocks,
    data.nextBlock
  );
  blocks = nbs;
  data.table = table;
  data.nextBlock = BlockManager.getRandomBlock();
  renderer.render(data);
};

let addBlock = true;

setInterval(() => {
  renderer.clear();

  if (addBlock) {
    try {
      currentBlock = data.nextBlock;

      const { table, blocks: nbs } = BlockManager.addBlock(
        data.table,
        blocks,
        data.nextBlock
      );
      blocks = nbs;
      data.table = table;
      data.nextBlock = BlockManager.getRandomBlock();
      addBlock = false;
    } catch (e) {
      alert(e);
    }
  }

  const res = BlockManager.fall(data.table, blocks);
  blocks = res.blocks;
  data.table = res.table;
  renderer.render(data);
}, 500);

setInterval(() => {
  addBlock = true;
}, 2000);

document.onkeydown = (e) => {
  if (
    !currentBlock ||
    currentBlock.y + currentBlock.bottom >= data.table.length
  ) {
    return;
  }

  switch (e.key) {
    case "ArrowLeft":
      currentBlock.move(0, -1);
      break;

    case "ArrowRight":
      currentBlock.move(0, 1);
      break;
  }
};
