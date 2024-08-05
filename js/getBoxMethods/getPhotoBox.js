import { createElement, appendChildren } from "../utils";
import { photo } from "../../public/boxData";

export default function getPhotoBox() {
  const photoBox = createElement("div", "");

  const photoModal = createElement("img", "box__photo");
  photoModal.src = photo.src;
  appendChildren(photoBox, photoModal);

  return photoBox;
}

