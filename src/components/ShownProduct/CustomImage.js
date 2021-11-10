import React from "react";

import { Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react"
import pathImage1 from "../../assets/images/1.jpg";
import pathImage2 from "../../assets/images/2.jpg";

const ImageList = (props) => {
    // We can continue adding logic and splitting component even more.
    // To do.
    
    // Images props.
    const propsImage1 = {
        flex: 1,
        src: pathImage1,
        boxSize: "xl",
        fit: "cover",
        maxH: "100%",
        h: "100%",
        w: "50%"
    };

    const propsImage2 = {
        flex: 1,
        src: pathImage2,
        display: ["none", "none", "none", "none", "none", "block"],
        boxSize: "xl",
        fit: "contain",
        maxH: "100%",
        h: "100%",
        w: "50%"
    };

    return (
        <Flex h="90%" >
            <Image {...propsImage1} />
            <Image {...propsImage2} />
        </Flex>
    );
}

export default ImageList;

