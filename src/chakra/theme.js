import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    "*, *::before, *::after": {
      wordWrap: "initial",
    },
    body: {
      margin: 0,
      padding: 0,
      lineHeight: 1.5,
      fontFamily: "var(--font-basic)",
      fontSize: "var(--font-size-paragraph)",
      backgroundColor: "var(--color-white)",
      color: "var(--color-primary-600)",
    },
    ".sectionTitle": {
      lineHeight: 1,
    },
  }),
};

const theme = extendTheme({
  styles,
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "#4a5e58",
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "#4a5e58",
      },
    },
  },
});

export default theme;
