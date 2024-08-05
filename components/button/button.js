import { createElement, appendChildren } from "../../js/utils";
import jsPDF from "jspdf";

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

  downloadPDF(element) {
    const doc = new jsPDF();
    const specialElementHandlers = {
      "#editor": function () {
        return true;
      },
    };

    doc.fromHTML(element.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers,
    });

    doc.save("resume.pdf");
  }
}

