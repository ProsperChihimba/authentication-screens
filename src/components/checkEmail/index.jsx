import React from 'react'
import { Flex, Box, Text, Button  } from '@chakra-ui/react'
import RightSide from '../rightSide'

const CheckEmail = () => {
    return (
        <Flex>
            <RightSide />
            <Box background='white' width='50%' pl='100px' pr='100px' pt='200px' fontFamily='Inter'>
                <Text
                    as='b'
                    color='#040308'
                    fontWeight='bold'
                    fontSize='25px'
                    mb='20px'
                >
                    Check your Email
                </Text>
                <Text
                    color='#040308'
                    fontSize='12px'
                    mb='55px'
                >
                    We have sent an email with password reset information to n****e@e***e.com.
                </Text>

                <Text
                    color='#040308'
                    fontSize='12px'
                    mb='20px'
                >
                    Didn’t receive the email? Check spam or promotion folder or
                </Text>
                

                <Button mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Resend Email</Button>

                <Button bg='#FFFFFF' color='black' size='sm' border='2px' width='100%' fontSize='12px'>Back to Login</Button>
            </Box>
        </Flex>
    )
}

export default CheckEmail