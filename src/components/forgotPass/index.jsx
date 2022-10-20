import React from 'react'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Checkbox, Button, Divider  } from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import RightSide from '../rightSide'

const ForgotPass = () => {
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
                    Forgot Password
                </Text>
                <Text
                    color='#040308'
                    fontSize='12px'
                    mb='55px'
                >
                    Enter the email you used to create your account so we can send you instructions on how to reset your password.
                </Text>

                <Input
                    placeholder='Email'
                    type='email'
                    size='md'
                    borderColor='gray'
                    fontSize='15px'
                    mb='20px'
                />
                

                <Button mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Send</Button>

                <Button bg='#FFFFFF' color='black' size='sm' border='2px' width='100%' fontSize='12px'>Back to Login</Button>
            </Box>
        </Flex>
    )
}

export default ForgotPass