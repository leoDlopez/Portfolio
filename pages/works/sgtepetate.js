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
    let descripcion = router.locale == 'es-MX' ? 'SGTepetate formó parte de una competición dentro de la Fábrica Academica de Software de mi Universidad, que consistió en que todo el grupo teníamos que realizar un proyecto para un cliente real, y el cliente tenía que elegir al mejor proyecto y usarlo. En dicho concurso, mi equipo DragonWare obtuvo el primer lugar.' : 'SGTepetate was part of a competition within the Academic Software Factory of my University, which consisted of the whole group having to do a project for a real client, and the client had to choose the best project and deploy it. In this contest, my DragonWare team won first place.'
    let descripcion2 = router.locale == 'es-MX' ? 'Este proyecto se realizó para la granja truticola El Tepetate, es una plataforma web que contiene una página publicitaria y de ventas, y una plataforma de gestión para la granja, donde se pueden administrar empleados, estanques, truchas, compras, ventas e inventario.' : "This project was developed for the truticultural farm El Tepetate, it's a web platform that contains an advertising and sales page, and a management platform for the farm, where employees, ponds, trouts, purchases, sales, and inventory can be managed."
    return (
        < Layout title="SGTepetate" >
            <Container>
                <Title>
                    SGTepetate <Badge>2020</Badge>
                </Title>
                <P>
                    {descripcion2}
                </P>
                <P style={{ marginTop: 10 }}>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://www.granjadetruchas.com/" isExternal>
                            https://www.granjadetruchas.com/ <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / Bootstrap / MariaDB / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/" isExternal>
                            https://github.com/DragonWareMx/<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/sgtepetate_1.png" alt="SGTepetate" />
                <WorkImage src="/images/works/sgtepetate_2.png" alt="SGTepetate" />
                <WorkImage src="/images/works/sgtepetate_3.png" alt="SGTepetate" />
                <WorkImage src="/images/works/sgtepetate_4.png" alt="SGTepetate" />
            </Container>
        </Layout >
    )
}

export default Work