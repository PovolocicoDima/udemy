import React, { FC } from "react";
import { useState } from "react";

export enum CardVariant {
  outline = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  const [state, setState] = useState(0);

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? "1px solid black" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
