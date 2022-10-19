import React from 'react'
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import logo from '../../assets/logo.png'

const RightSide = () => {
    return (
        <Box w='50%' bg='#040308' h='100vh' p='100px' fontFamily='Inter'>
            <Flex>
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
            </Flex>
        </Box>
    )
}

export default RightSide