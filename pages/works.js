import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { useRouter } from 'next/router'

import thumbSgt from '../public/images/works/sgtepetate_1.png'
import thumbAxen from '../public/images/works/axen_1.png'
import thumbComepasto from '../public/images/works/comepasto_1.png'
import thumbConsultarq from '../public/images/works/consultarq_1.png'
import thumbDante from '../public/images/works/dante_1.png'
import thumbEscuela from '../public/images/works/escuela_1.png'
import thumbElect from '../public/images/works/ielect_1.png'
import thumbPlay from '../public/images/works/playlisthub_1.png'
import thumbSindical from '../public/images/works/sindical_1.png'
import thumbUno from '../public/images/works/uno4cinco_1.png'
import thumbVeinti from '../public/images/works/veintidos_1.png'
import thumbZinnia from '../public/images/works/zinnia_1.png'
import cine from '../public/images/works/cineponys_thumb.png'
import thumbEmas from '../public/images/works/emas.webp'
import thumbAxencoin from '../public/images/works/axencoin.webp'
import thumbDiinco from '../public/images/works/diinco.webp'
import thumbBackoffice from '../public/images/works/backoffice_axen.webp'
import thumbAxen1 from '../public/images/works/axenlife-1.webp'
import thumbAxen2 from '../public/images/works/axenlife-2.webp'

