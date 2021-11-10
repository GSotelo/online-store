import React from "react"
import {
    Text,
    VStack,
    Link,
} from "@chakra-ui/react";

const ProductLastDetails = (props) => (
    <VStack w="full" h="20%" alignItems="center" justify="flex-end" spacing={2} wrap="wrap">
        <Text w="full" variant="productColorDescriptionValue">Obermaterial: 100% Baumwolle (Biobaumwolle)</Text>
        <Text w="full" variant="productColorDescriptionValue">021EE2J307_451</Text>
        <Link w="full" variant="underline">
            <Text variant="productFitName"> Mehr Infos </Text>
        </Link>
    </VStack>
);

export default ProductLastDetails;
