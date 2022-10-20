import React from 'react'
import { Box, Image, Flex, Text, Spacer } from '@chakra-ui/react';
import logo from '../../assets/logo.png'

const RightSide = () => {
    return (
        <Box
            w='50%'
            bg='#040308'
            h='100vh'
            pl={{ base: 'none', md: '70px', xl: '100px' }}
            pt='60px'
            pb='60px'
            display={{ base: 'none', md: 'block', xl: 'block' }}
            fontFamily='Inter'
        >
            <Flex direction='column' h='100%' >
                <Flex gap='30px'>
                    <Image src={logo} w='55px' h='40px' />
                    <Text
                        color='#FFFFFF'
                        fontWeight='700'
                        fontSize='30px'
                    >
                        DopeSaas
                    </Text>
                </Flex>
                <Spacer />
                <Text
                    color='#FFFFFF'
                    fontWeight='700'
                    fontSize='36px'
                    mb='20px'
                >
                    Numquam architecto iure
                </Text>
                <Text
                    color='white'
                    fontWeight='100'
                    fontSize='16px'
                >
                    Ut corrupti est molestiae occaecati voluptatem vel harum explicabo numquam.
                </Text>
            </Flex>
        </Box>
    )
}

export default RightSide