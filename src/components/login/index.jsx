import React from 'react'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Checkbox, Button, Divider  } from '@chakra-ui/react'
import { AiFillEyeInvisible, AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import RightSide from '../rightSide'

const Login = () => {
    return (
        <Flex>
            <RightSide />
            <Box background='white' width='50%' pl='100px' pr='100px' pt='80px' fontFamily='Inter'>
                <Text
                    as='b'
                    color='#040308'
                    fontWeight='bold'
                    fontSize='25px'
                    mb='20px'
                >
                    Welcome Back
                </Text>
                <Flex mb='55px'>
                    <Text
                        color='#040308'
                        fontSize='12px'
                    >
                        Don't have an account? 
                    </Text>
                    <Text
                        color='#312ECB'
                        fontSize='12px'
                        
                    >
                        &nbsp;Sign Up
                    </Text>
                </Flex>

                <Input
                    placeholder='Email'
                    type='email'
                    size='md'
                    borderColor='gray'
                    fontSize='15px'
                    mb='20px'
                />
                <InputGroup width='100%'>
                    <Input
                        placeholder='Password'
                        size='md'
                        type='password'
                        borderColor='gray'
                        fontSize='15px'
                        mb='20px'
                    />
                    <InputRightElement children={<AiFillEyeInvisible color='gray' />} />
                </InputGroup>
                

                <Flex mb='20px' align='end'>
                    <Text
                        color='#312ECB'
                        fontSize='12px'
                    >
                        Forgot Password
                    </Text>
                </Flex>

                <Button mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Login</Button>

                <Flex gap='10px' mb='20px'>
                    <Divider orientation='horizontal' color='gray' mt='6px' size='lg' /> 
                    <Text fontSize='10px'>Or</Text>
                    <Divider orientation='horizontal' mt='6px' /> 
                </Flex>

                <Button mb='20px' leftIcon={<AiOutlineGoogle />} bg='#FFFFFF' color='black' border='2px' size='sm' width='100%' fontSize='12px'>Continue with Google</Button>

                <Button leftIcon={<AiFillApple />} bg='#FFFFFF' color='black' size='sm' border='2px' width='100%' fontSize='12px'>Continue with Apple</Button>
            </Box>
        </Flex>
    )
}

export default Login