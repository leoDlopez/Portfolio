import { Container, Box, Heading, Image, useColorModeValue, Button, SimpleGrid, List, ListItem, Icon, Link } from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
    IoLogoDiscord,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail,
} from 'react-icons/io5'
import { GridItem } from "../components/grid-item"
import { useRouter } from "next/router"

const Page = () => {
    const router = useRouter()
    let salutation = router.locale == 'es-MX' ? 'Hola, soy un Ingeniero de Software mexicano!' : "Hello, I'm a software engineer based in Mexico!"
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    {salutation}
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Leonardo Daniel López López
                        </Heading>
                        <p>Full-stack Developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={"center"}>
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile_s.jpeg" alt="Profile Image" />
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

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/leoDlopez" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @leoDlopez
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:lopez_lopez_daniel@hotmail.com" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                                    lopez_lopez_daniel@hotmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discordapp.com/users/264267409618239489/" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    My Discord
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/leonardo-lopez-360/" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Linkedin
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page