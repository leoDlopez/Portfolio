import Head from 'next/head'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelLap from '../voxel-lap'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="theme-color" content="#0ea5e9" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="/images/favicon.svg"
                    type="image/svg+xml"
                />
                <title>Leonardo Lopez - Portfolio</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <VoxelLap />
                </NoSsr>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
