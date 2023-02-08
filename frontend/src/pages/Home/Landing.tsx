import { FC } from "react";
import React from "react";
import { Container, Button, Section, Modal, List } from "../../components";
import man from "../../assets/man.svg";
import icons from "../../assets/icons.webp";
import maintenance from "../../assets/maintenance.svg";
import test from "../../assets/test.svg";
import customize from "../../assets/customize.svg";
import consult from "../../assets/consult.svg";

let section1 = [
  {
    mdGridType: 6,
    title: `Elevate your business with expert software solutions`,
    description:
      "Revolutionize your business with BitLabs: expert custom software solutions that drive results",
    image: {
      src: man,
      alt: "bitlabs",
      boolean: true,
    },
    button: <Button variant="contained" text="Get Started" color="primary" />,
  },
];

const listArray = [
  {
    title: "Testing",
    description:
      "Rigorous testing and quality assurance processes to ensure reliability and efficiency.",
    icon: test,
  },
  {
    title: "Customizability",
    description:
      "Custom software solutions tailored to meet the unique needs and goals of our clients.",
    icon: customize,
  },
  {
    title: "Maintenance",
    description:
      "Ongoing maintenance and support to ensure that our clients' software solutions continue to meet their needs over time.",
    icon: maintenance,
  },
  {
    title: "Consultation",
    description:
      "Technical consulting and guidance to help clients understand and evaluate their options.",
    icon: consult,
  },
];

let section2 = [
  {
    mdGridType: 4,
    title: "Efficiency, Innovation, Success",
    description:
      "Unmatched support for your success: custom software solutions",
    image: {
      src: icons,
      alt: "bitlabs",
      boolean: true,
    },
    listComponent: <List data={listArray} />,
  },
];

const Landing: React.FC = () => {
  return (
    <Container>
      <Modal />
      <Section data={section1} />
      <Section data={section2} />
    </Container>
  );
};

export default Landing;
