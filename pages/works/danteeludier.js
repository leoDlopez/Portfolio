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
        ? 'E-commerce para la tienda y eventos del coach financiero Dante Eludier. Integra pagos con PayPal y Stripe y genera boletos QR enviados por correo para el acceso a eventos; además, cuenta con un panel para actualizar eventos y gestionar ventas.'
        : 'E-commerce for financial coach Dante Eludier’s store and events. Integrates PayPal and Stripe payments and issues QR tickets via email for event entry; it also includes an admin dashboard to update events and manage sales.'

    return (
        <Layout title="Dante Eludier">
            <Container>
                <Title>
                    Dante Eludier <Badge>2021</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://danteeludier.com/inicio"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            danteeludier.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / React / Material UI / PostgreSQL /
                            Inertia.js / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/DanteEludier"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/DanteEludier{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/dante_1.png"
                        alt="Dante Eludier — home"
                    />
                    <WorkImage
                        src="/images/works/dante_2.png"
                        alt="Dante Eludier — catálogo"
                    />
                    <WorkImage
                        src="/images/works/dante_3.png"
                        alt="Dante Eludier — checkout"
                    />
                    <WorkImage
                        src="/images/works/dante_4.png"
                        alt="Dante Eludier — admin"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
