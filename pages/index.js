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
import { Meta, MetaJob } from '../components/work'
import { useRef, useEffect } from 'react'
import { init } from 'ityped'

const Page = () => {
    const router = useRouter()
    let salutation = router.locale == 'es-MX' ? 'Hola, soy un desarrollador Full-stack!' : "Hello, I'm a Full-stack developer based in Mexico!"
    let heading = router.locale == 'es-MX' ? 'Desarrollador Full-stack / Estudiante de Ingeniería en Sistemas Computacionales' : "Full-stack Developer / Computer Systems Engineering Student"
    let bio = router.locale == 'es-MX' ? 'Acerca de mi' : "About me"
    let bio_p1 = router.locale == 'es-MX' ?
        "Estudiante de noveno semestre de la carrera de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Morelia (ITM). Desde el 2020 desarrolla aplicaciones web para diversos clientes en "
        : "Student of the Computer Systems Engeneering career at the Instituto Tecológico de Morelia (ITM), currently cursing the ninth semester. Since 2020 he has been developing web applications for various clients at "
    let bio_p2 = router.locale == 'es-MX' ?
        ", un equipo de desarrolladores formado por compañeros de la carrera."
        : ", a team of developers made up with fellow students from the carreer"
    let portfolio = router.locale == 'es-MX' ? 'Mi portafolio' : "My portfolio"
    let work = router.locale == 'es-MX' ? 'Historial laboral' : "Employment history"
    let cajero = router.locale == 'es-MX' ? 'Cajero' : "Cashier"
    let desarrollador = router.locale == 'es-MX' ? 'Desarrollador Full-stack' : 'Full-stack Developer'
    let presente = router.locale == 'es-MX' ? 'presente' : 'present'
    let dragonware = router.locale == 'es-MX' ?
        "Integrante del equipo de desarrollo DragonWare, que se originó a través de un proyecto escolar de la Fábrica Académica de Software (FAS). DragonWare ofrece soluciones de software a diversos clientes en la ciudad de Morelia. En DragonWare, él se encarga de front-end y back-end, así como también de diseño de base de datos y analisis de requerimientos" :
        "Member of the development team DragonWare, that was formed by a scholar project of the Academic Software Factory. DragonWare offers software solutions to their clients in the city of Morelia. In DragonWare, he works in the front-end and back-end of the projects, and also he works in the desing of the databases and the analysis of requirements."
    let zapateria = router.locale == 'es-MX' ?
        "" :
        ""
    const textRef = useRef();

    useEffect(() => {
        textRef.current.innerHTML = ""
        init(textRef.current, {
            showCursor: true,
            loop: false,
            strings: [salutation]
        });
    }, [router.locale])
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    <span ref={textRef}></span>
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Leonardo Daniel López López
                        </Heading>
                        <p>{heading}</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align={"center"}>
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile_s.jpeg" alt="Profile Image" />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {bio}
                    </Heading>
                    <Paragraph>{bio_p1}
                        <Link href="https://dragonware.com.mx/" isExternal>DragonWare</Link>
                        {bio_p2}</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                {portfolio}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {work}
                    </Heading>
                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            Zapatería Erendira <Meta>2017 - 2020</Meta> <MetaJob>{cajero}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>Aqui va la descripcion xdd</Paragraph>

                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            DragonWare <Meta>2020 - {presente}</Meta> <MetaJob>{desarrollador}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{dragonware}</Paragraph>
                </Section>

                {/* <Section delay={0.1}>
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
                </Section> */}

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