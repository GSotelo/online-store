import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Progress,
    
  } from "@chakra-ui/react";

 
  const CustomDrawer = ({isOpen, onClose}) => {


    return(
        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Wähle deine Größe</DrawerHeader>

          <DrawerBody>
            <Progress size="xs" isIndeterminate />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }

  export default CustomDrawer;