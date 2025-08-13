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
    const repository = isEs ? 'Repositorio' : 'Repository'

    const descripcion = isEs
        ? 'Plataforma web para el grupo inmobiliario Veintidos. Consta de dos partes: sitio público de listados para que clientes consulten propiedades y se contacten, y un panel de administración para gestionar los inmuebles que se muestran en el sitio.'
        : 'Web platform for Veintidos real estate. It has two parts: a public listings site where clients can browse properties and get in touch, and an admin dashboard to manage the properties shown on the site.'

    return (
        <Layout title="Veintidos">
            <Container>
                <Title>
                    Veintidos <Badge>2020</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://veintidos.com.mx/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            veintidos.com.mx <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / Bootstrap / MySQL / jQuery / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/veintidos"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/veintidos{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/veintidos_1.png"
                        alt="Veintidos — home"
                    />
                    <WorkImage
                        src="/images/works/veintidos_2.png"
                        alt="Veintidos — listado"
                    />
                    <WorkImage
                        src="/images/works/veintidos_3.png"
                        alt="Veintidos — detalle"
                    />
                    <WorkImage
                        src="/images/works/veintidos_4.png"
                        alt="Veintidos — admin"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
