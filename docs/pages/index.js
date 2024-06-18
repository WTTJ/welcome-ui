/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { Text } from '@welcome-ui/text'
import NextLink from 'next/link'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { GithubIcon, HeartIcon, RightIcon } from '@welcome-ui/icons'

import { Section } from '../components/Homepage/Section'
import { Components } from '../components/Homepage/Components'
import { Stats } from '../components/Homepage/Stats'
import { Expectations } from '../components/Homepage/Expectations'
import { Footer } from '../components/Footer'
import { LogoWttj } from '../components/LogoWttj'

export default function Home() {
  return (
    <main>
      <Section backgroundColor="nude-30">
        <Text as="span" color="neutral-black" textTransform="uppercase" variant="subtitle-md">
          Welcome UI
        </Text>
        <Text maxWidth={820} mb="xl" mt="sm" variant="h1">
          All the components you need to create a delightful React webapp
        </Text>
        <Text maxWidth={640} variant="lg">
          Welcome UI is a customizable design system library made with react, typescript,
          styled-components, ariakit and a lot of love 💛
        </Text>
        <NextLink href="/installation" passHref>
          <Button as="a" mt="3xl" size="lg">
            <span>Install amazing components</span>
            <RightIcon size="lg" />
          </Button>
        </NextLink>
      </Section>
      <Section>
        <Text as="h2" mb="xl" mt="sm" variant="h1">
          Some of our components
        </Text>
        <Text maxWidth={640} variant="lg" mb="3xl">
          More than 50 amazing components!
        </Text>
        <Components />
      </Section>
      <Section backgroundColor="nude-30">
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box flex="0 0 auto" maxWidth={{ md: 600 }} mb={{ xs: '5xl', lg: 0 }}>
            <Text as="span" color="neutral-black" textTransform="uppercase" variant="subtitle-md">
              Open source
            </Text>
            <Text as="h2" mb="xl" mt="sm" variant="h1">
              Contribute!
            </Text>
            <Text maxWidth={640} variant="lg">
              Welcome UI is open-sourced on GitHub. Contributions, feedback and issues are welcome –
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
        <Text as="h2" maxWidth={500} mb="xl" mt="0" variant="h1">
          All you’d expect from a design system...
        </Text>
        <Text maxWidth={640} mb="5xl" variant="lg">
          ...and a lot more!
        </Text>
        <Expectations />
      </Section>
      <Section backgroundColor="nude-30">
        <Text as="span" color="neutral-black" textTransform="uppercase" variant="subtitle-md">
          Example
        </Text>
        <Text as="h2" mb="xl" mt="sm" variant="h1">
          Going straight to the point!
        </Text>
        <Text maxWidth={450} variant="lg">
          Leave the UI code to our team and focus on building your astonishing project.
        </Text>
        <Box
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          as="iframe"
          border="0"
          h={{ xs: 300, md: 600 }}
          mt="3xl"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          src="https://codesandbox.io/embed/homepage-example-mcypy?autoresize=1&hidenavigation=1&initialpath=src&module=%2Fsrc%2FExample.tsx&theme=dark&view=split"
          title="homepage-example"
          w="100%"
        />
      </Section>
      <Section backgroundColor="black" color="white" pt={{ xs: '3xl', md: '6xl' }}>
        <Box textAlign="center" w="100%">
          <LogoWttj h={67} w={210} />
        </Box>
        <Text
          as="span"
          color="white"
          mb="0"
          mt="5xl"
          textTransform="uppercase"
          variant="subtitle-md"
        >
          Who we are?
        </Text>
        <Text as="h2" color="white" maxWidth={950} mb="xl" mt="sm" variant="h1">
          The new experience at work
        </Text>
        <Text color="white" maxWidth={640} variant="lg">
          Welcome to the Jungle build products that transform every step of the experience at work.
        </Text>
        <Box display={{ md: 'flex' }} mt="5xl">
          <NextLink href="https://www.welcometothejungle.com/en/companies/wttj/jobs" passHref>
            <Button as="a" mr="md" size="lg" target="_blank">
              <span>We are recruiting</span>
              <HeartIcon size="lg" />
            </Button>
          </NextLink>
          <NextLink href="https://www.welcometothejungle.com/en" passHref>
            <Button as="a" mt={{ xs: 'md', md: 0 }} size="lg" target="_blank" variant="ghost">
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
          alt="Welcome to the jungle illustration"
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
