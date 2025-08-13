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
        ? 'Plataforma web educativa desarrollada para el Sindicato del IMSS Sección XX. Permite a los trabajadores acceder a clases virtuales y administrar maestros, alumnos y contenido (lecciones, tareas y evaluaciones).'
        : 'Educational web platform built for the IMSS Union Section XX. Workers can access virtual classes, while admins manage teachers, students and content (lessons, assignments and assessments).'

    const descripcionAward = isEs
        ? 'Este proyecto participó en la Fábrica Académica de Software de mi universidad: todo el grupo desarrolla para un cliente real y el cliente elige el mejor. Con DragonWare obtuvimos el primer lugar por tercer semestre consecutivo.'
        : 'This project took part in our university’s Academic Software Factory: the whole class builds for a real client and the client selects the best. With DragonWare we won first place for the third consecutive semester.'

    return (
        <Layout title="Escuela Sindical">
            <Container>
                <Title>
                    Escuela Sindical <Badge>2021</Badge>
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
                            Laravel / React / Materialize / jQuery / JavaScript
                            / MySQL / Inertia.js
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/EscSindical"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/EscSindical{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/escuela_1.png"
                        alt="Escuela Sindical — home"
                    />
                    <WorkImage
                        src="/images/works/escuela_2.png"
                        alt="Escuela Sindical — cursos"
                    />
                    <WorkImage
                        src="/images/works/escuela_3.png"
                        alt="Escuela Sindical — lecciones"
                    />
                    <WorkImage
                        src="/images/works/escuela_4.png"
                        alt="Escuela Sindical — administración"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
