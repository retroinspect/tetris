import { blocks as blockConfigs } from "./blocks.config.js"
import { Block } from './Block.js'

const test1 = () => {
    const block = new Block({
        color: "red",
        forms: [[
            [1, 1],
            [1, 1],
        ]],
        origins: [{ y: 0, x: 0 }]
    })

    console.log(block.top === 0)
    console.log(block.leftMost === 0)
    console.log(block.bottom === 1)
}


const test2 = () => {
    const block = new Block({
        color: "red",
        forms: [[
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ]],
        origins: [{ y: 0, x: 0 }]
    })

    console.log(block.top === 1)
    console.log(block.leftMost === 0)
    console.log(block.bottom === 2)
}

const test3 = () => {
    const block = new Block({
        color: "red",
        forms: [[
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
        ]],
        origins: [{ y: 0, x: 0 }]
    })

    console.log(block.top === 0)
    console.log(block.leftMost === 1)
    console.log(block.bottom === 2)
}

export const tests = {
    test1,
    test2,
    test3
}