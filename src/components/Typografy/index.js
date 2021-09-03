import { Text } from "./styles.js";

const Typografy = ({ variant, children, ...props }) => {
  return (
    <Text {...props} as={variant}>
      {children}
    </Text>
  );
};

export default Typografy;
