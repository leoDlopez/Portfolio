import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Work = () => {
    const { locale } = useRouter()
    const isEs = locale?.startsWith('es')

    const platform = isEs ? 'Plataforma' : 'Platform'
    const repository = isEs ? 'Repositorio' : 'Repository'

    const descripcion = isEs
        ? 'Sistema web para el Sindicato del IMSS Sección XX. Centraliza la gestión de seis oficinas del sindicato; cada oficina cuenta con su propio módulo ABCC (Altas, Bajas, Cambios y Consultas) para administrar su información y procesos. El enfoque fue unificar formularios, validaciones y listados con filtros para agilizar el trabajo administrativo.'
        : 'Web system for IMSS Union Section XX. It centralizes the management of six union offices; each office has its own CRUD module to handle its information and processes. The focus was to standardize forms, validations, and filtered listings to streamline administrative work.'

    return (
        <Layout title="Sistema Gestor Sindical">
            <Container>
                <Title>
                    Sistema Gestor Sindical <Badge>2021</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / React / Materialize / Material UI / MySQL
                            / jQuery / Inertia.js / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/SistemaGestorSindical"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/SistemaGestorSindical{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/sindical_1.png"
                        alt="Sistema Gestor Sindical — dashboard"
                    />
                    <WorkImage
                        src="/images/works/sindical_2.png"
                        alt="Sistema Gestor Sindical — módulo"
                    />
                    <WorkImage
                        src="/images/works/sindical_3.png"
                        alt="Sistema Gestor Sindical — listado"
                    />
                    <WorkImage
                        src="/images/works/sindical_4.png"
                        alt="Sistema Gestor Sindical — detalle"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
