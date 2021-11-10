import React from "react"
import {
    Text,
    HStack,
    Button,
} from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';


const SizeButtonList = ({colorSizeData, activeSize, activeText, onClickSizeButton}) => {
    let activeText2 = "In den Warenkorb";

    return(
        <HStack w="full" h="18%" alignItems="flex-start" justify="flex-start" flexWrap="wrap" spacing={1}>
        {
            colorSizeData.map(({ name, available, order, id }, index) => {

                // Validations.
                let variant;
                let requireIcon;

                if (available) {
                    variant = "sizeButton";
                } else {
                    if (order) {
                        requireIcon = true;
                        variant = "soldOutSizeButtonContact" // create new variant for this.
                    } else {
                        variant = "soldOutSizeButton";
                    }
                }

                // Logic for controlling active size when swithzcing colors.
                let superVariant = variant;
                if ((id === activeSize) && available) {
                    superVariant = "sizeButtonActive";
                    // Here I should change status of button in den waren korb.
                }

                if ((id === activeSize) && !available) {
                    // Here I should change status of button in den waren korb.
                    console.log("UPDATE CTA ERINERE MICH");
                    activeText2 = "Erinnere mich";
                }

                return (
                    <Button
                        key={id} // Generate unique id (pending).
                        variant={superVariant}
                        w="18%"
                        ml={1}
                        onClick={(e) => onClickSizeButton(id, order, activeText2)}
                    >
                        {!requireIcon && name}
                        {requireIcon && (
                            <HStack>
                                <Text>{name}</Text>
                                <EmailIcon />
                            </HStack>
                        )}
                    </Button>
                )
            })
        }
    </HStack>
    );
};

export default SizeButtonList;