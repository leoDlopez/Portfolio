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
        ? 'E-commerce para la tienda de comida vegana Comepasto. Integra pagos con PayPal y Stripe y usa Google Maps para calcular el costo de envío según la dirección del cliente. Incluye un panel para gestionar inventario, productos, recetas, pedidos y empleados.'
        : 'E-commerce for the vegan food store Comepasto. Integrates PayPal and Stripe for payments and uses Google Maps to calculate delivery costs based on the customer’s address. Includes an admin panel to manage inventory, products, recipes, orders and staff.'

    return (
        <Layout title="Comepasto">
            <Container>
                <Title>
                    Comepasto <Badge>2021</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://comepasto.com/inicio"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            comepasto.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / React / Material UI / MySQL / Inertia.js /
                            JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/comepasto"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/comepasto{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/comepasto_1.png"
                        alt="Comepasto — home"
                    />
                    <WorkImage
                        src="/images/works/comepasto_2.png"
                        alt="Comepasto — catálogo"
                    />
                    <WorkImage
                        src="/images/works/comepasto_3.png"
                        alt="Comepasto — detalle"
                    />
                    <WorkImage
                        src="/images/works/comepasto_4.png"
                        alt="Comepasto — admin"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
