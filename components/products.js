import { Grid, Flex, Box, chakra, HStack, Image, Center, Stack, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
export default function Products(){
    return(
        <>

         <Grid
 templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(1, 1fr)", xl: "repeat(3, 1fr)"}}
 columnGap={{ base: "16px", lg: "22px" }}
 justifyItems="center"
 bg="#edf3f8"
 alignItems="center"
 padding={{ base: "0 16px" }}
 paddingTop="40px"
      >
        
        <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250'}
        maxH={''}
        w={'full'}
        bg='gray.100'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={240}
            width={282}
            alt="Carbon de leña de quebracho"
            objectFit={'cover'}
            src={'https://i.postimg.cc/d3rNT0Q9/bolsa1.png'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Carbón de Leña
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            Lorem ipsum dolor sit amet consectetur adipiscing.
            </Text>
    
          </Stack>

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
        </Stack>
      </Box>
    </Center>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250'}
        maxH={''}
        w={'full'}
        bg='gray.100'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={240}
            width={282}
            alt="Leña de quebracho"
            objectFit={'cover'}
            src={'https://i.postimg.cc/ZYdMQwPy/bolsa2.png'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Leña de quebracho
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            Lorem ipsum dolor sit amet consectetur adipiscing.
            </Text>
    
          </Stack>

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
        </Stack>
      </Box>
    </Center>
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'250'}
        maxH={''}
        w={'full'}
        bg='gray.100'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'xl'}
            height={240}
            width={282}
            alt="Leña de quebracho"
            objectFit={'cover'}
            src={'https://i.postimg.cc/bwxBH3xx/IMG-20221020-WA0012.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Postes
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            Lorem ipsum dolor sit amet consectetur adipiscing.
            </Text>
    
          </Stack>

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
        </Stack>
      </Box>
    </Center>

        </Grid>
        </>
    )
}