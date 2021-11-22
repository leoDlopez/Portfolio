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
        'Comepasto es una página web del tipo E-commerce hecha para la tienda de comida vegana Comepasto. Este sitio web cuenta con una integración con las APIs de Paypal y Stripe para gestionar los pagos de las compras, y con Google Maps para calcular el costo del envío de productos a la dirección del cliente. Además de que la página cuenta con un gestor para que la gente de Comepasto pueda hacer actualizaciones de inventario, productos, recetas, gestionar compras y empleados.' :
        'Comepasto is an E-commerce web page developed for the vegan food store Comepasto. This website has an integration with the APIs of Paypal and Stripe for the management of the payments of the sales, and with Google Maps to calculate the cost of the delivery of the products to the client address. Also, the page has a manager for the people of Comepasto to allow them to make updates of inventory, products, recipes, manage the sales and the employees. '
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Comepasto <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://comepasto.com/inicio" isExternal>
                            https://comepasto.com/ <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / React / Material UI / MySQL / JavaScript / Inertia.js</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/comepasto" isExternal>
                            https://github.com/DragonWareMx/comepasto<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/comepasto_1.png" alt="Comepasto" />
                <WorkImage src="/images/works/comepasto_2.png" alt="Comepasto" />
                <WorkImage src="/images/works/comepasto_3.png" alt="Comepasto" />
                <WorkImage src="/images/works/comepasto_4.png" alt="Comepasto" />
            </Container>
        </Layout>
    )
}

export default Work