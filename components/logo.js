import NextLink from 'next/link'
import { HStack, Box, Text, useColorModeValue } from '@chakra-ui/react'

export default function Logo() {
    const accent = useColorModeValue(
        'linear(to-br, teal.500, cyan.400)',
        'linear(to-br, teal.300, cyan.500)'
    )
    const text = useColorModeValue('gray.800', 'whiteAlpha.900')

    return (
        <NextLink href="/" passHref legacyBehavior>
            <HStack
                as="a"
                spacing="10px"
                h="40px"
                px="8px"
                align="center"
                transition="all .2s"
                _hover={{ transform: 'translateY(-1px)' }}
            >
                <Box
                    w="28px"
                    h="28px"
                    rounded="full"
                    bgGradient={accent}
                    display="grid"
                    placeItems="center"
                    fontWeight="900"
                    fontSize="sm"
                    color="white"
                    boxShadow="md"
                >
                    L
                </Box>
                <Text
                    color={text}
                    fontFamily="Inter, 'M PLUS Rounded 1c', system-ui, -apple-system, sans-serif"
                    fontWeight="800"
                    fontSize="18px"
                    lineHeight="1"
                    letterSpacing="-0.2px"
                    style={{
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale'
                    }}
                >
                    Leonardo{' '}
                    <Text
                        as="span"
                        fontWeight="800"
                        bgGradient={accent}
                        bgClip="text"
                    >
                        López
                    </Text>
                </Text>
            </HStack>
        </NextLink>
    )
}
