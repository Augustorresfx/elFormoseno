import React, { useRef } from "react";
import { chakra, Box, Button, Flex, SimpleGrid, Icon, Image, Container, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { ChatIcon } from "@chakra-ui/icons";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import Link from "next/link";


export default function Hero(){
  
  return (<>
  

    
    <SimpleGrid bg="000000" columns={{ base: 1, md: 2 }} p="4" spacing={0} zIndex={1}>
    <Flex >     
        <Image
           
  
          src="https://i.postimg.cc/8c3zqKqV/CARBON-LE-A.jpg"
          alt="Carbón, leña y postes El Formoseño"
          fit="contain"
     
   
        
          loading="lazy"
          opacity={1}
          
        />

      </Flex>
      
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={8}
       
        zIndex={0}
      >
        <chakra.span
          color="brand.600"
          _dark={{ color: "gray.300" }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Tenemos
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: "gray.300" }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          Carbón de leña de madera del norte
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="brand.600"
          _dark={{ color: "gray.400" }}
          letterSpacing="wider"
        >
          Entregamos en Mar del Plata y alrededores.
        </chakra.p>
       
        <Link zIndex={1} legacyBehavior href={"https://wa.me/5492236356514?"}>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            href="https://wa.me/5491168678515?"
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            _light={{ color: "white" }}
            bg="brand.900"
            _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.800",
              _dark: { bg: "brand.600" },
            }}
          >
            Charlemos!
            <Icon as={ChatIcon} ml={2} />
          </chakra.a>
        </Box>
        </Link>
       

      </Flex>

     
   
    </SimpleGrid>
      <Divider orientation='horizontal' />
    </>
  );
};

