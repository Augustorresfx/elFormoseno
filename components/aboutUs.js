import React from "react";

import { Box, Button, chakra, Flex, Image, SimpleGrid } from "@chakra-ui/react";

export default function AboutUs(){
  return (

      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="semibold"
              letterSpacing="normal"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Perfecto para calefaccionar
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
             Lorem ipsum dolor sit amet consectetur adipiscing elit, vel convallis facilisi habitasse malesuada tempus non condimentum, curae euismod cursus mattis nam nascetur.
            </chakra.p>
          
          </Box>
          <Box
            w="full"
            h="full"
            py={0}
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
          >
            <Image src="https://i.postimg.cc/Hsz2ghh6/fire-7539572-1920.jpg"/>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
              Acompañamos tus asados
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Nos centramos en mantener una buena calidad en nuestros productos.
            </chakra.p>
          
          </Box>
          <Box
            w="full"
            h="full"
           
            bg="gray.200"
            _dark={{ bg: "gray.700" }}
            
          >
            <Image src="https://i.postimg.cc/WpWzcm7M/bbq-4373644-1920.jpg"/>
          </Box>
        </SimpleGrid>
      </Box>

  );
};
