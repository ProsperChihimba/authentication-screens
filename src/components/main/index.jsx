import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import RightSide from '../rightSide'

const Main = () => {
    return (
        <Flex>
            <RightSide />
            <Box w='50%' >Main</Box>
        </Flex>
    )
}

export default Main