import { FC } from "react";
import React from "react";
import { Container, Button, Section, Modal } from "../../components";
import man from "../../assets/man.svg";

let sections = [
  {
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
  {
    title: "Section 2",
    description: "This is the second section",
    image: {
      src: "https://bitlabs.io/wp-content/uploads/2021/07/Bitlabs-Logo-1.png",
      alt: "bitlabs",
      boolean: true,
    },
    // button: <Button variant="contained" text="Click Me" color="secondary" />,
  },
];

const Landing: React.FC = () => {
  return (
    <Container>
      <Modal />
      <Section data={sections} />
    </Container>
  );
};

export default Landing;
