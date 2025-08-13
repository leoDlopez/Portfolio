import {
    Container,
    Badge,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    UnorderedList
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Work = () => {
    const { locale } = useRouter()
    const isEs = locale?.startsWith('es')

    const platform = isEs ? 'Plataforma' : 'Platform'
    const stackLabel = 'Stack'
    const roleLabel = isEs ? 'Mi rol' : 'My role'
    const highlightsLabel = isEs ? 'Claves' : 'Highlights'

    const title = isEs
        ? 'DIINCO — Plataforma para arquitectos'
        : 'DIINCO — Architects Platform'

    const overview = isEs
        ? 'Plataforma tipo “Tinder para arquitectos” (2022–2023) para conectar talento con despachos y proyectos. Incluye perfiles, matching, CRM ligero y gestión de proyectos con almacenamiento de archivos estilo Drive.'
        : '“Tinder for architects” platform (2022–2023) to match talent with firms and projects. Includes profiles, matching, a lightweight CRM, and project management with Drive-like file storage.'

    const myRole = isEs
        ? 'Full-stack (prácticas): desarrollo en React (pantallas y flujo de matching) y Node/Express (endpoints, validaciones) con MySQL; despliegues y soporte.'
        : 'Full-stack (internship): React (screens & matching flow) and Node/Express (endpoints, validations) with MySQL; deployments and support.'

    const stack = 'React / Node.js / Express / MySQL'

    const highlights = isEs
        ? [
              'Perfiles con portafolio, tags y disponibilidad.',
              'Flujo de matching y pipeline de reclutamiento (etapas y notas).',
              'Gestión de proyectos con tareas y archivos (subidas/descargas).',
              'Búsqueda y filtros (skills, seniority, ubicación).',
              'Roles y permisos (reclutador, admin).'
          ]
        : [
              'Profiles with portfolio, tags, and availability.',
              'Matching flow and recruiting pipeline (stages & notes).',
              'Project management with tasks and files (upload/download).',
              'Search & filters (skills, seniority, location).',
              'Role-based access (recruiter, admin).'
          ]

    return (
        <Layout title="DIINCO">
            <Container>
                <Title>
                    {title} <Badge>2022–2023</Badge>
                </Title>

                <P>{overview}</P>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {roleLabel}
                </Heading>
                <P>{myRole}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{stackLabel}</Meta>
                        <span>{stack}</span>
                    </ListItem>
                </List>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {highlightsLabel}
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1.5}>
                    {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </UnorderedList>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/diinco.webp"
                        alt="DIINCO — dashboard"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
