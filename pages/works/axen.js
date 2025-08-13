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
        ? 'Sitio corporativo para Axen Capital con el objetivo de presentar servicios de broker financiero y captar prospectos a través de formularios de contacto y secciones informativas.'
        : 'Corporate website for Axen Capital to present financial brokerage services and capture leads via contact forms and informational sections.'

    return (
        <Layout title="Axen Capital">
            <Container>
                <Title>
                    Axen Capital <Badge>2021</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://axencapital.com/inicio"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            axencapital.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / UIkit / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/Axen2"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/Axen2{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/axen_1.png"
                        alt="Axen Capital — home"
                    />
                    <WorkImage
                        src="/images/works/axen_2.png"
                        alt="Axen Capital — sección"
                    />
                    <WorkImage
                        src="/images/works/axen_3.png"
                        alt="Axen Capital — sección"
                    />
                    <WorkImage
                        src="/images/works/axen_4.png"
                        alt="Axen Capital — contacto"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
