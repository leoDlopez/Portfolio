import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IoLanguage } from 'react-icons/io5'
import { useRouter } from "next/router"
import Link from 'next/link'

const LocaleToggleButton = () => {
    const { asPath, locale } = useRouter();

    return (

        <Link href={asPath} locale={locale === "es-MX" ? "en-US" : "es-MX"}>
            <IconButton aria-label="Toggle theme"
                mr={2}
                colorScheme={locale === "es-MX" ? 'blue' : 'gray'}
                icon={<Icon as={IoLanguage} />}
            ></IconButton>
        </Link>
    )
}

export default LocaleToggleButton