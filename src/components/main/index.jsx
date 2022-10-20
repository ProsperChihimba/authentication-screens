import React from 'react'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Checkbox, Button, Divider } from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom'
import { AiFillEyeInvisible, AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import RightSide from '../rightSide'

const Main = () => {

    const navigate = useNavigate();

    const navigateToVerifyEmail = () => {
    navigate('/verify-email');
    };

    const navigateToLogin = () => {
    navigate('/');
    };

    return (
        <Flex>
            <RightSide />
            <Box  background='white' pl={{ base: '50px', md: '100px', xl: '100px' }} pr={{ base: '50px', md: '100px', xl: '100px' }} pt='80px' width={{ base: '100%', md: '50%', xl: '50%' }} fontFamily='Inter'>
                <Text
                    as='b'
                    color='#040308'
                    fontWeight='bold'
                    fontSize='25px'
                    mb='20px'
                >
                    Create account
                </Text>
                <Flex mb='55px'>
                    <Text
                        color='#040308'
                        fontSize='12px'
                    >
                        Already have an account? 
                    </Text>
                    <Text
                        color='#312ECB'
                        fontSize='12px'
                        onClick={navigateToLogin}
                        cursor='pointer'
                    >
                        &nbsp;Login
                    </Text>
                </Flex>

                <Flex gap='20px' mb='20px'>
                    <Input
                        borderColor='gray'
                        placeholder='First Name'
                        size='md'
                        fontSize='15px'
                    />
                    <Input
                        placeholder='Last Name'
                        size='md'
                        borderColor='gray'
                        fontSize='15px'
                    />
                </Flex>
                <Input
                    placeholder='Email'
                    type='email'
                    size='md'
                    borderColor='gray'
                    fontSize='15px'
                    mb='20px'
                />
                <InputGroup>
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
                

                <Flex mb='20px'>
                    <Checkbox size='md' borderColor='gray' />
                    <Text
                        color='#040308'
                        fontSize='12px'
                    >
                        &nbsp;I agree to DopeSass
                    </Text>
                    <Text
                        color='#312ECB'
                        fontSize='12px'
                    >
                        &nbsp;Terms of service
                    </Text>
                    <Text
                        color='#040308'
                        fontSize='12px'
                    >
                        &nbsp;and
                    </Text>
                    <Text
                        color='#312ECB'
                        fontSize='12px'
                    >
                        &nbsp;Privacy policy
                    </Text>
                </Flex>

                <Button onClick={navigateToVerifyEmail} mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Create Account</Button>

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

export default Main