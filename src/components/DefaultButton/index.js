import React from "react";
import { Button } from "./styles.js";

const DefaultButton = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  );
});

DefaultButton.displayName = "DefaultButton";

export default DefaultButton;
