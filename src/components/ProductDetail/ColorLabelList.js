import React from "react"
import ColorLabel from "../ColorLabel/ColorLabel";
import { HStack } from "@chakra-ui/react";
import urls from "./urls";

const ColorLabelList = ({ onClickColorLabel, activeColor }) => (
    <HStack w="full" maxW="full" h="4%" alignItems="flex-start" spacing={4} justify="flex-start">
        {
            urls.map((url, index) => (
                <ColorLabel
                    key={index}
                    id={index} 
                    url={url}
                    onClick={(e)=>onClickColorLabel(e,index)}
                    activeColor={activeColor}
                />
            ))
        }
    </HStack>
);

export default ColorLabelList;
