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
                    Dante Eludier <Badge>2021</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://danteeludier.com/inicio" isExternal>
                            https://danteeludier.com/ <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / React / Material UI / PostgreSQL / JavaScript / Inertia.js</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/DanteEludier" isExternal>
                            https://github.com/DragonWareMx/DanteEludier<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/dante_1.png" alt="Dante Eludier" />
                <WorkImage src="/images/works/dante_2.png" alt="Dante Eludier" />
                <WorkImage src="/images/works/dante_3.png" alt="Dante Eludier" />
                <WorkImage src="/images/works/dante_4.png" alt="Dante Eludier" />
            </Container>
        </Layout>
    )
}

export default Work