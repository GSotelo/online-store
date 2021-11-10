// theme/index.js
import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
// i.e. Borders.

// Component style overrides
import Button from "./components/button";
import Icon from "./components/icon";
import Image from "./components/image";
import Link from "./components/link";
import Text from "./components/text";

const overrides = {
  styles,
  //borders,
  // Other foundational style overrides go here
  
  components: {
    Button,
    Icon,
    Image,
    Link,
    Text,
    // Other components go here
  },
};

export default extendTheme(overrides);