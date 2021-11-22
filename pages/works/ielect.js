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
        'iElect es una aplicación web desarrollada para ayudar con la gestión y el mapeo de procesos electorales en el estado de Michoacán. Entre sus funciones están el de administrar campañas, brigadistas, simpatizantes y generar datos estadísticos.' :
        'iElect is a web application developed to help with the management and mapping of electoral processes in the state of Michoacan. Its functions include managing campaigns, brigade members, supporters, and generating statistical data.'

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    iElect <Badge>2021</Badge>
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
                        <span>Laravel / UIkit / PostgreSQL / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/iElect" isExternal>
                            https://github.com/DragonWareMx/iElect<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/ielect_1.png" alt="iElect" />
                <WorkImage src="/images/works/ielect_2.jpeg" alt="iElect" />
                <WorkImage src="/images/works/ielect_3.jpeg" alt="iElect" />
            </Container>
        </Layout>
    )
}

export default Work