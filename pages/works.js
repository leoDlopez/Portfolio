import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { useRouter } from "next/router"

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

const Works = () => {
    const router = useRouter()
    let titulo = router.locale == 'es-MX' ? 'Proyectos Web' : 'Web Projects'
    let sgtepetate = router.locale == 'es-MX' ? 'Página web y plataforma de gestión para la granja trutícola El Tepetate' : 'Website and management platform for the El Tepetate truticultural farm'
    let axen = router.locale == "es-MX" ? 'Página web para la empresa de inversiones Axen Capital' : 'Website for the investment company Axen Capital'
    let comepasto = router.locale == "es-MX" ? 'E-commerce que integra Paypal y Stripe para la tienda de comida vegana Comepasto' : 'E-commerce that integrates Paypal and Stripe for the vegan food store Comepasto'
    let consultarq = router.locale == "es-MX" ? 'Plataforma web de gestión de proyectos, para la consultoría de proyectos arquitectonicos ConsultarQ' : 'Web platform for project management, for the architectural project consultancy ConsultQ'
    let danteeludier = router.locale == "es-MX" ? 'E-commerce para los cursos y eventos del coach empresarial Dante Eludier' : 'E-commerce for the courses and events of the business coach Dante Eludier'
    let escuelas = router.locale == "es-MX" ? "Plataforma web de aprendizaje diseñada para el Sindicato del IMSS Sección XX" : 'Learning web platform designed for the IMSS Union Section XX'
    let ielect = router.locale == "es-MX" ? 'Aplicación web para gestión y mapeo de los procesos electorales' : 'Web application for management and mapping of electoral processes'
    let playlisthub = router.locale == "es-MX" ? 'Plataforma web para conectar artistas con curadores e influencers' : 'Web platform for connecting artists with curators and influencers'
    let sistemasindical = router.locale == "es-MX" ? 'Sistema de gestión web para administrar las oficinas del Sindicato del IMSS Sección XX' : 'Web management system to administer the offices of the IMSS Union Section XX'
    let uno4cinco = router.locale == "es-MX" ? 'E-commerce para la venta de libros de la editorial Uno4cinco' : 'E-commerce for the sale of books from Uno4cinco publishing house'
    let veintidos = router.locale == "es-MX" ? 'Página web para promocionar propiedades en venta y en renta de la agencia inmobiliaria Veintidos' : 'Web page to promote properties for sale or for rent of the real estate agency Veintidos'
    let zinnia = router.locale == "es-MX" ? 'Página web para publicitar los eventos de la compañía escénica Zinnia' : 'Website to advertise the events of the Zinnia stage company'
    let otros = router.locale == "es-MX" ? 'Otros' : 'Others'
    let cineponys = router.locale == "es-MX" ? 'Aplicación móvil para sugerir al usuario películas' : 'Mobile app to suggest movies to the user based on their tastes'
    return (
        <Layout>
            <Container maxW="container.xl" mt={2} align="center">
                <Heading as="h3" fontSize={20} mb={4} align="left">
                    {titulo}
                </Heading>

                <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
                    <Section>
                        <WorkGridItem id="sgtepetate" title="SGTepetate" thumbnail={thumbSgt}>
                            {sgtepetate}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="axen" title="Axen Capital" thumbnail={thumbAxen}>
                            {axen}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="comepasto" title="Comepasto" thumbnail={thumbComepasto}>
                            {comepasto}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="consultarq" title="ConsultarQ" thumbnail={thumbConsultarq}>
                            {consultarq}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="danteeludier" title="Dante Eludier" thumbnail={thumbDante}>
                            {danteeludier}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="escuelasindical" title="Escuela Sindical" thumbnail={thumbEscuela}>
                            {escuelas}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="ielect" title="iElect" thumbnail={thumbElect}>
                            {ielect}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="playlisthub" title="PlaylistHub" thumbnail={thumbPlay}>
                            {playlisthub}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="sistemasindical" title="Sistema Gestor Sindical" thumbnail={thumbSindical}>
                            {sistemasindical}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="uno4cinco" title="Uno4cinco" thumbnail={thumbUno}>
                            {uno4cinco}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="veintidos" title="Veintidos" thumbnail={thumbVeinti}>
                            {veintidos}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="zinnia" title="Zinnia Compañía Escénica" thumbnail={thumbZinnia}>
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
                        <WorkGridItem id="cineponys" title="Cineponys" thumbnail={cine}>
                            {cineponys}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works