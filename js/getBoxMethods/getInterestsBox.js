import Box from "../../components/box/box";
import { createElement, appendChildren } from "../utils";
import { interests } from "../../public/boxData";

export default function getInterestsBox() {
  const interestBox = new Box("box__interests", "Interests");

  const interestsWrapper = createElement("div", "interests__wrapper");
  interests.forEach((interest) => {
    const modal = createElement("div", "interests_modal", interest);
    appendChildren(interestsWrapper, modal);
  });

  appendChildren(interestBox.block, interestsWrapper);
  return interestBox.block;
}

