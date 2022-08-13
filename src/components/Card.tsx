import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CardHeader } from './CardHeader';

export const Card = ():JSX.Element => {
    return (
        <Flex as="section" flexDir="column" experimental_spaceY="28px">
            <CardHeader />
            <Box as="article" w="480px" padding="2rem" bgColor="white" color="darkBrown" borderRadius="10px">
                <Heading as="h1" fontSize="26px">Spending - Last 7 days</Heading>
                <Box>
                    <Heading>Aqui ira la chart!</Heading>
                </Box>
            </Box>
        </Flex>
    )
}