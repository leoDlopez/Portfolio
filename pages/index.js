import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
    SimpleGrid,
    List,
    ListItem,
    Icon,
    Link,
    Tooltip,
    UnorderedList
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { ChevronRightIcon, DownloadIcon } from '@chakra-ui/icons'
import {
    IoLogoDiscord,
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from 'react-icons/io5'
import { useRouter } from 'next/router'
import { Meta, MetaJob } from '../components/work'
import TypeAnimation from 'react-type-animation'
import { useState } from 'react'

//icons
import {
    FaDocker,
    FaGit,
    FaGithub,
    FaLaravel,
    FaLinux,
    FaPhp,
    FaReact
} from 'react-icons/fa'
import {
    SiBootstrap,
    SiComposer,
    SiGithubactions,
    SiGnubash,
    SiJenkins,
    SiMaterialui,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiRedis,
    SiSwagger,
    SiUikit
} from 'react-icons/si'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Skill = ({ tooltip, children }) => {
    const [open, setOpen] = useState(false)
    return (
        <Tooltip
            label={tooltip}
            isOpen={open}
            hasArrow
            openDelay={120}
            closeDelay={80}
            placement="top"
        >
            <span
                tabIndex={0}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                onClick={() => setOpen(o => !o)}
                style={{ display: 'inline-flex', alignItems: 'center' }}
            >
                {children}
            </span>
        </Tooltip>
    )
}

const Page = () => {
    const router = useRouter()
    const isEs = router.locale?.startsWith('es')
    let salutation = isEs
        ? '¡Hola! Soy desarrollador PHP (Laravel).'
        : "Hi! I'm a PHP (Laravel) developer."
    let heading = isEs
        ? 'Team Lead de Backend · Desarrollador PHP/Laravel · Desarrollador de APIs'
        : 'Backend Team Lead · PHP/Laravel Developer · API Developer'
    let bio = isEs ? 'Acerca de mí' : 'About me'

    let bio_p1 = isEs
        ? `Soy Backend Team Lead en Axen Technology. Diseño y desarrollo APIs financieras seguras y de alto rendimiento con Laravel 11, aplicando buenas prácticas (Clean Architecture, DDD/CQRS, Redis, CI/CD). He integrado servicios como STP, Paymax, Veriff, Twilio y Stripe, orquesto despliegues con Jenkins/GitHub Actions y reviso PRs. Disfruto convertir requisitos difusos en endpoints claros y mantenibles, guiar a un equipo pequeño y medir impacto con métricas. Antes desarrollé múltiples proyectos freelance con el equipo de DragonWare como fullstack developer. Busco aportar como Backend/PHP Developer en equipos remotos construyendo productos robustos.`
        : `I'm a Backend Team Lead at Axen Technology. I design and build secure, high-performance financial APIs with Laravel 11, following solid practices (Clean Architecture, DDD/CQRS, Redis, CI/CD). I’ve integrated providers such as STP, Paymax, Veriff, Twilio, and Stripe, orchestrate deployments with Jenkins/GitHub Actions, and review PRs. I enjoy turning fuzzy requirements into clean, maintainable endpoints, mentoring a small team, and tracking impact with metrics. Previously I delivered multiple freelance projects with the DragonWare team as fullstack developer. I’m looking to contribute as a Backend/PHP Developer on remote teams building robust products.`

    let portfolio = isEs ? 'Portafolio' : 'Portfolio'
    let cv = isEs ? 'Descargar CV' : 'Download Resume'
    let work = isEs ? 'Experiencia' : 'Work Experience'
    let cajero = isEs ? 'Cajero' : 'Cashier'
    let ayudante = isEs ? 'Ayudante' : 'Assistant'
    let desarrollador = isEs
        ? 'Desarrollador Full-stack'
        : 'Full-stack Developer'
    let presente = isEs ? 'presente' : 'present'
    let dragonware = isEs
        ? 'Integrante del equipo de desarrollo DragonWare, que se originó a través de un proyecto escolar de la Fábrica Académica de Software (FAS). DragonWare ofrece soluciones de software a diversos clientes en la ciudad de Morelia. En DragonWare, me encargo del front-end y back-end, así como también del diseño de base de datos y analisis de requerimientos.'
        : 'Member of the development team DragonWare, that was formed by a scholar project of the Academic Software Factory. DragonWare offers software solutions to their clients in the city of Morelia. In DragonWare, I work in the front-end and back-end of the projects, and also I work in the desing of the databases and the analysis of requirements.'
    let contacto = isEs ? 'Contacto' : 'Contact'
    const eduData = isEs
        ? {
              title: 'Educación',
              items: [
                  {
                      school: 'Instituto Tecnológico de Morelia',
                      period: '2017 – 2023',
                      degree: 'Ingeniería en Sistemas Computacionales',
                      bullets: [
                          'Titulado en junio de 2023 (cédula profesional: 13551123).', // :contentReference[oaicite:0]{index=0}
                          'Promedio final: 96.68 — mejor promedio de la carrera.',
                          'Especialidad en Ingeniería de Software y desarrollo móvil.'
                      ]
                  }
              ]
          }
        : {
              title: 'Education',
              items: [
                  {
                      school: 'Instituto Tecnológico de Morelia',
                      period: '2017 – 2023',
                      degree: 'B.Sc. in Computer Systems Engineering',
                      bullets: [
                          'Graduated June 2023 (MX professional license: 13551123).', // :contentReference[oaicite:1]{index=1}
                          'Final GPA: 96.68/100 — top of cohort.',
                          'Specialization in Software Engineering & Mobile Development.'
                      ]
                  }
              ]
          }
    let skills = isEs ? 'Habilidades' : 'Skills'
    let aptitudes = isEs ? 'Fortalezas' : 'Strenghts'
    let español = isEs ? 'Español' : 'Spanish'
    let español2 = isEs ? 'Nativo' : 'Native'
    let ingles = isEs ? 'Inglés' : 'English'
    let ingles2 = isEs ? 'B2 (MCER) — certificado' : 'B2 (CEFR) — certified'
    let frances = isEs ? 'Francés' : 'French'
    let frances2 = isEs ? 'A2 (MCER) — certificado' : 'A2 (CEFR) — certified'
    let idiomas = isEs ? 'Idiomas' : 'Languages'
    const strengthsItems = isEs
        ? [
              'PHP 8.x · Laravel 11',
              'Diseño de APIs REST (OpenAPI)',
              'SQL avanzado (PostgreSQL/MySQL)',
              'Caching y colas con Redis',
              'Pruebas automatizadas (PHPUnit)',
              'CI/CD (GitHub Actions, Jenkins)',
              'Arquitectura limpia (DDD/CQRS)',
              'Optimización de consultas y rendimiento',
              'Seguridad (OWASP, rate limiting)',
              'Code reviews y estándares',
              'Documentación técnica clara',
              'Trabajo en equipo y mentoring'
          ]
        : [
              'PHP 8.x · Laravel 11',
              'REST API design (OpenAPI)',
              'Advanced SQL (PostgreSQL/MySQL)',
              'Caching & queues with Redis',
              'Automated tests (PHPUnit)',
              'CI/CD (GitHub Actions, Jenkins)',
              'Clean architecture (DDD/CQRS)',
              'Query & performance optimization',
              'Security (OWASP, rate limiting)',
              'Code reviews & standards',
              'Clear technical documentation',
              'Teamwork & mentoring'
          ]

    const workData = isEs
        ? {
              title: 'Experiencia',
              companies: [
                  {
                      company: 'Axen Technology',
                      period: '2023 – Presente',
                      roles: [
                          {
                              title: 'Backend Team Lead',
                              period: 'Nov 2023 – Presente',
                              summary:
                                  'Owner del backend de Axen Life API; lidero el refactor y la migración a arquitectura moderna.',
                              bullets: [
                                  'Migración de v1 (Laravel 9, MVC) a Laravel 11 con Clean Architecture y DDD/CQRS.',
                                  'Confiabilidad y performance: Redis (cache/queues), rate limiting, logging/observabilidad.',
                                  'CI/CD con Jenkins y GitHub Actions; estrategia de ramas y revisiones de PR.'
                              ]
                          },
                          {
                              title: 'Scrum Master & Backend Developer',
                              period: 'Ene 2023 – Nov 2023',
                              summary:
                                  'Levanté desde cero la primera versión de Axen Life API (Laravel 9, monolito MVC) con un equipo pequeño.',
                              bullets: [
                                  'API REST inicial para autenticación, cuentas y movimientos.',
                                  'Integraciones: AlquimiaPay, Broxel, Veriff, Twilio (webhooks incluidos).',
                                  'Puesta en producción y operación: despliegues, monitoreo básico e incidencias.'
                              ]
                          },
                          {
                              title: 'Full-stack Developer',
                              period: 'Ago 2022 – Ene 2023',
                              summary:
                                  'Backoffice en Laravel + React/Inertia; migración de procesos manuales a plataforma web.',
                              bullets: [
                                  'Digitalización de contratos, finanzas y estadísticas.',
                                  'Releases a producción y soporte post-lanzamiento.',
                                  'Gestión de servidores y dominios.'
                              ]
                          }
                      ]
                  },
                  {
                      company: 'DIINCO',
                      period: 'Feb 2022 – Ene 2023',
                      roles: [
                          {
                              title: 'Full-stack Developer (Prácticas)',
                              period: 'Feb 2022 – Ene 2023',
                              summary:
                                  'Plataforma “Tinder para arquitectos” (React + Express + MySQL).',
                              bullets: [
                                  'Módulos: CRM, gestión de proyectos y almacenamiento tipo Drive.',
                                  'Rediseño de base de datos y despliegues.',
                                  'Trabajo con UX, PM y PO para alinear entregables.'
                              ]
                          }
                      ]
                  },
                  {
                      company: 'DragonWare',
                      period: '2020 – 2023',
                      roles: [
                          {
                              title: 'Full-stack Developer (Freelance)',
                              period: 'Jun 2020 – Dic 2023',
                              summary:
                                  'Entrega end-to-end en ~13 proyectos (Laravel + React + Inertia).',
                              bullets: [
                                  'Levantamiento de requisitos y diseño de base de datos.',
                                  'Puestas en producción y soporte a clientes.',
                                  'Automatización básica de despliegues.'
                              ]
                          }
                      ]
                  }
              ]
          }
        : {
              title: 'Work Experience',
              companies: [
                  {
                      company: 'Axen Technology',
                      period: '2023 – Present',
                      roles: [
                          {
                              title: 'Backend Team Lead',
                              period: 'Nov 2023 – Present',
                              summary:
                                  'Backend owner for Axen Life API; leading the refactor and migration to a modern architecture.',
                              bullets: [
                                  'Migrating v1 (Laravel 9, MVC) to Laravel 11 with Clean Architecture and DDD/CQRS.',
                                  'Reliability & performance: Redis (cache/queues), rate limiting, logging/observability.',
                                  'CI/CD with Jenkins & GitHub Actions; branch strategy and PR reviews.'
                              ]
                          },
                          {
                              title: 'Scrum Master & Backend Developer',
                              period: 'Jan 2023 – Nov 2023',
                              summary:
                                  'Bootstrapped the first version of Axen Life API (Laravel 9, MVC monolith) with a small team.',
                              bullets: [
                                  'Initial REST API for auth, accounts and transactions.',
                                  'Integrations: AlquimiaPay, Broxel, Veriff, Twilio (including webhooks).',
                                  'Production rollout & operations: deployments, basic monitoring and incident handling.'
                              ]
                          },
                          {
                              title: 'Full-stack Developer',
                              period: 'Aug 2022 – Jan 2023',
                              summary:
                                  'Back office with Laravel + React/Inertia; migration of manual processes to a web platform.',
                              bullets: [
                                  'Digitized contracts, finances and statistics.',
                                  'Production releases and post-launch support.',
                                  'Server/domain management.'
                              ]
                          }
                      ]
                  },
                  {
                      company: 'DIINCO',
                      period: 'Feb 2022 – Jan 2023',
                      roles: [
                          {
                              title: 'Full-stack Developer (Internship)',
                              period: 'Feb 2022 – Jan 2023',
                              summary:
                                  '“Tinder for architects” platform (React + Express + MySQL).',
                              bullets: [
                                  'Modules: CRM, project management, Drive-like storage.',
                                  'DB redesign and deployments.',
                                  'Worked with UX, PM and PO to align deliverables.'
                              ]
                          }
                      ]
                  },
                  {
                      company: 'DragonWare',
                      period: '2020 – 2023',
                      roles: [
                          {
                              title: 'Full-stack Developer (Freelance)',
                              period: 'Jun 2020 – Dec 2023',
                              summary:
                                  'End-to-end delivery across ~13 projects (Laravel + React + Inertia).',
                              bullets: [
                                  'Requirements gathering and database design.',
                                  'Production releases and client support.',
                                  'Basic deployment automation.'
                              ]
                          }
                      ]
                  }
              ]
          }

    let logros = isEs ? 'Logros' : 'Achievements'
    let intereses = isEs ? 'Intereses' : 'Interests'
    const achievements = isEs
        ? {
              title: 'Logros',
              items: [
                  <>
                      Axen Life recibió el distintivo “Hecho en México” (marca
                      de certificación de la Secretaría de Economía). Lideré,
                      junto con mi equipo, el backend (APIs e integraciones).
                      Cobertura:{' '}
                      <Link
                          href="https://www.eluniversal.com.mx/tendencias/axen-life-recibe-el-distintivo-hecho-en-mexico-app-impulsa-la-educacion-financiera-con-sello-nacional/"
                          isExternal
                      >
                          El Universal
                      </Link>
                      .
                  </>,
                  'Levanté desde cero Axen Life API v1 (Laravel 9, monolito MVC) y la llevé a producción con AlquimiaPay, Broxel, Veriff y Twilio.',
                  'Como Team Lead, lideré el refactor a Laravel 11 con Clean Architecture y DDD/CQRS; añadí Redis (cache/colas) y CI/CD (Jenkins/GitHub Actions).',
                  'Integré STP para transferencias SPEI con webhooks y claves de rastreo, mejorando conciliación y trazabilidad.',
                  'Migré en 1 día todas las CLABEs referenciadas de AlquimiaPay a Paymax/Bankaool sin impacto en clientes.',
                  'Implementé E2EE (handshake + AES-256-CBC) entre apps web/móvil y API.'
              ]
          }
        : {
              title: 'Achievements',
              items: [
                  <>
                      Axen Life received the “Hecho en México” certification
                      (certification mark by the Ministry of Economy). I led the
                      backend with my team (APIs & integrations). Coverage:{' '}
                      <Link
                          href="https://www.eluniversal.com.mx/tendencias/axen-life-recibe-el-distintivo-hecho-en-mexico-app-impulsa-la-educacion-financiera-con-sello-nacional/"
                          isExternal
                      >
                          El Universal
                      </Link>
                      .
                  </>,
                  'Bootstrapped Axen Life API v1 (Laravel 9, MVC monolith) and launched to production integrating AlquimiaPay, Broxel, Veriff and Twilio.',
                  'As Team Lead, led the refactor to Laravel 11 with Clean Architecture & DDD/CQRS; added Redis (cache/queues) and CI/CD (Jenkins/GitHub Actions).',
                  'Integrated STP for SPEI transfers with webhooks and tracking keys, improving reconciliation and traceability.',
                  'Migrated all referenced CLABEs from AlquimiaPay to Paymax/Bankaool in a single day with no customer impact.',
                  'Implemented E2EE (handshake + AES-256-CBC) across web/mobile apps and the API.'
              ]
          }

    let intereses2 = isEs
        ? 'Me interesa la arquitectura backend para fintech: diseño de APIs, seguridad, rendimiento y confiabilidad (Redis, PostgreSQL, observabilidad, CI/CD). A corto plazo quiero profundizar en Spring y .NET para APIs y en AWS. En mi tiempo libre juego videojuegos, escucho música y estudio coreano.'
        : 'I’m interested in backend architecture for fintech: API design, security, performance and reliability (Redis, PostgreSQL, observability, CI/CD). Short-term goal: go deeper into Spring and .NET for APIs and AWS. In my free time I play video games, listen to music, and study Korean.'
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
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
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align={'center'}
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/Leo_2.webp"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                {/* Bio Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {bio}
                    </Heading>
                    <Paragraph>{bio_p1}</Paragraph>
                    <Box
                        align="center"
                        my={4}
                        display="flex"
                        justifyContent="space-evenly"
                    >
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                                width={200}
                            >
                                {portfolio}
                            </Button>
                        </NextLink>
                        <Link href="/CVLeonardoLopez.pdf" isExternal>
                            <Button
                                rightIcon={<DownloadIcon />}
                                colorScheme="cyan"
                                width={200}
                            >
                                {cv}
                            </Button>
                        </Link>
                    </Box>
                </Section>
                {/* Experience Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {skills}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid spacing={5} minChildWidth="50px" mt={6} mb={10}>
                        <Skill tooltip="PHP 8.X">
                            {' '}
                            <FaPhp fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Laravel">
                            {' '}
                            <FaLaravel fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="MySQL">
                            {' '}
                            <SiMysql fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Postgresql">
                            {' '}
                            <SiPostgresql fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Redis">
                            {' '}
                            <SiRedis fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="REST API">
                            {' '}
                            <SiSwagger fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Docker">
                            {' '}
                            <FaDocker fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Linx">
                            {' '}
                            <FaLinux fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Git">
                            {' '}
                            <FaGit fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Github">
                            {' '}
                            <FaGithub fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Github Actions">
                            {' '}
                            <SiGithubactions fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Jenkins">
                            {' '}
                            <SiJenkins fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Composer">
                            {' '}
                            <SiComposer fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="React">
                            {' '}
                            <FaReact fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Next.js">
                            {' '}
                            <SiNextdotjs fontSize={30} />{' '}
                        </Skill>

                        <Skill tooltip="Material UI">
                            {' '}
                            <SiMaterialui fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="Bootstrap">
                            {' '}
                            <SiBootstrap fontSize={30} />{' '}
                        </Skill>
                        <Skill tooltip="UIKit">
                            {' '}
                            <SiUikit fontSize={30} />{' '}
                        </Skill>

                        <Skill tooltip="Bash">
                            {' '}
                            <SiGnubash fontSize={30} />{' '}
                        </Skill>
                    </SimpleGrid>
                </Section>
                {/* Skills Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {aptitudes}
                    </Heading>
                    {/* <Box align="center" mt={6} mb={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" alignItems="center"> */}
                    <SimpleGrid columns={2} spacing={2} my={6}>
                        {strengthsItems.map((w, index) => (
                            <Box display="flex" alignItems="center" key={index}>
                                <Icon
                                    as={AiOutlineCheckCircle}
                                    style={{ marginRight: 4 }}
                                />{' '}
                                {w}
                            </Box>
                        ))}
                    </SimpleGrid>
                </Section>
                {/* Languages Section */}
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
                    <BioSection>
                        <BioYear>{frances}</BioYear>
                        {frances2}
                    </BioSection>
                </Section>
                {/* Experience Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {workData.title}
                    </Heading>

                    {workData.companies.map(c => (
                        <Box key={c.company} mt={4}>
                            <Heading
                                display="inline-block"
                                as="h6"
                                fontSize={16}
                                mt={3}
                                mb={2}
                            >
                                {c.company} <Meta>{c.period}</Meta>
                            </Heading>

                            {c.roles.map((r, i) => (
                                <Box
                                    key={`${c.company}-${r.title}-${i}`}
                                    mt={2}
                                >
                                    <Heading
                                        display="inline-block"
                                        as="h6"
                                        fontSize={15}
                                        mt={1}
                                        mb={1}
                                    >
                                        <MetaJob>{r.title}</MetaJob>{' '}
                                        <Meta>{r.period}</Meta>
                                    </Heading>
                                    {r.summary && (
                                        <Paragraph>{r.summary}</Paragraph>
                                    )}
                                    {Array.isArray(r.bullets) &&
                                        r.bullets.length > 0 && (
                                            <UnorderedList
                                                mt={2}
                                                ml={6}
                                                spacing={1.5}
                                            >
                                                {r.bullets.map((b, j) => (
                                                    <ListItem key={j}>
                                                        {b}
                                                    </ListItem>
                                                ))}
                                            </UnorderedList>
                                        )}
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Section>
                {/* Education Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {eduData.title}
                    </Heading>

                    {eduData.items.map(e => (
                        <Box key={e.school} mt={4}>
                            <Heading
                                display="inline-block"
                                as="h6"
                                fontSize={16}
                                mt={3}
                                mb={2}
                            >
                                {e.school} <Meta>{e.period}</Meta>{' '}
                                <MetaJob>{e.degree}</MetaJob>
                            </Heading>

                            <UnorderedList
                                styleType="disc"
                                stylePosition="outside"
                                pl={5}
                                mt={1}
                                spacing={1.5}
                            >
                                {e.bullets.map((b, i) => (
                                    <ListItem key={i}>{b}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                    ))}
                </Section>
                {/* Achievements Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {achievements.title}
                    </Heading>

                    <UnorderedList
                        styleType="disc"
                        stylePosition="outside"
                        pl={5}
                        mt={1}
                        spacing={1.5}
                    >
                        {achievements.items.map((item, i) => (
                            <ListItem key={i}>{item}</ListItem>
                        ))}
                    </UnorderedList>
                </Section>
                {/* Interests Section */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {intereses}
                    </Heading>
                    <Paragraph>{intereses2}</Paragraph>
                </Section>
                {/* Contact Section */}
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {contacto}
                    </Heading>
                    <List>
                        <ListItem>
                            <Link
                                href="mailto:lopez_lopez_daniel@hotmail.com"
                                isExternal
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoMail} />}
                                >
                                    lopez_lopez_daniel@hotmail.com
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://www.linkedin.com/in/leonardo-lopez-360/"
                                isExternal
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoLinkedin} />}
                                >
                                    Linkedin
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://github.com/leoDlopez"
                                isExternal
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoGithub} />}
                                >
                                    @leoDlopez
                                </Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link
                                href="https://discordapp.com/users/264267409618239489/"
                                isExternal
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoDiscord} />}
                                >
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
