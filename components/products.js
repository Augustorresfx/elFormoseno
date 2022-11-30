import { Grid, Flex, Box, chakra, Image } from '@chakra-ui/react'
import Link from 'next/link'
export default function Products(){
    return(
        <>

         <Grid
 templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", xl: "repeat(2, 1fr)"}}
 columnGap={{ base: "16px", lg: "22px" }}
 justifyItems="center"
 bg="#edf3f8"
 padding={{ base: "0 16px" }}
 paddingTop="40px"
      >
        <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
 
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    border={'1px'}
    borderColor="black"
    boxShadow={'6px 6px 0 black'}
  >
    <Box  px={4} py={2}>
      <chakra.h1
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        CARBON DE LEÑA
      </chakra.h1>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
        quidem sequi illum facere recusandae voluptatibus
      </chakra.p>
    </Box>

    <Image
      h={64}
      w="full"
      fit="cover"
      mt={2}
      pb={2}
      src="https://i.postimg.cc/fbMgTdZZ/Paper-Bag-1.png"
      alt="Carbon de leña del norte"
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="white"
      roundedBottom="lg"
    >
      <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
        
      </chakra.h1>
      <Link href="https://wa.me/5491168678515?">
      <chakra.button
        px={2}
        py={1}
        bg="brand.900"
        fontSize="xs"
        color="white"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Consultar
      </chakra.button>
      </Link>
    </Flex>
  </Box>
</Flex>
<Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
    border={'1px'}
    borderColor="black"
    boxShadow={'6px 6px 0 black'}
  >
    <Box px={4} py={2}>
      <chakra.h1
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        Postes
      </chakra.h1>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
        quidem sequi illum facere recusandae voluptatibus
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="contain"
      mt={2}
      pb={2}
      src="https://i.postimg.cc/NGSmZcTq/IMG-20221020-WA0012.jpg"
      alt="Postes El Formoseño"
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="white"
      roundedBottom="lg"
    >
      <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
        
      </chakra.h1>
      <Link href="https://wa.me/5491168678515?">
      <chakra.button
        px={2}
        py={1}
        bg="brand.900"
        fontSize="xs"
        color="white"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.900",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Consultar
      </chakra.button>
      </Link>
    </Flex>
  </Box>
</Flex>

        </Grid>
        </>
    )
}