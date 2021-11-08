const TextStyle = {
    // Style object for base or default styles.
    baseStyle: {
        letterSpacing:"normal"
    },

    // Styles for different sizes ("sm", "md", "lg").
    sizes: {},

    // Styles for different visual variants ("outline", "solid").
    variants: {
        logo:{
            letterSpacing:"0.5rem",
            color:"#121212"
        },
        stamp:{
            color:"#FFFFFF",
            backgroundColor:"#63C882",
            cursor:"text",
            fontSize:"0.8rem",
        },
        stampActive:{
            color:"#FFFFFF",
            cursor:"text",
            backgroundColor:"#009900",
            fontSize:"0.8rem",
        },
        productFitName:{
            color:"#121212",
            fontSize:"sm",
            fontWeight:"semibold"
        },
        productName:{
            color:"#121212",
            fontSize:"lg",
            fontWeight:"medium"
        },
        productColorDescriptionLabel:{
            color:"#121212",
            fontSize:"md",
            fontWeight:"medium",
            _hover:{
                cursor:"text"
            }
        },
        productColorDescriptionValue:{
            color:"#121212",
            lineHeight:"21px",
            fontSize:"sm",
            fontWeight:"normal"
        },

        infoSizeModel:{
            border:"1px solid #e0e0e0",
            color:"#121212",
            borderRadius: "35px",
            backgroundColor:"#FFF",
            padding:"4px 12px 4px 12px",
            fontSize:"12px",
            lineHeight:"21px",
            _hover:{
                cursor:"text"
            }

        }
    },

    // Default values for `size` and `variant`.
    defaultProps: {
        size: "",
    },
}

export default TextStyle;