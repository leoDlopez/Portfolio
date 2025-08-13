import {
    Container,
    Badge,
    List,
    ListItem,
    SimpleGrid,
    Heading,
    UnorderedList,
    Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useRouter } from 'next/router'

const Work = () => {
    const { locale } = useRouter()
    const isEs = locale?.startsWith('es')

    const labels = {
        platform: isEs ? 'Plataforma' : 'Platform',
        stack: 'Stack',
        role: isEs ? 'Mi rol' : 'My role',
        highlights: isEs ? 'Claves' : 'Highlights',
        outcomes: isEs ? 'Resultados' : 'Outcomes'
    }

    const title = 'Axen Life API v1'
    const period = '2023'

    const overview = isEs
        ? 'Primera versión del backend de Axen Life, levantada desde cero en Laravel 9 con arquitectura MVC. API REST para cuentas, autenticación y movimientos, con integraciones de pagos/KYC y webhooks operativos para la app móvil.'
        : 'First backend version of Axen Life, bootstrapped from scratch on Laravel 9 (MVC). REST API for accounts, auth and transactions, with payments/KYC integrations and operational webhooks for the mobile app.'

    const myRole = isEs
        ? 'Scrum Master & Backend Developer: coordinación del equipo, definición de endpoints y flujos, desarrollo de módulos base y puesta en producción; integración con proveedores y manejo de incidencias.'
        : 'Scrum Master & Backend Developer: team coordination, endpoint/flow design, core modules development and production rollout; vendor integrations and incident handling.'

    const stack = isEs
        ? 'Laravel 9 / PHP 8.x / MySQL / REST / Webhooks / Veriff (KYC) / Twilio (OTP) / AlquimiaPay · Broxel (pagos)'
        : 'Laravel 9 / PHP 8.x / MySQL / REST / Webhooks / Veriff (KYC) / Twilio (OTP) / AlquimiaPay · Broxel (payments)'

    const highlights = isEs
        ? [
              'Módulos iniciales: autenticación, cuentas, movimientos/conciliación.',
              'Integraciones: AlquimiaPay y Broxel (pagos), Veriff (KYC), Twilio (OTP) vía webhooks.',
              'Contratos REST consistentes y manejo de errores/retornos para app móvil.',
              'Monitoreo básico y operativa diaria (incidencias, despliegues controlados).'
          ]
        : [
              'Initial modules: authentication, accounts, transactions/reconciliation.',
              'Integrations: AlquimiaPay & Broxel (payments), Veriff (KYC), Twilio (OTP) via webhooks.',
              'Consistent REST contracts and error handling for the mobile app.',
              'Basic monitoring and day-to-day ops (incidents, controlled deploys).'
          ]

    const outcomes = isEs
        ? [
              'Lanzamiento a producción de la app.',
              'Base funcional que permitió el refactor posterior (v2) hacia arquitectura limpia.'
          ]
        : [
              'App launched to production.',
              'Functional foundation that enabled the later clean-architecture refactor (v2).'
          ]

    return (
        <Layout title={title}>
            <Container>
                <Title>
                    {title} <Badge>{period}</Badge>
                </Title>

                <P>{overview}</P>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {labels.role}
                </Heading>
                <P>{myRole}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{labels.platform}</Meta>
                        <span>Web API</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{labels.stack}</Meta>
                        <span>{stack}</span>
                    </ListItem>
                </List>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {labels.highlights}
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1.5}>
                    {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </UnorderedList>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {labels.outcomes}
                </Heading>
                <UnorderedList ml={6} mb={6} spacing={1.5}>
                    {outcomes.map((o, i) => (
                        <li key={i}>{o}</li>
                    ))}
                </UnorderedList>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    {/* Actualiza con tus assets reales */}
                    <WorkImage
                        src="/images/works/axenlife-1.webp"
                        alt="Axen Life API v1 — overview"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
