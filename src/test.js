import { tests } from "./BlockManager.spec.js";

for (const tc of Object.keys(tests)) {
    console.log(tc);
    tests[tc]();
  }
