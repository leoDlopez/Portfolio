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
        'DanteEludier es una página web del tipo E-commerce hecha para la tienda del coach financiero Dante Eludier. Este sitio web cuenta con una integración con las APIs de Paypal y Stripe para gestionar los pagos de las compras, y también tiene un sistema de envío de boletos QR por correo electrónico para entrar a los eventos. Además de que la página cuenta con un gestor para poder hacer actualizaciones de los eventos y gestionar las compras.' :
        'DanteEludier is an E-commerce web page made for the business coach Dante Eludier. This website has an integration with the APIs of Paypal and Stripe for the management of the payments of the sales and has a system for sending QR tickets by email to enter the events. Also, the page has a manager that allows to make updates of the events and manage the sales.'

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Dante Eludier <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
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