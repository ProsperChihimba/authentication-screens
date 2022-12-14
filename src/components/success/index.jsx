import React from 'react'
import { Flex, Box, Button, Avatar, Center, Text } from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom'
import { AiOutlineCheckCircle } from "react-icons/ai";
import RightSide from '../rightSide'

const Success = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
    navigate('/');
    };

    return (
        <Flex>
            <RightSide />
            <Box background='white' width={{ base: '100%', md: '50%', xl: '50%' }} pl={{ base: '50px', md: '80px', xl: '100px' }} pr={{ base: '50px', md: '80px', xl: '100px' }} pt={{ base: '200px', md: '200px', xl: '250px' }} fontFamily='Inter'>

                <Center>
                    <Avatar mb='20px' size='lg' bg='green.100' icon={<AiOutlineCheckCircle size='50px' color='green' />} />
                </Center>
                
                <Center>
                    <Text
                    color='#040308'
                    fontSize='12px'
                    as='b'
                    mb='20px'
                >
                    Password reset successfully
                </Text>
                </Center>

                <Button onClick={navigateToLogin} mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Login</Button>
            </Box>
        </Flex>
    )
}

export default Success