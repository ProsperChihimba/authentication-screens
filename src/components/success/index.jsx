import React from 'react'
import { Flex, Box, Button, Avatar, Center, Text  } from '@chakra-ui/react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import RightSide from '../rightSide'

const Success = () => {
    return (
        <Flex>
            <RightSide />
            <Box background='white' width='50%' pl='100px' pr='100px' pt='250px' fontFamily='Inter'>

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

                <Button mb='20px' bg='#312ECB' color='white' size='sm' width='100%' fontSize='12px'>Login</Button>
            </Box>
        </Flex>
    )
}

export default Success