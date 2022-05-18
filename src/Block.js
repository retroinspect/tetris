import { randomNumber } from "../utils.js";
export const Block = ({ color, forms, origins }) =>
  class {
    // 블록 form에서 (0, 0)의 위치
    constructor(y, x) {
      Object.assign(this, {
        shape: randomNumber(forms.length),
        y,
        x,
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

    get block() {
      return { color, form: forms[this.shape] };
    }

    get form() {
      return forms[this.shape];
    }

    get color() {
      return color
    }
  };
