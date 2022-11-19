import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image, Container } from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";
import { ChatIcon } from "@chakra-ui/icons";

export default function Hero(){
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} p="4" spacing={0} zIndex={-1}>
      <Flex borderRadius="xl"  zIndex={-1} bg="brand.900">

        <Image
        borderRadius="xl" 
          src="https://i.postimg.cc/v89RvxK9/20220829-180637.jpg"
          alt="Carbón, leña y postes El Formoseño"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.800"
          loading="lazy"
          opacity={0.6}
          
        />

      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={8}
        zIndex={-1}
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
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            _light={{ color: "white" }}
            bg="brand.900"
            _dark={{ bg: "brand.500" }}
            _hover={{
              bg: "brand.700",
              _dark: { bg: "brand.600" },
            }}
          >
            Charlemos!
            <Icon as={ChatIcon} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

