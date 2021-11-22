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
        'Este proyecto fue desarrollado para el Sindicato del IMSS Sección XX. Las funciones de este sistema web es el de administrar las 6 distintas oficinas que tienen en el sindicato, básicamente el sistema está conformado por 6 ABCC (Altas, Bajas, Cambios y Consultas), uno para cada oficina.' :
        'This project was developed for the IMSS Union Section XX. The function of this web system is the management of the six offices that the Union has. The system is formed by six CRUD (Create, Read, Update and Delete), each one for one office.'

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Sistema Gestor Sindical <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / React / Materialize / Material UI / MySQL / jQuery / JavaScript / Inertia.js</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/SistemaGestorSindical" isExternal>
                            https://github.com/DragonWareMx/SistemaGestorSindical<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/sindical_1.png" alt="Sistema Gestor Sindical" />
                <WorkImage src="/images/works/sindical_2.png" alt="Sistema Gestor Sindical" />
                <WorkImage src="/images/works/sindical_3.png" alt="Sistema Gestor Sindical" />
                <WorkImage src="/images/works/sindical_4.png" alt="Sistema Gestor Sindical" />
            </Container>
        </Layout>
    )
}

export default Work