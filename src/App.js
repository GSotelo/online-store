import React, { Component } from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductImage from "./components/ProductImage/ProductImage";
import Product from "./components/Product/Product";
import {
  ChakraProvider,
  Container,
  Flex,
  // Box,
  // Text,
  // Link,
  VStack,
  // Code,
  // Grid,
  //theme,
} from "@chakra-ui/react";

import theme from "./theme/index";

const App = () => {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Container maxW="full" p={0}>
        <Flex h="100vh"direction={{ base: "column", md: "row" }} >
          <VStack flex={3} padding={4} >
            <ProductImage />
          </VStack>

          <VStack flex={1.3} padding={4} >
            <ProductDetail />
          </VStack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
