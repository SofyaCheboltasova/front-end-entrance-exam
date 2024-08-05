import Box from "../../components/box/box";
import { createElement, appendChildren } from "../utils";
import { info } from "../../public/boxData";

export default function getInfoBox() {
  const infoBox = new Box("box__info");

  const topBar = createElement("p", "info__topBar", info.greetingPhrase);
  const name = createElement("h1", "info__name", info.info.name);
  const role = createElement("h1", "info__role", info.info.role);

  const infoBlock = createElement("div");
  appendChildren(infoBlock, [name, role]);
  appendChildren(infoBox.block, [topBar, infoBlock]);

  return infoBox.block;
}

