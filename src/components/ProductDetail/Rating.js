import React from "react"
import { StarIcon } from '@chakra-ui/icons';

import {
    HStack,
    Link,
} from "@chakra-ui/react";

const Rating = () => {
    const starIcons = [...Array(5).keys()].map((_, index) => <StarIcon boxSize={3} key={index} />);
    return (
        <HStack w="full" h="5%" alignItems="center" spacing={4}>
            {starIcons}<Link variant="underline">2</Link>
        </HStack>
    );
}

export default Rating;
