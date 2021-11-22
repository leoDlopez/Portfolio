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
        'Este proyecto es una página web desarrollada para la compañía escénica Zinnia, con el proposito de proporcionar más información sobre sus obras, producciones, proyectos y sus próximos eventos.' :
        'This project is a web page developed for the Zinnia stage company, with the purpose of giving more information about their plays, productions, projects and their next events.'

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Zinnia <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="http://zinniacompaniaescenica.com.mx/" isExternal>
                            http://zinniacompaniaescenica.com.mx/ <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / UIkit / MySQL / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/Zinnia" isExternal>
                            https://github.com/DragonWareMx/Zinnia<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/zinnia_1.png" alt="Zinnia" />
                <WorkImage src="/images/works/zinnia_2.png" alt="Zinnia" />
                <WorkImage src="/images/works/zinnia_3.png" alt="Zinnia" />
                <WorkImage src="/images/works/zinnia_4.png" alt="Zinnia" />
            </Container>
        </Layout>
    )
}

export default Work