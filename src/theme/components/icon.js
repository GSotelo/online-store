const IconStyle = {
    // Style object for base or default styles.
    baseStyle: {
       
    },

    // Styles for different sizes ("sm", "md", "lg").
    sizes: {},

    // Styles for different visual variants ("outline", "solid").
    variants: {
      roundIcon:{
          borderRadius:"50%",
          border:"1px solid red"
      }
    },

    // Default values for `size` and `variant`.
    defaultProps: {
        size: "md",

    },
}

export default IconStyle;