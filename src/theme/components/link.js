const LinkStyle = {
    // Style object for base or default styles.
    baseStyle: {
        mr: 4,
        _hover: {
            textDecoration: "none"
        }
    },

    // Styles for different sizes ("sm", "md", "lg").
    sizes: {},

    // Styles for different visual variants ("outline", "solid").
    variants: {
        underline:{
            textDecoration:"underline",
            textDecorationColor:"#3E95F7",
            _hover:{
                textDecoration:"underline",
            }
        }
    },

    // Default values for `size` and `variant`.
    defaultProps: {
        size: "",
    },
}

export default LinkStyle;