import "../css/style.css";

import { createElement, appendChildren } from "./utils";
import getPhotoBox from "./getBoxMethods/getPhotoBox";
import getInfoBox from "./getBoxMethods/getInfoBox";
import getLanguagesBox from "./getBoxMethods/getLanguagesBox";
import getExperienceBox from "./getBoxMethods/getExperienceBox";
import getEducationBox from "./getBoxMethods/getEducationBox";
import getInterestsBox from "./getBoxMethods/getInterestsBox";
import Box from "../components/box/box";
import Button from "../components/button/button";

function getSections() {
  const sectionOne = createElement("section", "page__section");
  const sectionTwo = createElement("section", "page__section");
  const sectionThree = createElement("section", "page__section");
  return { sectionOne, sectionTwo, sectionThree };
}

function setPage() {
  const wrapper = createElement("section", "document__wrapper");
  const page = createElement("div", "page__wrapper");
  const sections = getSections();
  const { sectionOne, sectionTwo, sectionThree } = sections;

  const photoBox = getPhotoBox();
  const infoBox = getInfoBox();
  const languagesBox = getLanguagesBox();
  const experienceBox = getExperienceBox();
  const educationBox = getEducationBox();
  const interestsBox = getInterestsBox();
  const toolsBox = new Button("Download CV");

  const downloadButton = createElement("button", "page__button", "Download CV");

  appendChildren(sectionOne, [photoBox, infoBox, languagesBox]);
  appendChildren(sectionTwo, [experienceBox, toolsBox.block]);
  appendChildren(sectionThree, [educationBox, interestsBox]);
  appendChildren(page, [sectionOne, sectionTwo, sectionThree]);

  appendChildren(wrapper, [page, downloadButton]);

  appendChildren(document.body, wrapper);
}

setPage();
