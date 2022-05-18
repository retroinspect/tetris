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

  static stripForm(form) {
    for (let i = 0; i < form.length; i++) {
      if (form[i][0] === 1) {
        break;
      }
      if (i === form.length - 1) {
        return form.map((row) => row.slice(1));
      }
    }

    for (let j = 0; j < form[0].length; j++) {
      if (form[0][j] === 1) {
        break;
      }
      if (j === form[0].length - 1) {
        return form.slice(1);
      }
    }

    return form;
  }

  static hasIntersected(col, form, table) {
    for (let i = 0; i < form.length; i++) {
      for (let j = 0; j < form[0].length; j++) {
        if (col + j >= table[0].length && form[i][j] === 1) return true;
        if (table[i][j + col] !== "#bbb" && form[i][j] === 1) {
          return true;
        }
      }
    }
    return false;
  }

  static addBlock(block, table) {
    const form = this.stripForm(block.form);

    for (let col = 0; col < table[0].length; col++) {
      if (!this.hasIntersected(col, form, table)) {
        for (let i = 0; i < form.length; i++) {
          for (let j = 0; j < form[0].length; j++) {
            if (form[i][j]) {
              table[i][j + col] = block.color;
            }
          }
        }
        return table;
      }
    }
    // block.form에서 0인 column 제거해서 form 만들기
    // table[0][i]와 form[0][0]이 겹치도록 배치했을 때 충돌이 안나는지?
    // 모두 계산해서 랜덤한 i에 떨어지게 할 수도 있지만, 일단 충돌이 안나는 첫 i에 떨어지게 하기

    throw "cannot add block";
  }

  static toTable() {

  }

  // TODO:
  static fall(blocks) {
    // 1 timestamp 지났을 때 테이블의 블록들 떨어뜨리기
    blocks.forEach(blocks.y )


    return blocks;
  }

  // TODO 마지막 라인부터 꽉 차면 없애버리기
}

// 블록 충돌 처리 등 블록과 관련된 알고리즘 처리
// 블록을 데이터로 변환 -> 이건 다른 클래스로 책임을 분리해도 될 듯
