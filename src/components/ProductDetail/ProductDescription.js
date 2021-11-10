import React from "react"
import {
    Text,
    HStack,
    Link,
} from "@chakra-ui/react";

const ProductDecription = () => (
    <>
        <HStack w="full" h="7%" alignItems="center" spacing={4}>
            <Text variant="productName" >Sweatshirt aus 100% Organic Cotton</Text>
        </HStack>

        <HStack w="full" h="5%" alignItems="center" spacing={4}>
            <Text variant="productName" >59.99 €</Text>
            <Text variant="productFitName" >
                inkl. MwSt. – ab 0,99 € <Link variant="underline">Standard Versand</Link>
            </Text>
        </HStack>

        <HStack w="full" h="5%" alignItems="center" spacing={4}>
            <Text variant="productColorDescriptionLabel" >Farbe</Text>
            <Text variant="productColorDescriptionValue" >PETROL BLUE</Text>
        </HStack>
    </>
);


export default ProductDecription
