import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductImage from "../ProductImage/ProductImage";
import { 
    Container,
    Flex,
    VStack, 
 } from "@chakra-ui/react";

const Product = () => {
    return (
        <Container maxW="max">
            <Flex direction={{base:"column", md:"row"}} >
                <VStack w={["100%, 100%, 100%", "100%", "70%"]} padding={1} >
                    <ProductImage />
                </VStack>

                <VStack w={["100%, 100%, 100%", "100%", "30%"]}  >
                    <ProductDetail />
                </VStack>
            </Flex>
        </Container>
    );
};

export default Product;


