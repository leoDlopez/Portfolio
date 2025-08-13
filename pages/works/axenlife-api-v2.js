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
import { ExternalLinkIcon } from '@chakra-ui/icons'
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
        outcomes: isEs ? 'Resultados' : 'Outcomes',
        press: isEs ? 'Cobertura' : 'Press'
    }

    const title = 'Axen Life API v2'
    const period = '2024–2025'

    const overview = isEs
        ? 'Refactor y migración del backend de Axen Life a Laravel 11 con arquitectura limpia (DDD/CQRS). Enfoque en fiabilidad, performance, estandarización de contratos y observabilidad; evolución del monolito MVC de v1 hacia capas Domain/Application/Infrastructure.'
        : 'Refactor and migration of Axen Life backend to Laravel 11 with clean architecture (DDD/CQRS). Focused on reliability, performance, standardized contracts and observability; evolved the v1 MVC monolith into Domain/Application/Infrastructure layers.'

    const myRole = isEs
        ? 'Backend Team Lead: diseño de arquitectura, definición de módulos y límites de dominio, code reviews, estrategia de ramas, CI/CD (Jenkins + GitHub Actions) y seguridad. Coordinación con mobile/web/infra para releases sin downtime.'
        : 'Backend Team Lead: architecture design, domain boundaries, code reviews, branch strategy, CI/CD (Jenkins + GitHub Actions) and security. Coordinated with mobile/web/infra for zero-downtime releases.'

    const stack = isEs
        ? 'Laravel 11 / PHP 8.x / PostgreSQL / Redis (cache/queues) / OpenAPI 3 (Swagger UI) / Jenkins / GitHub Actions / PHPUnit'
        : 'Laravel 11 / PHP 8.x / PostgreSQL / Redis (cache/queues) / OpenAPI 3 (Swagger UI) / Jenkins / GitHub Actions / PHPUnit'

    const highlights = isEs
        ? [
              'Arquitectura limpia con capas Domain / Application / Infrastructure y repositorios.',
              'Contratos REST estandarizados con OpenAPI 3; validaciones, versionado y errores consistentes.',
              'Seguridad: E2EE (handshake + AES-256-CBC en payloads sensibles), rate limiting, idempotency keys.',
              'Colas con Redis para procesos async (KYC, conciliaciones, notificaciones) y caching estratégico.',
              'Observabilidad: logging estructurado, correlación de request/trace IDs y métricas clave.',
              'CI/CD: pipelines para test, build y despliegue; revisiones de PR y calidad (lint/CS).'
          ]
        : [
              'Clean Architecture with Domain / Application / Infrastructure layers and repositories.',
              'Standardized REST contracts via OpenAPI 3; validations, versioning and consistent errors.',
              'Security: E2EE (handshake + AES-256-CBC for sensitive payloads), rate limiting, idempotency keys.',
              'Redis queues for async work (KYC, reconciliation, notifications) and strategic caching.',
              'Observability: structured logging, request/trace ID correlation and key metrics.',
              'CI/CD: pipelines for tests, build and deploy; PR reviews and quality gates (lint/CS).'
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
                    <ListItem>
                        <Meta>{labels.press}</Meta>
                        <Link
                            href="https://www.eluniversal.com.mx/tendencias/axen-life-recibe-el-distintivo-hecho-en-mexico-app-impulsa-la-educacion-financiera-con-sello-nacional/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            El Universal — Distintivo “Hecho en México”{' '}
                            <ExternalLinkIcon mx="2px" />
                        </Link>
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

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    {/* Actualiza rutas con tus assets reales (Swagger, diagramas, etc.) */}
                    <WorkImage
                        src="/images/works/axenlife-2.webp"
                        alt="Axen Life API v2 — Architecture"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
