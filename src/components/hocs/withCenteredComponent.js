import React, { Component } from "react";
import { Center, WrapItem } from "@chakra-ui/layout";

/**
 * 
 * @param {*} WrappedComponent 
 * @returns Center component inside a wrap item component.
 */
const withCenteredComponent = WrappedComponent => {

    return class extends Component {
        render() {
            return (
                <WrapItem>
                    <Center>
                        <WrappedComponent />
                    </Center>
                </WrapItem>
            );
        }
    }
};

export default withCenteredComponent;