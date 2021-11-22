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
        'Uno4cinco es una página web del tipo E-commerce desarrollada para la editorial Uno4cinco. Este sitio web cuenta con una integración con las APIs de Paypal y Stripe para gestionar los pagos de las compras. Además de que la página cuenta con un gestor para hacer actualizaciones de libros y gestionar las ventas.' :
        'Uno4cinco is an E-commerce web page developed for the Uno4cinco publishing house. This website has an integration with the APIs of Paypal and Stripe for the management of the payments of the sales. Also, the page has a manager to make updates of books and manage the sales. '
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Uno4cinco <Badge>2020</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://uno4cinco.com/" isExternal>
                            https://uno4cinco.com/<ExternalLinkIcon />
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
                        <Link href="https://github.com/DragonWareMx/uno4cinco" isExternal>
                            https://github.com/DragonWareMx/uno4cinco<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/uno4cinco_1.png" alt="Uno4cinco" />
                <WorkImage src="/images/works/uno4cinco_2.png" alt="Uno4cinco" />
                <WorkImage src="/images/works/uno4cinco_3.png" alt="Uno4cinco" />
                <WorkImage src="/images/works/uno4cinco_4.png" alt="Uno4cinco" />
            </Container>
        </Layout>
    )
}

export default Work