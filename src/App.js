import React from "react";
import Product from "./components/Product/Product";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme/index";

const App = () => (
  <ChakraProvider resetCSS theme={theme}>
      <Product />
    </ChakraProvider>
);

export default App;
