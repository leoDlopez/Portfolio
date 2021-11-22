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
        'ConsultarQ formó parte de una competición dentro de la Fábrica Academica de Software de mi Universidad, que consiste en que todo el grupo teníamos que realizar un proyecto para un cliente real, y el cliente tenía que elegir al mejor proyecto y usarlo. En dicho concurso, mi equipo DragonWare obtuvo el primer lugar de nuevo, consiguiendolo por 2 semestres consecutivos.' :
        'ConsultarQ was part of a competition within the Academic Software Factory of my University, which consists of the whole group having to do a project for a real client, and the client had to choose the best project and deploy it. In that contest, my DragonWare team won first place again, winning it for two consecutive semesters.'
    let descripcion2 = router.locale == 'es-MX' ?
        'Este proyecto se realizó para la consultoría de proyectos arquitectonicos ConsultarQ, es una plataforma web para llevar el control de los empleados, gastos, clientes, proveedores y administrar proyectos.' :
        "This project was developed for the architectural project consultancy ConsultarQ, it's a web platform for keeping track of the employess, outgoings, clients, suppliers and manage projects."
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    ConsultarQ <Badge>2021</Badge>
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
                        <span>Express.js / UIKit / MySQL /  jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/ConsultarQ" isExternal>
                            https://github.com/DragonWareMx/ConsultarQ<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/consultarq_1.png" alt="ConsultarQ" />
                <WorkImage src="/images/works/consultarq_2.png" alt="ConsultarQ" />
                <WorkImage src="/images/works/consultarq_3.png" alt="ConsultarQ" />
                <WorkImage src="/images/works/consultarq_4.png" alt="ConsultarQ" />
            </Container>
        </Layout>
    )
}

export default Work