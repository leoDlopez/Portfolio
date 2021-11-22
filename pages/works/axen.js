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
        'Este proyecto es una página web hecha para la empresa Axen Capital con el proposito de que ellos pudieran ofrecer sus servicios de broker financiero y establecer otra manera de llegar a sus clientes.' :
        'This project is a webpage developed for the company Axen Capital with the purpose that they could offer their financial broker services and establish another way to reach their clients.'
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Axen <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://axencapital.com/inicio" isExternal>
                            https://axencapital.com <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / UIkit / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/Axen2" isExternal>
                            https://github.com/DragonWareMx/Axen2<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/axen_1.png" alt="Axen" />
                <WorkImage src="/images/works/axen_2.png" alt="Axen" />
                <WorkImage src="/images/works/axen_3.png" alt="Axen" />
                <WorkImage src="/images/works/axen_4.png" alt="Axen" />
            </Container>
        </Layout>
    )
}

export default Work