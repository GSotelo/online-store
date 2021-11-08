import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

const CustomBreadcrumb = (props) => (
    <Breadcrumb>
        <BreadcrumbItem >
            <BreadcrumbLink href="#">Men</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href="#">Bekleidung</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <BreadcrumbLink href="#">Sweatshirts & Sweatjacken</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Sweatshirts</BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);

export default CustomBreadcrumb;