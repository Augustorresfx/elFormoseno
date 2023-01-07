import {
    Container,
    Box,
    chakra,
    Text,
    SimpleGrid,
    Flex,
    Link,
    useColorModeValue
  } from '@chakra-ui/react';
import { SVGProps } from 'react';
import { FaWarehouse } from 'react-icons/fa';
import { MdOutlineWaterDamage } from 'react-icons/md';
import { GiCampfire } from 'react-icons/gi'

export default function Features(){
    return (
        <Container pos={"relative"} marginBottom="200" maxW="6xl" p={{ base: 5, md: 10 }}>
          <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
            Por qué elegirnos
          </chakra.h3>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
         
              <Box
                
                bg={useColorModeValue('gray.100', 'gray.700')}
                p={6}
                rounded="lg"
                textAlign="center"
                pos="relative"
              >
                <Flex
                  p={2}
                  w="max-content"
                  color="white"
                  bgGradient="linear(to-br, #fcba03, #ff904f)"
                  rounded="md"
                  marginInline="auto"
                  pos="absolute"
                  left={0}
                  right={0}
                  top="-1.5rem"
                  boxShadow="lg"
                >
                  <FaWarehouse/>
                </Flex>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                  Libre de humedad
                </chakra.h3>
                <Text fontSize="md" mt={4}>
                    Nuestros productos están estacionados en almacenes 100% libres de humedad.
                </Text>
              
              </Box>
            
              <Box
                
                bg={useColorModeValue('gray.100', 'gray.700')}
                p={6}
                rounded="lg"
                textAlign="center"
                pos="relative"
              >
                <Flex
                  p={2}
                  w="max-content"
                  color="white"
                  bgGradient="linear(to-br, #fcba03, #ff904f)"
                  rounded="md"
                  marginInline="auto"
                  pos="absolute"
                  left={0}
                  right={0}
                  top="-1.5rem"
                  boxShadow="lg"
                >
                  <GiCampfire/>
                </Flex>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                  No produce chispa
                </chakra.h3>
                <Text fontSize="md" mt={4}>
                    Nuestro carbón vegetal casi no produce chispa.
                </Text>
                
              </Box>

              <Box
                
                bg={useColorModeValue('gray.100', 'gray.700')}
                p={6}
                rounded="lg"
                textAlign="center"
                pos="relative"
              >
                <Flex
                  p={2}
                  w="max-content"
                  color="white"
                  bgGradient="linear(to-br, #fcba03, #ff904f)"
                  rounded="md"
                  marginInline="auto"
                  pos="absolute"
                  left={0}
                  right={0}
                  top="-1.5rem"
                  boxShadow="lg"
                >
                  <MdOutlineWaterDamage/>
                </Flex>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                  Industria Argentina
                </chakra.h3>
                <Text fontSize="md" mt={4}>
                    Todos nuestros productos son orgullosamente hechos en Argentina.
                </Text>
                
              </Box>
          </SimpleGrid>
        </Container>
      );
    
};