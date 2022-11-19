import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Image,
  Text
} from "@chakra-ui/react";

import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillBell,
  AiOutlineMail,
  AiOutlineMan,
} from "react-icons/ai";
import { BsFillCameraVideoFill, BsPlus } from "react-icons/bs";
import { ArrowDownIcon, ChatIcon } from "@chakra-ui/icons";

export default function Navbar(){
  const bg = useColorModeValue("brand.800", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
      zIndex={4}
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        
        <Flex alignItems="center" justifyContent="space-between" mx="auto" zIndex={4}>
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                
                <CloseButton
                  color="white"
                  aria-label="Close menu"
                  justifySelf="self-end"
                  onClick={mobileNav.onClose}
                />
                <Button color="white" w="full" variant="ghost">
                  Por qué elegirnos
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  color="white"
                  
                >
                  Dónde nos ubicamos
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  color="white"
                  leftIcon={<ChatIcon />}
                >
                  Contáctenos
                </Button>
              </VStack>
            </Box>
            
            <chakra.a
              href="/"
              title="El Formoseño página web"
              display="flex"
              alignItems="center"
            >
              <Image w="14" src="https://i.postimg.cc/pXfyn7CN/logo-formoseno-blanco.png"/>
              <VisuallyHidden>El Formoseño</VisuallyHidden>
                 <Text fontSize="xl" ml={{ base:"4" , md:"10" }} mt={{ base: "4", md: "6" }} color="white" >
              El Formoseño
            </Text></chakra.a>
       
            <HStack left="20"spacing={2} display={{ base: "none", md: "flex" }} >
              <Button mt={{ base: "4", md: "6" }} variant="ghost" color="white"  size="sm">
                Por qué elegirnos
              </Button>
              <Button  top="3" variant="ghost" color="white"  size="sm">
                Dónde nos ubicamos
              </Button>
          
              <Button
                color="white"
                variant="ghost"
                leftIcon={<ChatIcon />}
                size="sm"
                top="3"
              >
                Contáctenos
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
        

          
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
