import Box from "../../components/box/box";
import { createElement, appendChildren } from "../utils";
import { languages } from "../../public/boxData";

export default function getLanguagesBox() {
  const languagesBox = new Box("box__languages", "Languages");
  const langsBlock = createElement("div", "langs__block");

  languages.forEach((language) => {
    const langBlock = createElement("div", "lang__block");
    const lang = createElement("p", "lang__name", language.lang);

    const progressBarContainer = createElement("div", "progressBar__wrapper");
    const progressBar = createElement("div", "progressBar");
    progressBar.style.width = `${language.progress}%`;

    appendChildren(progressBarContainer, [progressBar]);

    appendChildren(langBlock, [lang, progressBarContainer]);
    appendChildren(langsBlock, langBlock);
  });

  languagesBox.block.appendChild(langsBlock);
  return languagesBox.block;
}

