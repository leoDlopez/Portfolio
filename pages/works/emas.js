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

    const website = isEs ? 'Sitio web' : 'Website'
    const platform = isEs ? 'Plataforma' : 'Platform'
    const stackLabel = 'Stack'

    const descripcion = isEs
        ? 'Sitio institucional para una organización feminista, con secciones de misión/causa, noticias y convocatorias, además de un formulario de donaciones (sin pasarela) para registrar intención de apoyo y coordinar el seguimiento.'
        : 'Institutional website for a feminist NGO with mission/cause, news and calls-to-action, plus a donations form (no gateway) to register intent and coordinate follow-up.'

    const donaciones = isEs
        ? 'El formulario de donación guarda nombre, contacto y monto estimado en la base de datos y notifica al equipo para dar seguimiento por correo o teléfono.'
        : 'The donations form stores name, contact and intended amount in the database and notifies the team for email/phone follow-up.'

    return (
        <Layout title="EMAS">
            <Container>
                <Title>
                    EMAS (A.C.) <Badge>2023</Badge>
                </Title>

                <P>{descripcion}</P>
                <P>{donaciones}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://emasac.org/inicio"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            emasac.org/inicio <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{stackLabel}</Meta>
                        <span>
                            Laravel / React / Inertia.js / MUI (Material UI) /
                            MySQL
                        </span>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/emas.webp"
                        alt="EMAS — home"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
