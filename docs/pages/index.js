/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { Text } from '@welcome-ui/text'
import NextLink from 'next/link'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { RightIcon } from '@welcome-ui/icons.right'
import { GithubIcon } from '@welcome-ui/icons.github'
import { HeartIcon } from '@welcome-ui/icons.heart'

import { Section } from '../components/Homepage/Section'
import { Components } from '../components/Homepage/Components'
import { Stats } from '../components/Homepage/Stats'
import { Expectations } from '../components/Homepage/Expectations'
import { Footer } from '../components/Footer'
import { LogoWttj } from '../components/LogoWttj'

export default function Home() {
  return (
    <main>
      <Section backgroundColor="nude.200">
        <Text as="span" textTransform="uppercase" variant="subtitle1">
          Welcome UI
        </Text>
        <Text maxWidth={820} mb="xl" mt="md" variant="h1">
          All components you need to create a delightful React webapp
        </Text>
        <Text color="dark.100" maxWidth={640} variant="body1">
          Welcome UI is a customizable design system library made with react, typescript,
          styled-components, reakit and a lot of love 💛
        </Text>
        <NextLink href="/installation" passHref>
          <Button as="a" mt="3xl" size="lg">
            <span>Install amazing components</span>
            <RightIcon />
          </Button>
        </NextLink>
      </Section>
      <Section>
        <Text mb="xl" mt="0" variant="h4">
          Some of our components
        </Text>
        <Components />
      </Section>
      <Section backgroundColor="nude.200">
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box flex="0 0 auto" maxWidth={{ md: 600 }} mb={{ xs: 50, lg: 0 }}>
            <Text as="span" textTransform="uppercase" variant="subtitle1">
              Open source
            </Text>
            <Text mb="xl" mt="md" variant="h1">
              Contribute!
            </Text>
            <Text color="dark.100" maxWidth={640} variant="body1">
              Welcome UI is open-sourced on GitHub. Contributions, feedback and issues are welcome,
              we want you to be a part of this great project.
            </Text>
            <NextLink href="https://github.com/WTTJ/welcome-ui" passHref>
              <Button as="a" mt="3xl" size="lg" target="_blank" variant="secondary">
                <GithubIcon size="lg" />
                <span>Contribute on Github</span>
              </Button>
            </NextLink>
          </Box>
          <Stats />
        </Box>
      </Section>
      <Section>
        <Text maxWidth={500} mb="xl" mt="0" variant="h1">
          All you’d expect from a design system
        </Text>
        <Text color="dark.100" maxWidth={640} mb={50} variant="body1">
          Donec augue turpis, iaculis vel mattis ac, dictum vel sem. Quisque non dolor est.
          Curabitur placerat ligula id ex sollicitudin sodales.
        </Text>
        <Expectations />
      </Section>
      <Section backgroundColor="nude.200">
        <Text as="span" textTransform="uppercase" variant="subtitle1">
          Example
        </Text>
        <Text mb="xl" mt="md" variant="h1">
          Less code. More speed!
        </Text>
        <Text color="dark.100" maxWidth={640} variant="body1">
          Spend less time writing UI code and more time building a great experience for your
          customers.
        </Text>
        <Box
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          as="iframe"
          border="0"
          h={{ xs: 300, md: 600 }}
          mt="3xl"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          src="https://codesandbox.io/embed/homepage-example-mcypy?autoresize=1&hidenavigation=1&moduleview=1&theme=dark"
          title="homepage-example"
          w="100%"
        />
      </Section>
      <Section backgroundColor="dark.900" color="light.900" pt={{ xs: '3xl', md: 60 }}>
        <Box textAlign="center" w="100%">
          <LogoWttj h={67} w={210} />
        </Box>
        <Text as="span" mt={50} textTransform="uppercase" variant="subtitle1">
          Who we are?
        </Text>
        <Text maxWidth={950} mb="xl" mt="md" variant="h1">
          We build products that transform every step of the experience at work
        </Text>
        <Text color="light.700" maxWidth={640} variant="body1">
          Donec augue turpis, iaculis vel mattis ac, dictum vel sem. Quisque non dolor est.
          Curabitur placerat ligula id ex sollicitudin sodales.
        </Text>
        <Box display="flex" mt={50}>
          <NextLink href="https://www.welcometothejungle.com/en/companies/wttj/jobs" passHref>
            <Button as="a" mr="md" size="lg" target="_blank">
              <span>We hire engineers</span>
              <HeartIcon size="lg" />
            </Button>
          </NextLink>
          <NextLink href="https://www.welcometothejungle.com/en" passHref>
            <Button as="a" size="lg" target="_blank" variant="quaternary">
              <span>Visit our website</span>
              <RightIcon size="lg" />
            </Button>
          </NextLink>
        </Box>
        <Box
          as="img"
          bottom={-90}
          display={{ xs: 'none', lg: 'block' }}
          maxWidth={400}
          position="absolute"
          right="0"
          src="illustration.png"
          w="100%"
        />
      </Section>
      <Section as="div" py="3xl" zIndex="1">
        <Footer />
      </Section>
    </main>
  )
}
