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
  Text,
  Collapse
} from "@chakra-ui/react";

import { motion, AnimatePresence } from 'framer-motion'

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
          <chakra.a
              pl={{base: "4", md: "6" }}
              href="/"
              title="El Formoseño página web"
              display="flex"
              alignItems="center"
            >
              <Image alt="El Formoseño logo" w="14" src="https://i.postimg.cc/pXfyn7CN/logo-formoseno-blanco.png"/>
              <VisuallyHidden>El Formoseño</VisuallyHidden>
                 <VStack spacing="0" mt={{base:"2", md:"2"}}>
                 <Text fontWeight="semibold" fontFamily="Merriweather" fontSize="xl" ml={{ base:"4" , md:"6" }} mt={{ base: "4", md: "6" }} color="white" >
              El Formoseño
            </Text>
            <Text fontWeight="thin" fontFamily="Poppins" fontSize="2xs" ml={{ base:"2", md:"4" }} color="white" >
             Carbón, leña y postes.
            </Text>
            </VStack>
            </chakra.a>
            
            <AnimatePresence>
            {mobileNav.isOpen && (
            <Box as={motion.div} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} display={{ base: "inline-flex", md: "none" }}>
          
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                pt={4}
                pb={4}
             
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
            )}
            </AnimatePresence>
     
       
            <HStack pl="6"spacing={6} display={{ base: "none", md: "flex" }} >
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
            <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                pr="6"
                color="white"
                _dark={{ color: "inherit" }}
                variant="inline"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

          
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
