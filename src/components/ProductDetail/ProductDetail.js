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

// 1. Import
import { Icon } from "@chakra-ui/react"
import { FaInfo, FaRegHeart } from "react-icons/fa"
import { RiRulerLine } from "react-icons/ri";

import { StarIcon, EmailIcon } from '@chakra-ui/icons';


const ProductDetail = () => {
    const stampItems = StringManager.getStampList();

    // Hooks.
    const [activeColors, setActiveColors] = useState(new Array(8).fill(false));
    // Events.
    const onClickColorLabel = (e, id) => {
        const visibilities = new Array(8).fill(false);
        visibilities[id]=true;
        setActiveColors(visibilities);
    }

    // Generate stars.
    const starIcons = [...Array(5).keys()].map((_, index) => <StarIcon boxSize={3} key={index} />);

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

        <VStack bg="#FFF" w="full" h="full" spacing={1} p={4}>
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
                <Button variant="sizeButton" w="18%" ml={1}>XS</Button>
                <Button variant="sizeButton" w="18%">S</Button>
                <Button variant="sizeButton" w="18%">M</Button>
                <Button variant="sizeButton" w="18%">L</Button>
                <Button variant="sizeButton" w="18%">XL</Button>
                <Button variant="sizeButton" w="18%">XXL</Button>
                <Button variant="soldOutSizeButton" w="18%">
                    <HStack>
                        <Text>XS</Text>
                        <EmailIcon/>
                    </HStack>
                </Button>
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
                    <Button size="md" variant="addToBasketButton" flex={6}>In den Warenkorb</Button>
                    <Spacer flex={1}/>
                    <Box flex={1}>
                        <Icon border="1px solid #e0e0e0" color="#e0e0e0" h="40px" w="40px"  borderRadius="100%" fontSize="3xl" p={2} as={FaRegHeart} variant="roundIcon" />
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


        </VStack>

    );
}

export default ProductDetail;