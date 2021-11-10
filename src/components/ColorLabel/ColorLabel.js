import React from "react";
import { Image } from "@chakra-ui/react";


const ColorLabel = ({ id, url, onClick, activeColor }) => {
    console.log("color")
    console.log(activeColor);
    return (
        <Image
            src={url}
            alt="productColor"
            objectFit="contain"
            boxSize="24px"
            _hover={{ cursor: "pointer" }}
            onClick={(e) => onClick(e, id)}
            sx={{
                border: activeColor ? "1px solid #000000" : "none",
                padding: activeColor ? "1" : 0
            }}
        />
    )
};

export default ColorLabel;