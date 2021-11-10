import React from "react";
import Carousel from "./Carousel";
import EspritLogo from "./EspritLogo";
import ProductNavigation from "./ProductNavigation";
import { Flex } from "@chakra-ui/layout";

const ShownProduct = () => {

    return (
        <Flex h="100%" direction="column">
            <ProductNavigation />
            <Carousel />
            <EspritLogo />
        </Flex>
    );
}

export default ShownProduct;