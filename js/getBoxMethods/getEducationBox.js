import Box from "../../components/box/box";
import Modal from "../../components/modal/modal";
import { education } from "../../public/boxData";
import { createElement, appendChildren } from "../utils";

export default function getEducationBox() {
  const educationBox = new Box("box__education", "Education");
  const educationWrapper = createElement("div", "education__wrapper");

  education.forEach((e, i) => {
    const modal = new Modal(i === 0, false, true);

    const contentParams = {
      topBarBig: e.year,
      header: e.nameTitle,
      description: e.tags.join(" "),
      additionalInfo: Array(e.additionalInfo.schoolName),
    };

    modal.setModalContent(contentParams);
    appendChildren(educationWrapper, modal.modal);
  });

  appendChildren(educationBox.block, educationWrapper);
  return educationBox.block;
}

