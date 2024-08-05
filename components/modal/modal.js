import "./modal.css";
import { createElement, appendChildren } from "../../js/utils";

export default class Modal {
  #backgroundColor;
  #color;

  /**
   * @param {boolean} isColored - Определяет цвет фона модального окна.
   * @param {boolean} isRounded - Определяет модальное окно с бОльшим border-radius
   * @param {boolean} isShort 	- Определяет длину модального окна
   */
  constructor(isColored = false, isRounded = false, isShort = false) {
    this.#backgroundColor = isColored ? "#28D979" : "#FFF";
    this.#color = isColored ? "#fff" : "#000";

    this.modal = this.#getModalWrapper();

    isRounded && this.modal.classList.add("rounded");
    isShort && this.modal.classList.add("short");
  }

  #getModalWrapper() {
    const modal = createElement("div", "modal__wrapper");
    modal.style.backgroundColor = this.#backgroundColor;
    modal.style.color = this.#color;
    return modal;
  }

  setModalContent(content) {
    const { topBarBig, topBarSmall, header, description, additionalInfo } =
      content;

    const topBar = createElement(
      "p",
      `modal__${topBarBig ? "topBarBig" : "topBarSmall"}`,
      topBarBig || topBarSmall
    );
    const headerElem = createElement("p", "modal__header", header);
    const descriptionElem = createElement(
      "p",
      "modal__description",
      description
    );

    const additionalInfoUl = createElement("ul", "modal__ul");
    additionalInfo.forEach((info) => {
      const li = createElement("li", "modal__li", info);
      appendChildren(additionalInfoUl, li);
    });

    const textBlock = createElement("div", "modal__textBlock");
    const contentBlock = createElement("div", "modal__contentBlock");

    appendChildren(textBlock, [headerElem, descriptionElem]);
    appendChildren(contentBlock, [textBlock, additionalInfoUl]);
    appendChildren(this.modal, [topBar, contentBlock]);
  }
}

