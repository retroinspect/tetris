import { randomElement } from "./utils.js";
import { blocks } from "../blocks.config.js";
import { Block } from "./Block.js";

const blockClasses = blocks.map((config) => Block(config));
// TODO: Block 인스턴스가 현재로써는 하는 일이 없음.
// 좌우 이동을 Block에서 처리하도록 하고, Block에 x, y 값을 줘서 Block의 배열을 table로 변환하도록 하기

export class BlockManager {
  static getRandomBlock() {
    const randomBlockClass = randomElement(blockClasses);
    return new randomBlockClass();
  }

  // 테이블을 벗어난 블록이 있거나, 블록이 겹치면 true
  static hasIntersected(blocks, row, col) {
    return false;
  }

  static toTable(blocks, row, col) {
    const table = Array(row)
      .fill(Array(col).fill())
      .map((row) => Array.from(row.map((cell) => "#bbb")));

    blocks.forEach(({ color, form, y, x }) => {
      for (let i = 0; i < form.length; i++) {
        for (let j = 0; j < form[0].length; j++) {
          if (form[i][j]) {
            table[y + i][x + j] = color;
          }
        }
      }
    });

    return table
  }

  // TODO:
  static fall(blocks) {
    // 1 timestamp 지났을 때 테이블의 블록들 떨어뜨리기
    blocks.forEach(blocks.y);

    return blocks;
  }

  // TODO 마지막 라인부터 꽉 차면 없애버리기
}

// 블록 충돌 처리 등 블록과 관련된 알고리즘 처리
// 블록을 데이터로 변환 -> 이건 다른 클래스로 책임을 분리해도 될 듯
