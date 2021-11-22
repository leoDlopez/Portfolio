import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from "next/router"

const Work = () => {
    const router = useRouter()
    let website = router.locale == 'es-MX' ? 'Sitio web' : 'Website'
    let platform = router.locale == 'es-MX' ? 'Plataforma' : 'Platform'
    let repository = router.locale == 'es-MX' ? 'Repositorio' : 'Repository'
    let descripcion = router.locale == 'es-MX' ?
        'Escuela Sindical formó parte de una competición dentro de la Fábrica Academica de Software de mi Universidad, que consiste en que todo el grupo teníamos que realizar un proyecto para un cliente real, y el cliente tenía que elegir al mejor proyecto y usarlo. En dicho concurso, mi equipo DragonWare obtuvo el primer lugar de nuevo, consiguiendolo por 3 semestres consecutivos.' :
        'Escuela Sindical was part of a competition within the Academic Software Factory of my University, which consists of the whole group having to do a project for a real client, and the client had to choose the best project and deploy it. In that contest, my DragonWare team won first place again, winning it for three consecutive semesters.'
    let descripcion2 = router.locale == 'es-MX' ?
        'Este proyecto se realizó para el Sindicato del IMSS Sección XX, es una plataforma web educativa para que los trabajadores del sindicato puedan acceder a clases virtuales, y llevar el control de los maestros, alumnos y el contenido de las clases, así como trabajos y tareas.' :
        "This project was developed for the IMSS Union Section XX, it is an educative web platform with the purpose of the employees of the Union can access virtual classes, and have control of the teachers, the students, and the content of the classes, as well as assignments."
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Escuela Sindical <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion2}
                </P>
                <P style={{ marginTop: 10 }}>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / React / Materialize / jQuery / JavaScript / MySQL / Inertia.js</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/EscSindical" isExternal>
                            https://github.com/DragonWareMx/EscSindical<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/escuela_1.png" alt="Escuela Sindical" />
                <WorkImage src="/images/works/escuela_2.png" alt="Escuela Sindical" />
                <WorkImage src="/images/works/escuela_3.png" alt="Escuela Sindical" />
                <WorkImage src="/images/works/escuela_4.png" alt="Escuela Sindical" />
            </Container>
        </Layout>
    )
}

export default Work