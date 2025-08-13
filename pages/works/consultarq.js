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

    const descripcionMain = isEs
        ? 'Plataforma web para la consultoría de proyectos arquitectónicos ConsultarQ. Permite llevar el control de empleados, gastos, clientes y proveedores, así como la administración de proyectos en curso.'
        : 'Web platform for the architectural project consultancy ConsultarQ. It tracks employees, expenses, clients and suppliers, and manages ongoing projects.'

    const descripcionAward = isEs
        ? 'Proyecto participante en la Fábrica Académica de Software: todo el grupo desarrolla para un cliente real y éste elige el mejor. Con DragonWare obtuvimos el primer lugar por segundo semestre consecutivo.'
        : 'Project in the Academic Software Factory: the class builds for a real client and the client selects the best. With DragonWare we won first place for the second consecutive semester.'

    return (
        <Layout title="ConsultarQ">
            <Container>
                <Title>
                    ConsultarQ <Badge>2021</Badge>
                </Title>

                <P>{descripcionMain}</P>
                <P style={{ marginTop: 10 }}>{descripcionAward}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Express.js / UIkit / MySQL / jQuery / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/ConsultarQ"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/ConsultarQ{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/consultarq_1.png"
                        alt="ConsultarQ — dashboard"
                    />
                    <WorkImage
                        src="/images/works/consultarq_2.png"
                        alt="ConsultarQ — proyectos"
                    />
                    <WorkImage
                        src="/images/works/consultarq_3.png"
                        alt="ConsultarQ — clientes"
                    />
                    <WorkImage
                        src="/images/works/consultarq_4.png"
                        alt="ConsultarQ — gastos"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
