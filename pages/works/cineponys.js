import { Container, Badge, Link, List, ListItem, SimpleGrid, Divider, Heading } from '@chakra-ui/react'
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
        'Este proyecto formó parte de una materia de mi Universidad llamada Programación Lógica y Funcinal. Consta de dos partes, una aplicación móvil, y una Api para realizar funciones con Swi-Prolog.' :
        'This project was part of a subject at my University called Logical and Functional Programming. It consists of two parts, a mobile application, and an Api to perform functions with Swi-Prolog.'

    let titulo = router.locale == 'es-MX' ? 'Aplicación Móvil' : 'Mobile app'
    let descm = router.locale == 'es-MX' ?
        'La aplicación móvil está hecha en Reac Native, cuenta con cuatro pantallas: la de inicio, usuarios, peliculas y recomendación. Usuarios y Películas son formularios para mandar una petición a la API y que está guarde esos datos en la base de datos y en el archivo de Prolog. Y la pantalla de recomendación es para ejecutar el método de prolog que busca recomendar películas a un usuario.' :
        'The mobile application is made in React Native, it has four screens: the home screen, users, movies, and recommendations. Users and Movies are forms to send a request to the API and that is to save that data in the database and in the Prolog file. And the recommendation screen is to run the prolog method that seeks to recommend movies to a user.'
    let desca = router.locale == 'es-MX' ?
        'La API está hecha en Laravel, cuenta con rutas y controladores para poder hacer el registro y consulta de los usuarios y películas de la base de datos. Y además haciendo uso de PHP, reescribe el archivo de Prolog para añadir información y así poder realizar las recomendaciones.' :
        'The API is developed in Laravel, it has routes and controllers to be able to register and consult the users and movies of the database. And also making use of PHP, it rewrites the Prolog file to add information and thus be able to make the recommendations.'
    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    Cineponys <Badge>2021</Badge>
                </Title>
                <P>
                    {descripcion}
                </P>

                <Divider my={3} />
                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {titulo}
                </Heading>
                <P> {descm}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Android / iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/leoDlopez/PrologAndroid" isExternal>
                            https://github.com/leoDlopez/PrologAndroid<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <Divider my={3} />
                <Heading as="h3" fontSize={18} mb={2} align="left">
                    API
                </Heading>
                <P> {desca}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel / PHP / MySQL / SWI-Prolog / Prolog</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link href="https://github.com/leoDlopez/Rest-Api" isExternal>
                            https://github.com/leoDlopez/Rest-Api<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/cineponys_1.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_2.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_3.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_5.png" alt="Cineponys" />
                    <WorkImage src="/images/works/cineponys_4.png" alt="Cineponys" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work