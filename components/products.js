import { Grid, Flex, Box, chakra, HStack, Image, Center, Stack, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
export default function Products(){
    return(
        <>
        
  <chakra.h2  
  bg="white"
  pos={"relative"}
              mt={-24}
              ml={{base: 0, md:4, lg:8, }}
              mb={12}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "center" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
            Nuestros Productos
            </chakra.h2>
           
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
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={270}
            width={292}
            alt="Carbon vegetal"
            objectFit={'cover'}
            src={'https://i.postimg.cc/W4NmhbqN/bolsa-papel-4kg.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Carbón vegetal
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            En bolsa de papel de 4kg o de 5kg.
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
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={270}
            width={282}
            alt="Postes"
            objectFit={'cover'}
            src={'https://i.postimg.cc/BvmTD92x/bolsa-naylon-5kg.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Carbón vegetal 5kg
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            En bolsa de naylon de 5kg.
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
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={264}
            width={282}
            alt="Postes"
            objectFit={'cover'}
            src={'https://i.postimg.cc/mgNNLFDp/bolsa-naylon-3kg.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Carbón vegetal 3kg 
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            En bolsa de naylon de 3kg.
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
        bg='white'
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
            src={'https://i.postimg.cc/7brLVdBY/bois-buches-1-stere-de-50-cm-1.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Leña de algarrobo
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            En bolsa de 10kg, o a granel.
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
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={240}
            width={282}
            alt="Leña de quebracho para calefaccion y asado"
            objectFit={'cover'}
            src={'https://i.postimg.cc/qB9h6M6s/lena-quebracho-colorado.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Leña de quebracho
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            En bolsa de 10kg, o a granel.
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
        bg='white'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
      
          <Image
            rounded={'sm'}
            height={240}
            width={282}
            alt="Postes"
            objectFit={'cover'}
            src={'https://i.postimg.cc/bwxBH3xx/IMG-20221020-WA0012.jpg'}
          />
     
        <Stack pt={10} align={'left'}>
          
          <Heading textAlign={''} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Postes
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={400} fontSize={'md'}>
            Postes de quebracho.
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