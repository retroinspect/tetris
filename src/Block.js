import { randomNumber } from "../utils.js";
export const Block = ({ color, forms, origins }) =>
  class {
    // 블록 form에서 (0, 0)의 위치
    constructor() {
      Object.assign(this, {
        shape: randomNumber(forms.length),
        y: 0,
        x: 0,
      });
    }

    // 돌리는 걸 여기서 처리하는게 맞나???
    rotateRight() {
      const origin = origins[this.shape];

      if (this.shape < forms.length) {
        this.shape++;
      } else {
        this.shape = 0;
      }

      const dy = origin.y - origins[this.shape].y;
      const dx = origin.x - origins[this.shape].x;
      this.y += dy;
      this.x += dx;
    }

    // rotateLeft() {
    //   if (this.shape > 0) {
    //     this.shape--;
    //   } else {
    //     this.shape = forms.length - 1;
    //   }
    // }

    move(y, x) {
      this.y = y;
      this.x = x;
    }

    get bottom() {
      for (let i = this.form.length - 1; i >= 0; i--) {
        for (let j = 0; j < this.form[0].length; j++) {
          if (this.form[i][j] == 1) {
            return i
          }
        }
      }
      throw 'invalid block'
    }

    get top() {
      for (let i = 0; i < this.form.length; i++) {
        for (let j = 0; j < this.form[0].length; j++) {
          if (this.form[i][j] == 1) {
            return i
          }
        }
      }
      throw 'invalid block'
    }

    get leftMost() {
      for (let j = 0; j < this.form[0].length; j++) {
        for (let i = 0; i < this.form.length; i++) {
          if (this.form[i][j] == 1) {
            return j
          }
        }
      }
      throw 'invalid block'
    }

    get form() {
      return forms[this.shape];
    }

    get color() {
      return color
    }
  };
