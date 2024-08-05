import Box from "../../components/box/box";
import Modal from "../../components/modal/modal";
import { experience } from "../../public/boxData";
import { appendChildren } from "../utils";

export default function getExperienceBox() {
  const experienceBox = new Box("box__experience", "Experience");

  experience.forEach((e, i) => {
    const modal = new Modal(i === 0);
    const companyName = e.jobInfo.aboutJob.companyName;

    const contentParams = {
      topBarSmall: e.date,
      header: e.jobInfo.roleName,
      description: `${companyName ? `${companyName} | ` : ""} ${e.jobInfo.aboutJob.info}`,
      additionalInfo: e.jobInfo.additionalInfo.points,
    };

    modal.setModalContent(contentParams);
    appendChildren(experienceBox.block, modal.modal);
  });

  return experienceBox.block;
}

