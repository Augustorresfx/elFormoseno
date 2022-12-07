import {
    Box,
    Flex,
    HStack,
    Image,
    Link,
    Stack,
    Text,
    VStack,
    Divider,
    Icon,
    chakra,
    VisuallyHidden
  } from "@chakra-ui/react";
  import React from "react";
  import { GrInstagram } from "react-icons/gr";
  import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  import { FiTwitter } from "react-icons/fi";
  
  export default function Footer(){
    return (
      <Box bg="white" _dark={{ bg: "gray.600" }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
          <chakra.a
              pl={{base: "0", md: "6" }}
              href="/"
              title="El Formoseño página web"
              display="flex"
              alignItems="center"
            >
              <Image alt="El Formoseño logo" w="14" src="https://i.postimg.cc/vZx9jXL3/logo-formoseno.png"/>
              <VisuallyHidden>El Formoseño</VisuallyHidden>
                 <VStack spacing="0" mt={{base:"2", md:"2"}}>
                 <Text fontWeight="semibold" fontFamily="Merriweather" fontSize="xl" ml={{ base:"4" , md:"6" }} mt={{ base: "4", md: "6" }} color="gray.900" >
              El Formoseño
            </Text>
            <Text fontWeight="thin" fontFamily="Poppins" fontSize="2xs" ml={{ base:"2", md:"4" }} color="gray.900" >
             Carbón, leña y postes.
            </Text>
            </VStack>
            </chakra.a>
          </Flex>
          <HStack
          
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{ base: "12px", md: "16px" }}
            color="gray.800"
            _dark={{ color: "white" }}
            textAlign={{ base: "left", md: "left" }}
          >
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "2", md: "12" }}>
            <Flex  justify="start" direction="column">
           
              <Link href="#PorQueElegirnos" mt={6} textTransform="uppercase">Por qué elegirnos</Link>
              <Link href="#Productos" textTransform="uppercase">Nuestros Productos</Link>
            </Flex>

            <Flex  justify="start" direction="column">
              <Link href="#Contactenos" mt={6} textTransform="uppercase">Contáctenos</Link>
              <Link hreF="https://wa.me/5491122503326?" textTransform="uppercase">Contácte al desarrollador</Link>
              </Flex>
              </Flex>
          </HStack>
      

        
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{ color: "#F9FAFB" }}
          h="3.5px"
        />
        <VStack py={3}>
          {/* <HStack justify="center">
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaFacebookF}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={GrInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{ color: "white" }}
                h="20px"
                w="20px"
                as={FaLinkedinIn}
              />
            </Link>
          </HStack> */}
  
          <Text textAlign="center" fontSize="smaller" _dark={{ color: "white" }}>
            &copy; 2022 Copyright El Formoseño. Todos los derechos reservados.
          </Text>
        </VStack>
      </Box>
    );
  };
  
  