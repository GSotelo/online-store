import React, { useState } from "react";
import ColorLabel from "../ColorLabel/ColorLabel";
import ObjectManager from "../../utils/objects/ObjectManager";
import { EmailIcon } from '@chakra-ui/icons';
import colorsDataAsJSON from "../../assets/json/configuration/colorsData.json";
import ColorLabelList from "./ColorLabelList";
import CustomDrawer from "../Drawer/Drawer";
import Fitname from "./Fitname";
import ProductCTA from "./ProductCTA";
import ProductDecription from "./ProductDescription";
import ProductSizeDescription from "./ProductSizeDescription";
import ProductLastDetails from "./ProductLastDetails";
import Rating from "./Rating";
import Stamps from "./Stamps";
import urls from "./urls";
import { useDisclosure } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import {
    Text,
    HStack,
    VStack,
    Button,
} from "@chakra-ui/react";

const ProductDetail = (props) => {
    // Hooks.
    const [activeColors, setActiveColors] = useState(new Array(8).fill(false));
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSize, setActiveSize] = useState(null);
    const [flag, setFlag] = useBoolean();
    const { isOpen, onOpen, onClose } = useDisclosure();

    // General.
    let activeText = "In den Warenkorb";

    // Events.
    const onClickColorLabel = (e, id) => {
        const visibilities = new Array(8).fill(false);
        visibilities[id] = true;
        setActiveColors(visibilities); // Track which is color is active selection.
        setActiveColorIndex(id); // Depending on index, display product stock data. 
    }

    const onClickSizeButton = (id, order) => {
        /*
        * id=0 => First color
        * id=6 => Last color
        */

        // Order means: Size is sold out but you can still order the product and wait for it.
        setActiveSize(id);
        if (order) onOpen();
    }

    // Focus given to heart icon.
    const onClickFavouriteIcon = () => setFlag.toggle();

    // All available colors and their corresponding data.
    var colorsData = colorsDataAsJSON.colors.map(el => el.sizes);

    // Target color data and its specific sizes (sold out, stock, etc).
    const colorSizeData = ObjectManager.GetObjectValues(colorsData[activeColorIndex]);

    console.log(activeColors[activeColorIndex]);
    return (
        <VStack bg="#FFF" w="full" h="full" spacing={1}>
            <Stamps />
            <Fitname />
            <ProductDecription />
            <Rating />

            {/*Color label list component. */}
            <HStack w="full" maxW="full" h="4%" alignItems="flex-start" spacing={4} justify="flex-start">
                {
                    urls.map((url, index) => (
                        <ColorLabel
                            key={index}
                            id={index}
                            url={url}
                            onClick={onClickColorLabel}
                            activeColor={activeColors[index]}
                        />
                    ))
                }
            </HStack>
            {/* <ColorLabelList 
                onClickColorLabel={onClickColorLabel}
                activeColors={activeColors[activeColorIndex]}
            /> */}

            <HStack w="full" h="4%" alignItems="center" spacing={4}>
                <Text variant="productColorDescriptionLabel" >Größe</Text>
            </HStack>

            {/* Button logic. To be extracted. */}
            <HStack w="full" h="18%" alignItems="flex-start" justify="flex-start" flexWrap="wrap" spacing={1}>
                {
                    colorSizeData.map(({ name, available, order, id }, index) => {

                        // Validations.
                        let variant;
                        let requireIcon;
                        let marginLeft = 0;

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

                        // Add margin to first button.
                        if (index === 1) {
                            marginLeft = 5;
                        } else {
                            marginLeft = 0;
                        }

                        // Logic for controlling active size when swithzcing colors.
                        let superVariant = variant;
                        if ((id === activeSize) && available) {
                            superVariant = "sizeButtonActive";
                            // Here I should change status of button in den waren korb.
                        }

                        if ((id === activeSize) && !available) {
                            activeText = "Erinnere mich";
                            // Here I should change status of button in den waren korb.
                        }

                        return (
                            <Button
                                key={id} // Generate unique id (pending).
                                variant={superVariant}
                                w="18%"
                                ml={1}
                                // onClick={(e) => setActiveSize(id) }
                                onClick={(e) => onClickSizeButton(id, order)}

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

            <ProductSizeDescription />
            <ProductCTA 
                activeText={activeText} 
                flag={flag} 
                onClickFavouriteIcon={onClickFavouriteIcon}
            />
            <ProductLastDetails />
            <CustomDrawer isOpen={isOpen} onClose={onClose} />
        </VStack>
    );
}

export default ProductDetail;