import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, AspectRatio } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail, href }) => {
    const to = href ?? `/works/${id}`

    return (
        <Box w="100%" textAlign="center">
            <NextLink href={to} passHref legacyBehavior>
                <LinkBox
                    as="article"
                    cursor="pointer"
                    transition="all .2s"
                    _hover={{ transform: 'translateY(-2px)' }}
                >
                    {/* Contenedor con relación 16:9 */}
                    <Box
                        position="relative"
                        w="100%"
                        rounded="12px"
                        overflow="hidden"
                        mb={3}
                        bg="whiteAlpha.100"
                        sx={{ aspectRatio: '16 / 9' }} // <- clave
                    >
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            sizes="(max-width: 48em) 100vw, (max-width: 80em) 50vw, 33vw"
                            placeholder="blur"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>

                    <LinkOverlay href={to}>
                        <Text
                            mt={2}
                            fontSize={20}
                            fontWeight="semibold"
                            noOfLines={1}
                        >
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text
                        fontSize={14}
                        color="whiteAlpha.800"
                        noOfLines={2}
                        minH="40px"
                        mt={1}
                    >
                        {children}
                    </Text>
                </LinkBox>
            </NextLink>
        </Box>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)
