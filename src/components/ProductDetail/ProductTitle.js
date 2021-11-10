import React from "react"
import {
    Text,
    HStack,
    Link
} from "@chakra-ui/react";

const ProductTitle = (props) => (
    <HStack w="full" h="5%" alignItems="center" spacing={4}>
        <Text variant="productName" >59.99 €</Text>
        <Text variant="productFitName" >
            inkl. MwSt. – ab 0,99 € <Link variant="underline">Standard Versand</Link>
        </Text>
    </HStack>
);


export default ProductTitle;
