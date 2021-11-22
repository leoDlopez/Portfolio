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
        'Veintidos es una plataforma web desarrollada para el grupo inmobiliario Veintidos. La plataforma cuenta con dos partes. La primera es una página web para que los clientes accedan y puedan ver las propiedades que hay disponibles en venta y se puedan poner en contacto con Veintidos. La segunda parte es una plataforma de gestión donde se puede administrar las propiedades que se muestran en la página.' :
        'Veintidos is a web platform developed for the real estate group Veintidos. The platform has two parts. The first is a web page so that clients can access and see the properties that are available for sale and can contact Veintidos. The second part is a management platform where you can manage the properties displayed on the webpage.'
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Veintidos <Badge>2020</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link href="https://veintidos.com.mx/inicio" isExternal>
                            https://veintidos.com.mx/<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / Bootstrap / MySQL / jQuery / JavaScript</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/DragonWareMx/veintidos" isExternal>
                            https://github.com/DragonWareMx/veintidos<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/veintidos_1.png" alt="Veintidos" />
                <WorkImage src="/images/works/veintidos_2.png" alt="Veintidos" />
                <WorkImage src="/images/works/veintidos_3.png" alt="Veintidos" />
                <WorkImage src="/images/works/veintidos_4.png" alt="Veintidos" />
            </Container>
        </Layout>
    )
}

export default Work