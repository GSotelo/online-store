import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { ArrowBackIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Image } from "@chakra-ui/react"
import {
    Flex,
    VStack,
    HStack,
    Box,
    Stack,
    Link,
    Text
} from "@chakra-ui/layout";

import fooPath from "../../assets/images/1.jpg";
import barPath from "../../assets/images/2.jpg";

const ProductImage = () => {

    // 1. Breadcrumb navigation. OK

    // 2. Image.

    // 3. Logo.

    return (
        <Flex h="100%" w="100%" direction="column">
            <Flex h="5%" justify="flex-start" alignItems="center">
                <Link >
                    <ArrowBackIcon mr={1} />
                    Zurück
                </Link>
                <Breadcrumb />
            </Flex>

            <VStack h="90%">
                <HStack w="full" h="full" justify="space-between" spacing={0}>
                    <ChevronLeftIcon color="#121212" fontSize="3xl" />
                    <Flex h="90%">
                        <Image
                            flex={1}
                            src={fooPath}
                            boxSize={"xl"}
                            fit="contain"
                            maxH="100%"
                            h="100%"
                        />
                        <Image
                            flex={1}
                            display={["none", "none", "none", "none", "none", "block"]}
                            src={barPath}
                            boxSize={"xl"}
                            fit="contain"
                            maxH="100%"
                            h="100%"
                        />
                    </Flex>
                    <ChevronRightIcon color="#121212" fontSize="3xl" />
                </HStack>
            </VStack>

            <VStack h="5%">
                <Flex h="full" w="full" justify="flex-start" alignItems="center">
                    <Text variant="logo">ESPRIT</Text>
                </Flex>
            </VStack>
        </Flex>
    );
}

export default ProductImage;