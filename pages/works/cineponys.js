import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Divider,
    Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Work = () => {
    const router = useRouter()
    const isEs = router.locale?.startsWith('es')

    // Labels
    const platform = isEs ? 'Plataforma' : 'Platform'
    const stackLabel = 'Stack'
    const repository = isEs ? 'Repositorio' : 'Repository'

    // Copy
    const overview = isEs
        ? 'Proyecto académico (2021) de la materia Lógica y Programación Funcional. Sistema de recomendación de películas con reglas en SWI-Prolog; incluye una aplicación móvil (React Native) y una API en Laravel para persistencia e integración con Prolog.'
        : 'Academic project (2021) for the Logic and Functional Programming course. Movie recommendation system using SWI-Prolog; includes a mobile app (React Native) and a Laravel API for persistence and Prolog integration.'

    const myRole = isEs
        ? 'Desarrollé yo solo la aplicación móvil completa (React Native). También apoyé al equipo con la API en Laravel (endpoints y ajustes) y realicé toda la integración móvil ↔ API ↔ SWI-Prolog.'
        : 'I built the entire mobile app myself (React Native). I also assisted the team with the Laravel API (endpoints & adjustments) and handled the end-to-end integration mobile ↔ API ↔ SWI-Prolog.'

    const mobileTitle = isEs ? 'Aplicación móvil' : 'Mobile app'
    const mobileDesc = isEs
        ? '4 pantallas: Inicio, Usuarios, Películas y Recomendación. Formularios para crear/consultar datos y consumo de la API. La pantalla de Recomendación ejecuta los predicados en Prolog vía API.'
        : '4 screens: Home, Users, Movies and Recommendation. Forms to create/query data and consume the API. The Recommendation screen triggers Prolog predicates via the API.'

    const apiTitle = 'API (Laravel)'
    const apiDesc = isEs
        ? 'Endpoints para CRUD de usuarios y películas. Integración con SWI-Prolog: escritura/lectura del archivo .pl y ejecución de predicados de recomendación. Persistencia en MySQL.'
        : 'Endpoints for users/movies CRUD. SWI-Prolog integration: write/read the .pl file and execute recommendation predicates. MySQL persistence.'

    const learnedTitle = isEs ? 'Lo aprendido' : 'What I learned'
    const learned1 = isEs
        ? 'Integración entre lenguajes (PHP ↔ SWI-Prolog) y diseño de endpoints para motores de recomendación.'
        : 'Cross-language integration (PHP ↔ SWI-Prolog) and endpoint design for recommendation engines.'
    const learned2 = isEs
        ? 'Consumo desde móvil, manejo de estado y orquestación de flujos API.'
        : 'Mobile consumption, state management, and API flow orchestration.'

    return (
        <Layout title="Cineponys">
            <Container>
                <Title>
                    Cineponys <Badge>2021</Badge>
                </Title>

                <P>{overview}</P>
                <P>{myRole}</P>

                <Divider my={3} />

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {mobileTitle}
                </Heading>
                <P>{mobileDesc}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Android / iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{stackLabel}</Meta>
                        <span>React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/leoDlopez/PrologAndroid"
                            isExternal
                        >
                            https://github.com/leoDlopez/PrologAndroid{' '}
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <Divider my={3} />

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {apiTitle}
                </Heading>
                <P>{apiDesc}</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{stackLabel}</Meta>
                        <span>Laravel / PHP / MySQL / SWI-Prolog</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/leoDlopez/Rest-Api"
                            isExternal
                        >
                            https://github.com/leoDlopez/Rest-Api{' '}
                            <ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>

                <Divider my={3} />

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {learnedTitle}
                </Heading>
                <List ml={4} my={2}>
                    <ListItem>• {learned1}</ListItem>
                    <ListItem>• {learned2}</ListItem>
                </List>

                <SimpleGrid columns={2} gap={2} mt={4}>
                    <WorkImage
                        src="/images/works/cineponys_1.png"
                        alt="Cineponys"
                    />
                    <WorkImage
                        src="/images/works/cineponys_2.png"
                        alt="Cineponys"
                    />
                    <WorkImage
                        src="/images/works/cineponys_3.png"
                        alt="Cineponys"
                    />
                    <WorkImage
                        src="/images/works/cineponys_5.png"
                        alt="Cineponys"
                    />
                    <WorkImage
                        src="/images/works/cineponys_4.png"
                        alt="Cineponys"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
