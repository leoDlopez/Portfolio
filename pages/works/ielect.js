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
        ? 'Aplicación web para apoyar la gestión y el mapeo operativo de procesos electorales en Michoacán. Permite administrar campañas, brigadistas y simpatizantes, además de generar reportes y visualizaciones para dar seguimiento a la operación en territorio.'
        : 'Web application to support operational management and mapping of electoral processes in Michoacán. It manages campaigns, field brigades and supporters, and provides reports/visualizations to track on-the-ground operations.'

    return (
        <Layout title="iElect">
            <Container>
                <Title>
                    iElect <Badge>2021</Badge>
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
                            Laravel / UIkit / PostgreSQL / jQuery / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/iElect"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/iElect{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/ielect_1.png"
                        alt="iElect — dashboard"
                    />
                    <WorkImage
                        src="/images/works/ielect_2.jpeg"
                        alt="iElect — módulo"
                    />
                    <WorkImage
                        src="/images/works/ielect_3.jpeg"
                        alt="iElect — listado"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
