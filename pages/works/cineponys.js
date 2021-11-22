import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
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
                    Cineponys <Badge>2021</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Android / iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/leoDlopez/PrologAndroid" isExternal>
                            https://github.com/leoDlopez/PrologAndroid<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/cineponys_1.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_2.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_3.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_5.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_4.png" alt="Cineponys" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work