import { Data } from "./Data.js";

export class Renderer {
  base;
  table;
  nextBlock;

  constructor(base) {
    this.base = base;
    this.table = base.appendChild(document.createElement("table"));
    this.table.style.cssText = `
      width:500px;height:500px;border:0px;
      border-spacing:0;border-collapse:collapse
    `;

    this.nextBlock = base.appendChild(document.createElement("div"));
    this.nextBlock.style.cssText = `
      width:100px;height:100px;border:3px;
      border-spacing:0;border-collapse:collapse;
      background-color:#bbb;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }

  render(data) {
    if (!(data instanceof Data)) {
      throw "invalid data";
    }

    this.renderTable(data.table);
    this.renderNextBlock(data.nextBlock);
  }

  renderTable(table) {
    table.forEach((row) => {
      const tr = this.table.appendChild(document.createElement("tr"));
      row.forEach((cell) => {
        const td = tr.appendChild(document.createElement("td"));
        const border = cell === "#bbb" ? 0 : 1;
        td.style.cssText = `
        border:${border}px solid black;
        background-color:${cell};
        `;
      });
    });
  }

  renderNextBlock({ color, form }) {
    this.nextBlock.innerHTML = "";
    const table = document.createElement("table");

    table.style.cssText = `
      width:80px;height:80px;border:0px;
      border-spacing:0;border-collapse:collapse
    `;

    this.nextBlock.appendChild(table);

    form.forEach((row) => {
      const tr = table.appendChild(document.createElement("tr"));
      row.forEach((cell) => {
        const backgroundColor = cell ? color : "#bbb";
        const td = tr.appendChild(document.createElement("td"));
        td.style.cssText = `
        border:${cell}px solid black;
        background-color:${backgroundColor};
        `;
      });
    });
  }

  clear() {
    this.table.innerHTML = "";
    this.nextBlock.innerHTML = "";
  }
}
