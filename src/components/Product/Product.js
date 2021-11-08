import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductImage from "../ProductImage/ProductImage";
import { Wrap } from "@chakra-ui/react";

import withCenteredComponent from "../hocs/withCenteredComponent";

const Product = () => {
    let EnhancedProductImage = withCenteredComponent(ProductImage);
    let EnhancedProductDetail = withCenteredComponent(ProductDetail);

    return (
        <Wrap spacing="1rem">
            <EnhancedProductImage />
            <EnhancedProductDetail />
        </Wrap>
    );
};

export default Product;


