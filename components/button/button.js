import { createElement, appendChildren } from "../../js/utils";

export default class Button {
  #text;
  #link;

  /**
   * @param {string} text - Текст кнопки
   * @param {string} link - Ссылка
   */
  constructor(text, link) {
    this.#text = text;
    this.#link = link;

    this.wrapper = this.#getButtonWrapper();
  }

  #getButtonWrapper() {
    const wrapper = createElement("div", "button__wrapper");
    const buttonText = createElement("a", "interests_modal", this.#text);
    buttonText.href = this.#link;

    appendChildren(wrapper, buttonText);

    return wrapper;
  }
}

