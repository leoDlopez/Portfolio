import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    UnorderedList
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
    const highlightsLabel = isEs ? 'Claves' : 'Highlights'
    const learnedLabel = isEs ? 'Lo aprendido' : 'What I learned'

    const descripcionMain = isEs
        ? 'Plataforma web para la granja de truchas “El Tepetate”. Consta de un sitio público (promoción y ventas) y un panel de gestión para la operación diaria: empleados, estanques, lotes de trucha, compras, ventas e inventario.'
        : 'Web platform for the trout farm “El Tepetate”. It includes a public site (promotion and sales) and an admin panel for day-to-day operations: employees, ponds, trout batches, purchases, sales and inventory.'

    const descripcionAward = isEs
        ? 'Proyecto participante en la Fábrica Académica de Software: todo el grupo desarrolla para un cliente real y éste elige el mejor. Con DragonWare obtuvimos el **primer lugar**.'
        : 'Project in the Academic Software Factory: the whole class builds for a real client and the client picks the best. With DragonWare we won **first place**.'

    const highlights = isEs
        ? [
              'Catálogo/landing pública con información y contacto.',
              'Módulos de gestión: empleados, estanques, truchas, compras, ventas e inventario.',
              'Formularios con validaciones, listados con filtros/paginación y exportaciones básicas.',
              'Roles y permisos para separar operación y administración.'
          ]
        : [
              'Public landing/catalog with info and contact.',
              'Admin modules: employees, ponds, trout, purchases, sales and inventory.',
              'Validated forms, filtered/paginated lists and basic exports.',
              'Role-based access to separate ops and admin.'
          ]

    const learned = isEs
        ? [
              'Entrega end-to-end de mi primer sistema real (requisitos → modelado → desarrollo → despliegue).',
              'Modelado de datos para inventario y operaciones.',
              'Buenas prácticas básicas: mensajes de validación claros, seeds/datos de prueba y migraciones.'
          ]
        : [
              'End-to-end delivery of my first real system (requirements → modeling → dev → deploy).',
              'Data modeling for inventory and operations.',
              'Early best practices: clear validation messages, seeds/test data and migrations.'
          ]

    return (
        <Layout title="SGTepetate">
            <Container>
                <Title>
                    SGTepetate <Badge>2020</Badge>
                </Title>

                <P>{descripcionMain}</P>
                <P style={{ marginTop: 10 }}>{descripcionAward}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://www.granjadetruchas.com/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            granjadetruchas.com <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Laravel / Bootstrap / MariaDB / jQuery / JavaScript
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>{repository}</Meta>
                        <Link
                            href="https://github.com/DragonWareMx/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            github.com/DragonWareMx{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {highlightsLabel}
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1.5}>
                    {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </UnorderedList>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {learnedLabel}
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1.5}>
                    {learned.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </UnorderedList>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    <WorkImage
                        src="/images/works/sgtepetate_1.png"
                        alt="SGTepetate — home"
                    />
                    <WorkImage
                        src="/images/works/sgtepetate_2.png"
                        alt="SGTepetate — catálogo"
                    />
                    <WorkImage
                        src="/images/works/sgtepetate_3.png"
                        alt="SGTepetate — inventario"
                    />
                    <WorkImage
                        src="/images/works/sgtepetate_4.png"
                        alt="SGTepetate — administración"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
