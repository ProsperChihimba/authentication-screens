import React from 'react'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import RightSide from '../rightSide'

const Verify = () => {
    return (
        <Flex>
            <RightSide />
            <Box pr='100px' background='white' pl='100px' width={{ base: '100%', md: '50%', xl: '50%' }} pt='200px' fontFamily='Inter'>
                <Text
                    as='b'
                    color='#040308'
                    fontWeight='900'
                    fontSize='28px'
                    mb='20px'
                >
                    Verify your Email
                </Text>
                <Text
                    color='#040308'
                    fontSize='12px'
                    mb='70px'
                >
                    We have sent a verification email to n****e@e***e.com.
                </Text>
                <Text
                    color='#040308'
                    fontSize='12px'
                    mb='20px'
                >
                    Didn’t receive the email? Check spam or promotion folder or
                </Text>
                <Button mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Resend Email</Button>
            </Box>
        </Flex>
    )
}

export default Verify