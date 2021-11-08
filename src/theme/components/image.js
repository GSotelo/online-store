const ImageStyle = {
    // Style object for base or default styles.
    baseStyle: {},

    // Styles for different sizes ("sm", "md", "lg").
    sizes: {},

    // Styles for different visual variants ("outline", "solid").
    variants: {
        colorLabel:{
            _hover:{
                height:"100px"

            }
        }
    },

    // Default values for `size` and `variant`.
    defaultProps: {
        size: "",
    },
}

export default ImageStyle;