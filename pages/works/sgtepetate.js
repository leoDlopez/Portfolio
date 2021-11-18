import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    SGTepetate <Badge>2020</Badge>
                </Title>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.granjadetruchas.com/" isExternal>
                            https://www.granjadetruchas.com/ <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / Bootstrap / MariaDB / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Repository</Meta>
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
        </Layout>
    )
}

export default Work