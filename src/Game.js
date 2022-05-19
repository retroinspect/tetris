// TODO: BlockManager의 결과에 따라 state 변화

export class Game {
    constructor(data) {
        this.blocks = []
        this.data = data
    }

    // addBlock(blocks, block) {
    //     const table = data.table // table까지 Game이 아는 건 이상하니까 아예 data에서 처리?
    //     for (let x = 0; x < table[0].length; x++) {
    //         block.x = x
    //         if (!this.hasIntersected(block, table)) {
    //             for (let i = block.top; i < form.length; i++) {
    //                 for (let j = block.leftMost; j < form[0].length; j++) {
    //                     if (form[i][j]) {
    //                         table[i][j + x] = block.color;
    //                     }
    //                 }
    //             }

    //             this.blocks = [...blocks, block]
    //             this.data.setTable(this.blocks) // 이미 계산한 값이 있는데 굳이?
    //             return;
    //         }
    //     }
    // }


}