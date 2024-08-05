import "./box.css";
import { createElement } from "../../js/utils";

export default class Box {
  #className;
  #header;

  /**
   * @param {string} className - Класс CSS для обёртки блока.
   * @param {string} header - Заголовок блока
   */
  constructor(className, header) {
    this.#className = `box__wrapper ${className}`;
    this.#header = header;
    this.block = this.#getBoxWrapper();
  }

  #getBoxWrapper() {
    const block = document.createElement("div");
    block.className = this.#className;

    if (this.#header) {
      const header = createElement("h1", "box__header", this.#header);
      block.append(header);
    }

    return block;
  }
}

