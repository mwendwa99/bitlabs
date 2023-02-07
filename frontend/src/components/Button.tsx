import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";

interface Props {
  text: string | undefined;
  variant: ButtonProps["variant"];
  color: ButtonProps["color"];
}

const BasicButtons: React.FC<Props> = (props) => {
  return (
    <Button variant={props.variant} color={props.color}>
      {props.text}
    </Button>
  );
};

export default BasicButtons;
