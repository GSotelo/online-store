import React, { Component } from "react";
import {
  ChakraProvider,
  // Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  // Grid,
  theme,
} from "@chakra-ui/react";

class App extends Component {

  render() {
    return (
      <ChakraProvider theme={theme}>
        App
      </ChakraProvider>
    );
  }
}

export default App;
