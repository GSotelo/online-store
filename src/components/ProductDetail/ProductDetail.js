import React, { useState } from "react";
import StampList from "../StampList/StampList";
import StringManager from "../../utils/strings/StringManager";
import {
    Flex,
    Text,
    HStack,
    Container,
    VStack,
    Button,
    Link,
    Stack,
    Box,
    Spacer
} from "@chakra-ui/react";

import ColorLabel from "../ColorLabel/ColorLabel";
import ObjectManager from "../../utils/objects/ObjectManager";

// 1. Import
import { Icon } from "@chakra-ui/react"
import { FaInfo, FaRegHeart } from "react-icons/fa"
import { RiRulerLine } from "react-icons/ri";

import { StarIcon, EmailIcon } from '@chakra-ui/icons';
import colorsData from "../../assets/json/configuration/colorsData.json";

import CustomDrawer from "../Drawer/Drawer";
import { useDisclosure } from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";


const ProductDetail = () => {
    
    // Hooks.
    const [activeColors, setActiveColors] = useState(new Array(8).fill(false));
    const [activeColorIndex, setActiveColorIndex] = useState(0);
    const [activeSize, setActiveSize] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [flag, setFlag] = useBoolean();
 
    

    let activeText = "In den Warenkorb";
    
    // Others.
    const stampItems = StringManager.getStampList();
    
    // Events.
    const onClickColorLabel = (e, id) => {
        const visibilities = new Array(8).fill(false);
        visibilities[id]=true;
        setActiveColors(visibilities);
        setActiveColorIndex(id);
    }

    const onClickSizeButton = (id, order) => {
        setActiveSize(id);

        if(order){
            onOpen();
        }
    }

    const onClickFavouriteIcon= () => {
        // variantIcon
        setFlag.toggle();
        
    }

    // Generate stars.
    const starIcons = [...Array(5).keys()].map((_, index) => <StarIcon boxSize={3} key={index} />);

    // Control for colors.
    if(activeSize === null){
        console.log("Active size still null");
    }else{
        console.log(`Active color-> ${activeColorIndex}`);
        console.log(`Active size-> ${activeSize}`);
    }
   

    var allColors = colorsData.colors.map(el => el.sizes); // All available colors.
    const superFoo = ObjectManager.GetObjectValues(allColors[activeColorIndex]); // Color with all specific sizes.

 

    const urls = [
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_451_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_230_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_345_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_400_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_420_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_001_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_270_74",
        "https://esprit.scene7.com/is/image/esprit/021EE2J307_750_74"
    ];



    return (

        <VStack bg="#FFF" w="full" h="full" spacing={1}>
            {/* <StampList items={stampItems} /> */}
            <HStack w="full" h="5%" alignItems="center" spacing={4}>
                <Text variant="stamp" p={1}>Organic</Text>
                <Text variant="stampActive" p={1}>I AM SUSTAINABLE</Text>
            </HStack>

            <HStack w="full" h="3%" alignItems="center" spacing={4}>
                <Text variant="productFitName" >REGULAR FIT</Text>
            </HStack>

            <HStack w="full" h="7%" alignItems="center" spacing={4}>
                <Text variant="productName" >Sweatshirt aus 100% Organic Cotton</Text>
            </HStack>

            <HStack w="full" h="5%" alignItems="center" spacing={4}>
                <Text variant="productName" >59.99 €</Text>
                <Text variant="productFitName" >
                    inkl. MwSt. – ab 0,99 € <Link variant="underline">Standard Versand</Link>
                </Text>
            </HStack>

            <HStack w="full" h="5%" alignItems="center" spacing={4}>
                {starIcons}<Link variant="underline">2</Link>
            </HStack>

            <HStack w="full" h="5%" alignItems="center" spacing={4}>
                <Text variant="productColorDescriptionLabel" >Farbe</Text>
                <Text variant="productColorDescriptionValue" >PETROL BLUE</Text>
            </HStack>

            <HStack w="full" maxW="full" h="4%" alignItems="flex-start" spacing={4} justify="flex-start">
                {
                    urls.map((url, index) => (
                        <ColorLabel 
                            key={index}
                            id={index} url={url} 
                            onClick={onClickColorLabel} 
                            activeColor={activeColors[index]}  
                        />
                    ))
                }
            </HStack>

            <HStack w="full" h="4%" alignItems="center" spacing={4}>
                <Text variant="productColorDescriptionLabel" >Größe</Text>
            </HStack>

            <HStack w="full" h="18%" alignItems="flex-start" justify="flex-start"  flexWrap="wrap" spacing={1}>
                {
                    superFoo.map(({name, available, order, id}, index) => {

                        // Validations.
                        let variant;
                        let requireIcon;
                        let marginLeft = 0;

                        if (available) {
                            variant = "sizeButton";
                        } else {
                            if (order) {
                                requireIcon = true;
                                variant="soldOutSizeButtonContact" // create new variant for this.
                            }else{
                                variant="soldOutSizeButton";
                            }
                        }

                        // Add margin to first button.
                        if(index === 1){
                            marginLeft=5;
                        }else{
                            marginLeft=0;
                        }

                        // Logic for controlling active size when swithzcing colors.
                        let superVariant = variant;
                        if((id === activeSize) && available){
                            superVariant="sizeButtonActive";
                            // Here I should change status of button in den waren korb.
                        }

                        if((id === activeSize) && !available){
                            activeText="Erinnere mich";
                            // Here I should change status of button in den waren korb.
                        }

                        return (
                            <Button
                                key={id} // Generate unique id (pending).
                                variant={superVariant}
                                w="18%"
                                ml={1}  
                                // onClick={(e) => setActiveSize(id) }
                                onClick={(e) => onClickSizeButton(id, order) }

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

            <HStack w="full" h="8%" alignItems="center" justify="flex-start"  flexWrap="wrap" spacing={1}>
                <Button variant="findSizeButton" p={2} size="md" ml={1}>
                    <HStack>
                        <Text>Find deine Größe</Text>
                        <Icon as={FaInfo} />
                    </HStack>
                </Button>
            </HStack>

            <HStack w="full" h="6%" alignItems="flex-end" justify="flex-start" flexWrap="wrap" spacing={1}>
                <Link>
                    <HStack>
                        <Icon as={RiRulerLine} />
                        <Link>Zur Größentabelle</Link>
                    </HStack>
                </Link>
            </HStack>

            <HStack w="full" h="6%" alignItems="center" justify="flex-start" flexWrap="wrap" spacing={1}>
                <Link>
                    <HStack>
                        <Text variant="productColorDescriptionLabel">Größeninfo</Text>
                        <Text variant="infoSizeModel">Fällt normal aus</Text>
                    </HStack>
                </Link>
            </HStack>

            <HStack w="full" h="8%" alignItems="center" justify="flex-start" flexWrap="wrap" spacing={1}>
                <Link>
                    <HStack>
                        <Text variant="productColorDescriptionLabel">Modell</Text>
                        <Text variant="infoSizeModel">189cm groß</Text>
                        <Text variant="infoSizeModel">trägt Größe M</Text>
                    </HStack>
                </Link>
            </HStack>

            <VStack w="full" h="18%" alignItems="center" spacing={2}>
                <Flex w="100%" justify="space-between" alignItems="center">
                    <Button size="md" variant="addToBasketButton" flex={6}>{activeText}</Button>
                    <Spacer flex={1}/>
                    <Box flex={1}>
                        <Icon                   
                            border="1px solid #e0e0e0" 
                            color={flag ? "#000" : "#e0e0e0"}
                            h="40px"
                            w="40px"  
                            borderRadius="100%" 
                            fontSize="3xl" p={2} 
                            as={FaRegHeart} 
                            onClick={()=>onClickFavouriteIcon()}
                            
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

            <VStack w="full" h="20%" alignItems="center" justify="flex-end" spacing={2} wrap="wrap">
                <Text w="full" variant="productColorDescriptionValue">Obermaterial: 100% Baumwolle (Biobaumwolle)</Text>
                <Text w="full"  variant="productColorDescriptionValue">021EE2J307_451</Text>
                <Link w="full"  variant="underline">
                    <Text variant="productFitName"> Mehr Infos </Text>
                </Link>
            </VStack>

                {/* Control state here */}
                <CustomDrawer isOpen={isOpen} onClose={onClose}/>

        </VStack>

    );
}

export default ProductDetail;