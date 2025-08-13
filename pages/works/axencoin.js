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
    const stackLabel = 'Stack'
    const roleLabel = isEs ? 'Mi rol' : 'My role'
    const highlightsLabel = isEs ? 'Claves' : 'Highlights'

    const overview = isEs
        ? 'dApp web para AxenCoin con integración a MetaMask: conexión de wallet, lectura de balance/ROI y flujo de “claim” on-chain. En la etapa final del proyecto el sitio público quedó como landing informativa.'
        : 'Web dApp for AxenCoin with MetaMask integration: wallet connect, balance/ROI read and on-chain claim flow. In the final stage of the project the public site remained as an informational landing.'

    const myRole = isEs
        ? 'Frontend / Integración Web3: construí la interfaz en React/Next.js, conecté MetaMask (provider) y orquesté el flujo de firma/transacciones. No desarrollé el smart contract; integré el front con el contrato existente.'
        : 'Frontend / Web3 Integration: built the React/Next.js UI, wired MetaMask (provider) and orchestrated the signing/transaction flow. I did not write the smart contract; I integrated the frontend with the existing one.'

    const stack =
        'React / Next.js / MetaMask / Ethers.js (Web3 provider) / REST · Webhooks'

    const highlights = isEs
        ? [
              'Wallet connect y detección de red; validaciones de red antes de operar.',
              'Lectura de balance/ROI y “claim” on-chain con manejo de estados (pendiente/éxito/error).',
              'Verificación de gas mínimo y mensajes de error entendibles para el usuario.',
              'Manejo de reintentos y cancelaciones; feedback visual en la UI.',
              'Versión pública final como landing informativa (SEO/OG básico).'
          ]
        : [
              'Wallet connect and network detection; network validation before actions.',
              'Balance/ROI read and on-chain claim with tx state handling (pending/success/error).',
              'Gas-balance checks and user-friendly error messages.',
              'Retry/cancel handling with clear UI feedback.',
              'Final public version as an informational landing (basic SEO/OG).'
          ]

    return (
        <Layout title="AxenCoin dApp">
            <Container>
                <Title>
                    AxenCoin dApp <Badge>2024</Badge>
                </Title>

                <P>{overview}</P>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {roleLabel}
                </Heading>
                <P>{myRole}</P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>{website}</Meta>
                        <Link
                            href="https://axencoin.finance/"
                            isExternal
                            rel="noopener noreferrer"
                        >
                            axencoin.finance <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>{platform}</Meta>
                        <span>Web dApp</span>
                    </ListItem>
                    <ListItem>
                        <Meta>{stackLabel}</Meta>
                        <span>{stack}</span>
                    </ListItem>
                    {/* Si más adelante tienes repo público, agrega un <ListItem> con Repository como en los otros proyectos */}
                </List>

                <Heading as="h3" fontSize={18} mb={2} align="left">
                    {highlightsLabel}
                </Heading>
                <UnorderedList ml={6} mb={4} spacing={1.5}>
                    {highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </UnorderedList>

                <SimpleGrid columns={{ base: 1 }} gap={3}>
                    {/* Usa tus assets reales; estas rutas son de ejemplo */}
                    <WorkImage
                        src="/images/works/axencoin.webp"
                        alt="AxenCoin — dashboard / ROI"
                    />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work
