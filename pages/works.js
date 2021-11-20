import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

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
const Works = () => {
    return (
        <Layout>
            <Container maxW="container.xl" mt={2} align="center">
                <Heading as="h3" fontSize={20} mb={4} align="left">
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="sgtepetate" title="SGTepetate" thumbnail={thumbSgt}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="axen" title="Axen Capital" thumbnail={thumbAxen}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="comepasto" title="Comepasto" thumbnail={thumbComepasto}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="consultarq" title="ConsultarQ" thumbnail={thumbConsultarq}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="danteeludier" title="Dante Eludier" thumbnail={thumbDante}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="escuelasindical" title="Escuela Sindical" thumbnail={thumbEscuela}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="ielect" title="iElect" thumbnail={thumbElect}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="playlisthub" title="PlaylistHub" thumbnail={thumbPlay}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="sistemasindical" title="Sistema Gestor Sindical" thumbnail={thumbSindical}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="uno4cinco" title="Uno4cinco" thumbnail={thumbUno}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="veintidos" title="Veintidos" thumbnail={thumbVeinti}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="zinnia" title="Zinnia Compañía Escénica" thumbnail={thumbZinnia}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works