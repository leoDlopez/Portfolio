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
        ? 'Sitio institucional para la compañía escénica Zinnia, con secciones de obras, producciones, proyectos y próximos eventos.'
        : 'Institutional website for the stage company Zinnia, featuring sections for plays, productions, projects, and upcoming events.'

    return (
        <Layout title="Zinnia">
            <Container>
                <Title>
                    Zinnia <Badge>2021</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="http://zinniacompaniaescenica.com.mx/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            zinniacompaniaescenica.com.mx{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / UIkit / MySQL / jQuery / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/Zinnia"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/Zinnia{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/zinnia_1.png"
                        alt="Zinnia — hero"
                    />
                    <WorkImage
                        src="/images/works/zinnia_2.png"
                        alt="Zinnia — sección"
                    />
                    <WorkImage
                        src="/images/works/zinnia_3.png"
                        alt="Zinnia — sección"
                    />
                    <WorkImage
                        src="/images/works/zinnia_4.png"
                        alt="Zinnia — sección"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
