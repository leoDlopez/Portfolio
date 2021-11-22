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
        'Playlisthub es una aplicación web que se conecta con la API de Spotify para poder conectar a músicos con curadores. El próposito de esto es que los músicos puedan pagar para que un curador ponga su cancion en alguna de sus playlist con miles de seguidores y consigan mas oyentes.' :
        "Playlisthub is a web application that connects with the Spotify API to connect musicians with curators. The purpose of this is that the musicians can pay to get their songs in a curator's playlist whit thousands of followers and by doing that they can get more listeners."

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Playlisthub <Badge>2020</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://app.playlisthub.com.mx/login" isExternal>
                            https://app.playlisthub.com.mx<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / MySQL / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/playlisthub" isExternal>
                            https://github.com/DragonWareMx/playlisthub<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/playlisthub_1.png" alt="Playlisthub" />
                <WorkImage src="/images/works/playlisthub_2.png" alt="Playlisthub" />
                <WorkImage src="/images/works/playlisthub_3.png" alt="Playlisthub" />
                <WorkImage src="/images/works/playlisthub_4.png" alt="Playlisthub" />
                <WorkImage src="/images/works/playlisthub_5.png" alt="Playlisthub" />
            </Container>
        </Layout>
    )
}

export default Work