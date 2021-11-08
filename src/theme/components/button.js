const ButtonStyle = {
    // Style object for base or default styles.
    baseStyle: {
    },

    // Styles for different sizes ("sm", "md", "lg").
    sizes: {},

    // Styles for different visual variants ("outline", "solid").
    variants: {
        sizeButton:{
            border:"1px solid #000",
            backgroundColor:"#FFF",
            padding:0,
            _focus:{
                boxShadow:"none"
            },
            _hover:{
                backgroundColor:"#000",
                color:"#FFF",
            },
            borderRadius:0
        },

        soldOutSizeButton:{
            backgroundColor:"#FFF",
            border:"1px solid #e0e0e0",
            borderRadius:0,
            textDecoration:"line-through",
            color:"#dadada",
            _hover:{
                cursor:"not-allowed"
            },
            _focus:{
                boxShadow:"none"
            },
        },

        findSizeButton: {
            border:"1px solid #000",
            backgroundColor:"#FFF",
            borderRadius:0,
            color:"#000",
            fontWeight:"normal",
            _hover:{
                backgroundColor:"#000",
                color:"#FFF",
                opacity:0.75
            },
            _focus:{
                boxShadow:"none"
            },
        },

        addToBasketButton:{
            border:"1px solid #000",
            fontWeight:"normal",
            color:"#FFF",
            borderRadius:0,
            bg:"#000",
            _hover:{
                opacity:0.5
            }
        },

        reserveButton:{
            border:"1px solid #000",
            color:"#000",
            fontWeight:"normal",
            borderRadius:0,
            bg:"#FFF",
            _hover:{
                color:"#FFF",
                bg:"#000",
                opacity:0.5
            }
        }
    },

    // Default values for `size` and `variant`.
    defaultProps: {
        size: "sm",
    },
}

export default ButtonStyle;