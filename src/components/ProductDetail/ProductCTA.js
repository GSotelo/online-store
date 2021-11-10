import React from "react"
import {
    Flex,
    Text,
    VStack,
    Button,
    Link,
    Box,
    Spacer,
    Icon
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa"


const ProductCTA = ({ activeText, flag, onClickFavouriteIcon }) => {
    // Some logic.
    return (
        <VStack w="full" h="18%" alignItems="center" spacing={2}>
            <Flex w="100%" justify="space-between" alignItems="center">
                <Button size="md" variant="addToBasketButton" flex={6}>{activeText}</Button>
                <Spacer flex={1} />
                <Box flex={1}>
                    <Icon
                        border="1px solid #e0e0e0"
                        color={flag ? "#000" : "#e0e0e0"}
                        h="40px"
                        w="40px"
                        borderRadius="100%"
                        fontSize="3xl" p={2}
                        as={FaRegHeart}
                        onClick={() => onClickFavouriteIcon()}
                    />
                </Box>
            </Flex>

            <Flex w="100%" justify="space-between" alignItems="center">
                <Button size="md" variant="reserveButton" flex={3}>Im Store reservieren</Button>
                <Spacer />
            </Flex>

            <Flex w="100%" justify="space-between" alignItems="center">
                <Link flex={1} variant="underline">
                    <Text variant="productFitName"> Info - Im Store reservieren </Text>
                </Link>
            </Flex>
        </VStack>
    );
}


export default ProductCTA


