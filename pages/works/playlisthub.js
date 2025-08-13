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
        ? 'Aplicación web que integra la API de Spotify para conectar músicos con curadores de playlists. Usa una moneda interna (tokens): los artistas recargan saldo (PayPal, en esa versión) y gastan tokens para promocionar canciones; los curadores reciben tokens/pagos por revisiones y colocaciones, ayudando a impulsar oyentes.'
        : 'Web app integrating the Spotify API to connect musicians with playlist curators. It uses an internal currency (tokens): artists top up balance (PayPal in that version) and spend tokens to promote tracks; curators earn tokens/payments for reviews and placements, helping drive listeners.'

    return (
        <Layout title="Playlisthub">
            <Container>
                <Title>
                    Playlisthub <Badge>2020</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://app.playlisthub.com.mx/login"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            app.playlisthub.com.mx <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / MySQL / jQuery / JavaScript / Spotify API
                            (OAuth 2.0) / PayPal SDK
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/playlisthub"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/playlisthub{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/playlisthub_1.png"
                        alt="Playlisthub — login"
                    />
                    <WorkImage
                        src="/images/works/playlisthub_2.png"
                        alt="Playlisthub — dashboard"
                    />
                    <WorkImage
                        src="/images/works/playlisthub_3.png"
                        alt="Playlisthub — playlists"
                    />
                    <WorkImage
                        src="/images/works/playlisthub_4.png"
                        alt="Playlisthub — submissions"
                    />
                    <WorkImage
                        src="/images/works/playlisthub_5.png"
                        alt="Playlisthub — detail"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
