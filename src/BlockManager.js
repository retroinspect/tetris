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

  // TODO: 아래 함수들 모두 Game 혹은 Data로 옮기기
  // blocks만 업데이트하고 updateTable 호출해서 테이블에 반영
  // blocks에서 block은 절대 사라지지 않음 (혹은 테이블에서 완전히 보이지 않게 되면 사라지도록 처리)
  // 마지막 라인 다 찼을 때 지우는 것 고려 -> block이 테이블을 뚫고 움직일 수 있어야함

  static addBlock(table, blocks, block) {
    const { top, leftMost, form, color } = block;

    for (let col = 0; col < table[0].length; col++) {
      block.x = col - leftMost;
      block.y = -top;

      if (!this.hasIntersected(block, table)) {
        for (let i = top; i < form.length; i++) {
          for (let j = leftMost; j < form[0].length; j++) {
            if (form[i][j]) {
              table[block.y + i][block.x + j] = color;
            }
          }
        }

        return { table, blocks: [...blocks, block] };
      }
    }

    throw "cannot add block";
  }

  static toTable(blocks, row, col) {
    const table = Array(row)
      .fill(Array(col).fill())
      .map((row) => Array.from(row.map((cell) => "#bbb")));

    blocks.forEach(({ color, form, y, x }) => {
      for (let i = 0; i < form.length; i++) {
        for (let j = 0; j < form[0].length; j++) {
          if (form[i][j]) {
            if (y + i >= row || x + j >= col) {
              throw "invalid location";
            }
            table[y + i][x + j] = color;
          }
        }
      }
    });

    return table;
  }

  static hasIntersected(block, table) {
    const row = table.length;
    const col = table[0].length;

    const { form, y, x } = block;

    for (let i = 0; i < form.length; i++) {
      for (let j = 0; j < form[0].length; j++) {
        if (form[i][j] == 1) {
          if (y + i >= row || x + j >= col) {
            return true;
          }
          if (table[y + i][x + j] !== "#bbb") {
            return true;
          }
        }
      }
    }
    return false;
  }

  static fall(table, blocks) {
    // 1 timestamp 지났을 때 테이블의 블록들 떨어뜨리기

    blocks.sort((block) => block.bottom);

    blocks.forEach((block) => {
      if (
        this.hasIntersected(
          block.move(1, 0),
          this.toTable(
            blocks.filter((b) => b !== block),
            table.length,
            table[0].length
          )
        )
      ) {
        block.move(-1, 0);
      }
    });

    // 마지막 블록을 움직인 상태에서는 table을 반환해도 될 듯

    return {
      blocks,
      table: this.toTable(blocks, table.length, table[0].length),
    };
  }

  // TODO 마지막 라인부터 꽉 차면 없애버리기
}

// 블록 충돌 처리 등 블록과 관련된 알고리즘 처리
// 블록을 데이터로 변환 -> 이건 다른 클래스로 책임을 분리해도 될 듯
