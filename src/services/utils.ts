import React, { ReactNode } from "react";

export const repeatNode = (count: number, reactNode: ReactNode) => {
  const elementKey = React.Children.map(reactNode, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { key: index });
    }
  });
  return ","
    .repeat(count - 1)
    .split(",")
    .map(() => elementKey);
};
