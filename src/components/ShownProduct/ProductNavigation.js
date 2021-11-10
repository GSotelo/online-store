import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    HStack,
    Link,
} from "@chakra-ui/layout";

const ProductNavigation = (props) => (
    <HStack>
        <Link >
            <ArrowBackIcon mr={1} />
            Zurück
        </Link>
        <Breadcrumb />
    </HStack>
);

export default ProductNavigation;