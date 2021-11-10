import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import ShownProduct from "../ShownProduct/ShownProduct";

import { 
    Container,
    Flex,
    VStack, 
 } from "@chakra-ui/react";

const Product = () => {
    return (
        <Container maxW="max" minW="lg">
            <Flex direction={{base:"column", md:"row"}} >
                <VStack 
                    w={["100%, 100%, 100%", "100%", "70%"]} 
                    padding={6} 
                >
                    <ShownProduct />
                </VStack>

                <VStack 
                    w={["100%, 100%, 100%", "100%", "30%"]} 
                    pl={6}  
                    pt={[0, 0, 24, 24, 24]}  
                >
                    <ProductDetail />
                </VStack>
            </Flex>
        </Container>
    );
};

export default Product;


