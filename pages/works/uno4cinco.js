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
        ? 'Uno4cinco es una tienda en línea para la editorial Uno4cinco. Integra pagos con PayPal y Stripe para procesar compras de forma segura y generar confirmaciones; además, incluye un panel de administración para alta/edición de libros, gestión de inventario y seguimiento de ventas.'
        : 'Uno4cinco is an e-commerce website for the Uno4cinco publishing house. It integrates PayPal and Stripe to securely process orders and handle confirmations; it also includes an admin dashboard to create/update books, manage inventory, and track sales.'

    return (
        <Layout title="Uno4cinco">
            <Container>
                <Title>
                    Uno4cinco <Badge>2020</Badge>
                </Title>

                <P>{descripcion}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://uno4cinco.com/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            uno4cinco.com <ExternalLinkIcon mx="2px" />
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
                        <Link
                            href="https://github.com/DragonWareMx/uno4cinco"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx/uno4cinco{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/uno4cinco_1.png"
                        alt="Uno4cinco — home"
                    />
                    <WorkImage
                        src="/images/works/uno4cinco_2.png"
                        alt="Uno4cinco — catálogo"
                    />
                    <WorkImage
                        src="/images/works/uno4cinco_3.png"
                        alt="Uno4cinco — detalle"
                    />
                    <WorkImage
                        src="/images/works/uno4cinco_4.png"
                        alt="Uno4cinco — admin"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
