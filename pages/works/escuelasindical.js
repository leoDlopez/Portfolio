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
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Escuela Sindical <Badge>2021</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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