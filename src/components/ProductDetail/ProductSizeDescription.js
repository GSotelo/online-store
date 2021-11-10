import React from "react"
import {
    Text,
    HStack,
    Link,
    Icon,
} from "@chakra-ui/react";

import { RiRulerLine } from "react-icons/ri";

const ProductSizeDescription = () => (
    <>
        <HStack w="full" h="6%" alignItems="flex-end" justify="flex-start" flexWrap="wrap" spacing={1}>
            <Link>
                <HStack>
                    <Icon as={RiRulerLine} />
                    <Link>Zur Größentabelle</Link>
                </HStack>
            </Link>
        </HStack>
        <HStack w="full" h="6%" alignItems="center" justify="flex-start" flexWrap="wrap" spacing={1}>
            <Link>
                <HStack>
                    <Text variant="productColorDescriptionLabel">Größeninfo</Text>
                    <Text variant="infoSizeModel">Fällt normal aus</Text>
                </HStack>
            </Link>
        </HStack>

        <HStack w="full" h="8%" alignItems="center" justify="flex-start" flexWrap="wrap" spacing={1}>
            <Link>
                <HStack>
                    <Text variant="productColorDescriptionLabel">Modell</Text>
                    <Text variant="infoSizeModel">189cm groß</Text>
                    <Text variant="infoSizeModel">trägt Größe M</Text>
                </HStack>
            </Link>
        </HStack>
    </>
);


export default ProductSizeDescription;
