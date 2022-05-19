export class Data {
  constructor({ table, nextBlock }) {
    Object.assign(this, { table, nextBlock, row: table.length, col: table[0].length });
  }

  /**
   * @TODO 
   * blocks를 기반으로 table을 새로 만듭니다
   */
  /*
  setTable(blocks) {
    const { row, col } = this
    const table = Array(row)
      .fill(Array(col).fill())
      .map((row) => Array.from(row.map((cell) => "#bbb")));

    blocks.forEach(({ color, form, y, x }) => {
      for (let i = 0; i < form.length; i++) {
        for (let j = 0; j < form[0].length; j++) {
          if (form[i][j]) {
            if (y + i >= row || x + j >= col || table[i][j] !== '#bbb') {
              throw 'invalid location'
            }
            table[y + i][x + j] = color;
          }
        }
      }
    });

    this.table = table
  }
  */

  // TODO: score, stage 등 화면을 그리는 데에 필요한 데이터를 전달하기 위한 객체
}
