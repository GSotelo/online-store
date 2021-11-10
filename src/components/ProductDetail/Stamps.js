import React from "react"
import {
    Text,
    HStack
} from "@chakra-ui/react";


// Logic can be added to avoid hard coded content.
const Stamps = () => (
    <HStack w="full" h="5%" alignItems="center" spacing={4}>
        <Text variant="stamp" p={1}>Organic</Text>
        <Text variant="stampActive" p={1}>I AM SUSTAINABLE</Text>
    </HStack>
);


export default Stamps
