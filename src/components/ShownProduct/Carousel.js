import React from "react";
import ImageList from "./CustomImage";

import { HStack, Container } from "@chakra-ui/layout";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Carousel = (props) => (
    <Container maxW="max" p={0} pt={4} pb={4}>
        <HStack>
            <ChevronLeftIcon color="#121212" fontSize="3xl" />
            <ImageList />
            <ChevronRightIcon color="#121212" fontSize="3xl" />
        </HStack>
    </Container>
);

export default Carousel;