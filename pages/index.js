import { Container, Box, Heading, Image, useColorModeValue, Button, SimpleGrid, List, ListItem, Icon, Link, Tooltip } from "@chakra-ui/react"
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
import { useRouter } from "next/router"
import { Meta, MetaJob } from '../components/work'
import TypeAnimation from 'react-type-animation';
import { useState } from 'react'

//icons
import { FaCss3, FaGit, FaGithub, FaHtml5, FaJava, FaLaravel, FaLinux, FaNodeJs, FaNpm, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import { SiAndroidstudio, SiBootstrap, SiCisco, SiCplusplus, SiCsharp, SiCss3, SiExpress, SiGnubash, SiJavascript, SiKotlin, SiMariadb, SiMaterialui, SiMysql, SiNextdotjs, SiPostgresql, SiSwift, SiUbuntu, SiUikit } from 'react-icons/si'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Skill = ({ tooltip, children }) => {
    const [isLabelOpen, setIsLabelOpen] = useState(false)
    return (
        <Tooltip label={tooltip} fontSize="md" isOpen={isLabelOpen} >
            <span onMouseEnter={() => setIsLabelOpen(true)}
                onMouseLeave={() => setIsLabelOpen(false)}
                onClick={() => setIsLabelOpen(true)}>
                {children}
            </span>
        </Tooltip>
    )
}

const Page = () => {
    const router = useRouter()
    let salutation = router.locale == 'es-MX' ? 'Hola, soy un desarrollador Full-stack!' : "Hello, I'm a Full-stack developer based in Mexico!"
    let heading = router.locale == 'es-MX' ? 'Desarrollador Full-stack / Estudiante de Ingeniería en Sistemas Computacionales' : "Full-stack Developer / Computer Systems Engineering Student"
    let bio = router.locale == 'es-MX' ? 'Acerca de mi' : "About me"
    let bio_p1 = router.locale == 'es-MX' ?
        "Soy un estudiante de noveno semestre de la carrera de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Morelia (ITM). Desde el 2020 desarrollo aplicaciones web para diversos clientes en "
        : "I'm a student of the Computer Systems Engeneering career at the Instituto Tecológico de Morelia (ITM), currently cursing the ninth semester. Since 2020 I have been developing web applications for various clients at "
    let bio_p2 = router.locale == 'es-MX' ?
        ", un equipo de desarrolladores formado por compañeros de la carrera."
        : ", a team of developers made up with fellow students from the carreer"
    let portfolio = router.locale == 'es-MX' ? 'Mi portafolio' : "My portfolio"
    let work = router.locale == 'es-MX' ? 'Historial laboral' : "Employment history"
    let cajero = router.locale == 'es-MX' ? 'Cajero' : "Cashier"
    let ayudante = router.locale == 'es-MX' ? 'Ayudante' : 'Assistant'
    let desarrollador = router.locale == 'es-MX' ? 'Desarrollador Full-stack' : 'Full-stack Developer'
    let presente = router.locale == 'es-MX' ? 'presente' : 'present'
    let dragonware = router.locale == 'es-MX' ?
        "Integrante del equipo de desarrollo DragonWare, que se originó a través de un proyecto escolar de la Fábrica Académica de Software (FAS). DragonWare ofrece soluciones de software a diversos clientes en la ciudad de Morelia. En DragonWare, me encargo del front-end y back-end, así como también del diseño de base de datos y analisis de requerimientos." :
        "Member of the development team DragonWare, that was formed by a scholar project of the Academic Software Factory. DragonWare offers software solutions to their clients in the city of Morelia. In DragonWare, I work in the front-end and back-end of the projects, and also I work in the desing of the databases and the analysis of requirements."
    let zapateria = router.locale == 'es-MX' ?
        "Mis responsabilidades en este negocio fueron registrar las ventas, empaquetar zapatos, desempacar las cajar con mercancia nueva y ordenarlas en la bodega, ayudar a los clientes con sus dudas, y cobrar y dar el cambio apropiado a los clientes, además de llevar un registro de las entradas y salidas que había en la caja." :
        "My duties in this place were recording sales, packing shoes, unpackaging the boxes with new items and ordering them in the warehouse, helping the clients with their doubts, collecting the payment, and giving appropriate change. I was also in charge of keeping a record of the inputs and outputs that were in the cash register. "
    let contacto = router.locale == 'es-MX' ? 'Contacto' : 'Contact'
    let academico = router.locale == 'es-MX' ? 'Educación' : 'Education'
    let carrera = router.locale == 'es-MX' ? 'Ingeniería en Sistemas Computacionales' : 'Computer Systems Engineering'
    let bachillerato = router.locale == 'es-MX' ? 'Bachillerato en Físico-Matemático' : 'Bachelor of Physics-Mathematics'
    let prepa = router.locale == 'es-MX' ? 'Mejor promedio de la generación.' : 'Best generational grade.'
    let tec = router.locale == 'es-MX' ? 'Especialidad de Ingeniería de Software y desarrollo de aplicaciones móviles.' : 'Software Engineering and mobile application development speciality.'
    let tec2 = router.locale == 'es-MX' ? 'Actualmente llevo un promedio de 96.5 en la carrera.' : 'I currently have a 96.5 grade in the career'
    let skills = router.locale == 'es-MX' ? 'Habilidades' : 'Skills'
    let aptitudes = router.locale == 'es-MX' ? 'Aptitudes' : 'Workflow'
    let español = router.locale == 'es-MX' ? 'Español' : 'Spanish'
    let español2 = router.locale == 'es-MX' ? 'Nativo' : 'Native'
    let ingles = router.locale == "es-MX" ? 'Inglés' : 'English'
    let ingles2 = router.locale == "es-MX" ? "Certificado nivel B2" : 'I have a level B2 certificate'
    let idiomas = router.locale == "es-MX" ? "Idiomas" : "Languages"
    let workflow = router.locale == "es-MX" ?
        [
            "Metodologías Ágiles & Scrim",
            "Desarrollo Web y Móvil",
            "Desarrollo Frontend y Backend",
            "Desarrollo de Escritorio",
            "Linux y Windows",
            "Conocimientos de Deployment",
            "MySQL y PostreSQL",
            "Uso de Git",
            "Conocimiento de API's",
            "Trabajo en equipo",
            "Responsable y puntual",
            "Autodidacta y creativo"
        ] :
        [
            'Agile Development & Scrum',
            'Web and Mobile Development',
            'Frontend and Backend Development',
            'Desktop development',
            'Linux and Windows OS',
            'Deployment knowledge',
            'MySQL and PostgreSQL',
            'Git Workflow',
            "API's knowledge",
            "Teamwork",
            'Responsible and punctual',
            'Self-taught and creative'
        ]
    let contador = router.locale == "es-MX" ?
        "Trabajé en el despacho del Contador Público José Rosendo López como ayudante, yo me encargaba de realizar facturas electrónicas, altas y bajas de trabajadores en el IMSS, realizar y enviar declaraciones informativas de terceros, y de organizar la agenda del contador." :
        "I worked in the office of the Public Accountant José Rosendo López as an assistant, I was in charge of making electronic bills, registrations and cancellations of workers in the IMSS, making and sending third-party informative statements to the SAT, and organizing the accountant's agenda."

    let trabajo = router.locale == "es-MX" ? "Despacho contable" : "Accounting firm"
    let logros = router.locale == "es-MX" ? "Logros" : "Achievements"
    let intereses = router.locale == "es-MX" ? "Intereses" : "Interests"
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    <TypeAnimation
                        cursor={true}
                        sequence={[salutation, 0]}
                        wrapper="p"
                    />
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
                        {skills}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid spacing={5} minChildWidth="50px" mt={6} mb={10}>
                        <Skill tooltip="React"> <FaReact fontSize={30} /> </Skill>
                        <Skill tooltip="Laravel"> <FaLaravel fontSize={30} /> </Skill>
                        <Skill tooltip="PHP"> <FaPhp fontSize={30} /> </Skill>
                        <Skill tooltip="Java"> <FaJava fontSize={30} /> </Skill>
                        <Skill tooltip="C#"> <SiCsharp fontSize={30} /> </Skill>
                        <Skill tooltip="C++"> <SiCplusplus fontSize={30} /> </Skill>
                        <Skill tooltip="Python"> <FaPython fontSize={30} /> </Skill>
                        <Skill tooltip="Kotlin"> <SiKotlin fontSize={30} /> </Skill>
                        <Skill tooltip="Swift"> <SiSwift fontSize={30} /> </Skill>
                        <Skill tooltip="HTML"> <FaHtml5 fontSize={30} /> </Skill>
                        <Skill tooltip="CSS"> <SiCss3 fontSize={30} /> </Skill>
                        <Skill tooltip="JavaScript"> <SiJavascript fontSize={30} /> </Skill>
                        <Skill tooltip="Next.js"> <SiNextdotjs fontSize={30} /> </Skill>
                        <Skill tooltip="Node.js"> <FaNodeJs fontSize={30} /> </Skill>
                        <Skill tooltip="Express.js"> <SiExpress fontSize={30} /> </Skill>
                        <Skill tooltip="Material UI"> <SiMaterialui fontSize={30} /> </Skill>
                        <Skill tooltip="Bootstrap"> <SiBootstrap fontSize={30} /> </Skill>
                        <Skill tooltip="UIKit"> <SiUikit fontSize={30} /> </Skill>
                        <Skill tooltip="NPM"> <FaNpm fontSize={30} /> </Skill>
                        <Skill tooltip="Git"> <FaGit fontSize={30} /> </Skill>
                        <Skill tooltip="Github"> <FaGithub fontSize={30} /> </Skill>
                        <Skill tooltip="Bash"> <SiGnubash fontSize={30} /> </Skill>
                        <Skill tooltip="Ubuntu"> <SiUbuntu fontSize={30} /> </Skill>
                        <Skill tooltip="MySQL"> <SiMysql fontSize={30} /> </Skill>
                        <Skill tooltip="Postgresql"> <SiPostgresql fontSize={30} /> </Skill>
                        <Skill tooltip="MariaDB"> <SiMariadb fontSize={30} /> </Skill>
                        <Skill tooltip="Android Studio"> <SiAndroidstudio fontSize={30} /> </Skill>
                        <Skill tooltip="Cisco"> <SiCisco fontSize={30} /> </Skill>
                    </SimpleGrid>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {aptitudes}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid columns={2} spacing={2} my={6} >
                        {workflow.map(w => (
                            <Box display="flex" alignItems="center"><Icon as={AiOutlineCheckCircle} style={{ marginRight: 4 }} /> {w}</Box>
                        ))}
                    </SimpleGrid>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {idiomas}
                    </Heading>
                    <BioSection>
                        <BioYear>{español}</BioYear>
                        {español2}
                    </BioSection>
                    <BioSection>
                        <BioYear>{ingles}</BioYear>
                        {ingles2}
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {work}
                    </Heading>
                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            Zapatería Erendira <Meta>2017 - 2018</Meta> <MetaJob>{cajero}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{zapateria}</Paragraph>
                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            {trabajo} <Meta>2018 - 2020</Meta> <MetaJob>{ayudante}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{contador}</Paragraph>
                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            DragonWare <Meta>2020 - {presente}</Meta> <MetaJob>{desarrollador}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{dragonware}</Paragraph>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {academico}
                    </Heading>
                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            Preparatoria Novel de Morelia <Meta>2014 - 2017</Meta> <MetaJob>{bachillerato}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{prepa}</Paragraph>

                    <Box>
                        <Heading display="inline-block" as="h6" fontSize={16} mt={3} mb={2}>
                            Instituto Tecnológico de Morelia <Meta>2017 - {presente}</Meta> <MetaJob>{carrera}</MetaJob>
                        </Heading>
                    </Box>
                    <Paragraph>{tec}</Paragraph>
                    <Paragraph>{tec2}</Paragraph>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {logros}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid spacing={5} minChildWidth="50px" mt={6} mb={10}>

                    </SimpleGrid>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {intereses}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid spacing={5} minChildWidth="50px" mt={6} mb={10}>

                    </SimpleGrid>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {contacto}
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="mailto:lopez_lopez_daniel@hotmail.com" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                                    lopez_lopez_daniel@hotmail.com
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
                        <ListItem>
                            <Link href="https://github.com/leoDlopez" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @leoDlopez
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://discordapp.com/users/264267409618239489/" isExternal>
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
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