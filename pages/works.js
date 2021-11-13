import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbSgt from '../public/images/sgtepetate.png'

const Works = () => {
    return (
        <Layout>
            <Container maxW="container.xl" mt={2}>
                <Heading as="h3" fontSize={20} mb={4}>
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
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works