const Works = () => {
    const router = useRouter()
    const isEs = router.locale?.startsWith('es')
    let titulo1 = isEs ? 'Proyectos' : 'Projects'
    let titulo = isEs ? 'Freelance' : 'Freelance'
    let sgtepetate = isEs
        ? 'Página web y plataforma de gestión para la granja trutícola El Tepetate'
        : 'Website and management platform for the El Tepetate truticultural farm'
    let axen = isEs
        ? 'Página web para la empresa de inversiones Axen Capital'
        : 'Website for the investment company Axen Capital'
    let comepasto = isEs
        ? 'E-commerce que integra Paypal y Stripe para la tienda de comida vegana Comepasto'
        : 'E-commerce that integrates Paypal and Stripe for the vegan food store Comepasto'
    let consultarq = isEs
        ? 'Plataforma web de gestión de proyectos, para la consultoría de proyectos arquitectonicos ConsultarQ'
        : 'Web platform for project management, for the architectural project consultancy ConsultQ'
    let danteeludier = isEs
        ? 'E-commerce para los cursos y eventos del coach empresarial Dante Eludier'
        : 'E-commerce for the courses and events of the business coach Dante Eludier'
    let escuelas = isEs
        ? 'Plataforma web de aprendizaje diseñada para el Sindicato del IMSS Sección XX'
        : 'Learning web platform designed for the IMSS Union Section XX'
    let ielect = isEs
        ? 'Aplicación web para gestión y mapeo de los procesos electorales'
        : 'Web application for management and mapping of electoral processes'
    let playlisthub = isEs
        ? 'Plataforma web para conectar artistas con curadores e influencers'
        : 'Web platform for connecting artists with curators and influencers'
    let sistemasindical = isEs
        ? 'Sistema de gestión web para administrar las oficinas del Sindicato del IMSS Sección XX'
        : 'Web management system to administer the offices of the IMSS Union Section XX'
    let uno4cinco = isEs
        ? 'E-commerce para la venta de libros de la editorial Uno4cinco'
        : 'E-commerce for the sale of books from Uno4cinco publishing house'
    let veintidos = isEs
        ? 'Página web para promocionar propiedades en venta y en renta de la agencia inmobiliaria Veintidos'
        : 'Web page to promote properties for sale or for rent of the real estate agency Veintidos'
    let zinnia = isEs
        ? 'Página web para publicitar los eventos de la compañía escénica Zinnia'
        : 'Website to advertise the events of the Zinnia stage company'
    let emas = isEs
        ? 'Sitio institucional para organización feminista: información, noticias y botón de donación.'
        : 'Institutional site for a feminist NGO: information, news and a donation CTA.'
    let otros = isEs ? 'Otros' : 'Others'
    let cineponys = isEs
        ? 'Aplicación móvil para sugerir al usuario películas'
        : 'Mobile app to suggest movies to the user based on their tastes'
    const featuredDescriptions = isEs
        ? {
              'axen-life-v2':
                  'API financiera de Axen Life: refactor a Laravel 11 con arquitectura limpia (DDD/CQRS), Redis y CI/CD.',
              'axen-life-v1':
                  'Primera versión de la API (Laravel 9, monolito MVC) con integraciones y salida a producción.',
              'axen-capital-backoffice':
                  'Backoffice para contratos, finanzas y usuarios — Laravel + React/Inertia.',
              'diinco-platform':
                  'Plataforma “Tinder para arquitectos”: perfiles, matching y gestión de proyectos.',
              axencoin:
                  'dApp web de AxenCoin: conexión con MetaMask, lectura de balances y “claim” on-chain.'
          }
        : {
              'axen-life-v2':
                  'Axen Life financial API: refactor to Laravel 11 with clean architecture (DDD/CQRS), Redis and CI/CD.',
              'axen-life-v1':
                  'First version of the API (Laravel 9 MVC) with integrations and production launch.',
              'axen-capital-backoffice':
                  'Back office for contracts, finance and users — Laravel + React/Inertia.',
              'diinco-platform':
                  '“Tinder for architects” platform: profiles, matching and project management.',
              axencoin:
                  'AxenCoin web dApp: MetaMask connect, balance read, and on-chain claim.'
          }
    return (
        <Layout>
            <Container maxW="container.xl" mt={2} align="center">
                <Heading as="h3" fontSize={20} mb={4} align="left">
                    {titulo1}
                </Heading>
                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="axenlife-api-v2"
                            title="AxenLife API v2"
                            thumbnail={thumbAxen2}
                        >
                            {featuredDescriptions['axen-life-v2']}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="axenlife-api-v1"
                            title="AxenLife API v1"
                            thumbnail={thumbAxen1}
                        >
                            {featuredDescriptions['axen-life-v1']}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="axen-capital-backoffice"
                            title="Axen Capital Backoffice"
                            thumbnail={thumbBackoffice}
                        >
                            {featuredDescriptions['axen-capital-backoffice']}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="axencoin"
                            title="AxenCoin"
                            thumbnail={thumbAxencoin}
                        >
                            {featuredDescriptions['axencoin']}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="diinco-platform"
                            title="Diinco Platform"
                            thumbnail={thumbDiinco}
                        >
                            {featuredDescriptions['diinco-platform']}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4} align="left">
                    {titulo}
                </Heading>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="sgtepetate"
                            title="SGTepetate"
                            thumbnail={thumbSgt}
                        >
                            {sgtepetate}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="axen"
                            title="Axen Capital"
                            thumbnail={thumbAxen}
                        >
                            {axen}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="comepasto"
                            title="Comepasto"
                            thumbnail={thumbComepasto}
                        >
                            {comepasto}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="consultarq"
                            title="ConsultarQ"
                            thumbnail={thumbConsultarq}
                        >
                            {consultarq}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="danteeludier"
                            title="Dante Eludier"
                            thumbnail={thumbDante}
                        >
                            {danteeludier}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="escuelasindical"
                            title="Escuela Sindical"
                            thumbnail={thumbEscuela}
                        >
                            {escuelas}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="ielect"
                            title="iElect"
                            thumbnail={thumbElect}
                        >
                            {ielect}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="emas"
                            title="EMAS (A.C.)"
                            thumbnail={thumbEmas}
                        >
                            {emas}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="playlisthub"
                            title="PlaylistHub"
                            thumbnail={thumbPlay}
                        >
                            {playlisthub}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="sistemasindical"
                            title="Sistema Gestor Sindical"
                            thumbnail={thumbSindical}
                        >
                            {sistemasindical}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="uno4cinco"
                            title="Uno4cinco"
                            thumbnail={thumbUno}
                        >
                            {uno4cinco}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="veintidos"
                            title="Veintidos"
                            thumbnail={thumbVeinti}
                        >
                            {veintidos}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="zinnia"
                            title="Zinnia Compañía Escénica"
                            thumbnail={thumbZinnia}
                        >
                            {zinnia}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4} align="left">
                    {otros}
                </Heading>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="cineponys"
                            title="Cineponys"
                            thumbnail={cine}
                        >
                            {cineponys}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works
