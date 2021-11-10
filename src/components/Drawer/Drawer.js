import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
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