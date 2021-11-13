import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from "@chakra-ui/icons"


const Page = () => {
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a full-stack developer based in Mexico!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Leonardo Daniel López López
                        </Heading>
                        <p>Full-stack Developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={"center"}>
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/winter.jpg" alt="Profile Image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Paragraph</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />}>
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1999</BioYear>
                        Nació en Morelia Michoacan
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Comenzó a estudiar en el Instituto Técnologico de Morelia la carrera de Ingenieria en Sistemas Computacionales
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page