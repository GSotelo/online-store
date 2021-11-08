// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
// import borders from "./foundations/borders";


// Component style overrides
import Button from "./components/button";
import Link from "./components/link";
import Text from "./components/text";
import Image from "./components/image";
import Icon from "./components/icon";

const overrides = {
  styles,
  //borders,
  // Other foundational style overrides go here
  components: {
    Link,
    Text,
    Image,
    Button,
    Icon,
    // Other components go here
  },
};

export default extendTheme(overrides);