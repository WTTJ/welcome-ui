import { Text } from '@welcome-ui/text'
import NextLink from 'next/link'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { GithubIcon, HeartIcon, RightIcon } from '@welcome-ui/icons'
import { Logo, Symbol } from '@welcome-ui/logo'
import React from 'react'

import { Components } from '@/build-app/components/Homepage/Components'
import { Stats } from '@/build-app/components/Homepage/Stats'
import { Expectations } from '@/build-app/components/Homepage/Expectations'
import { Section } from '@/build-app/components/Section'

const Home = () => {
  return (
    <main style={{ display: 'inherit', maxWidth: '100%' }}>
      <Section backgroundColor="beige-30">
        <Text as="span" color="neutral-90" textTransform="uppercase" variant="subtitle-md">
          Welcome UI
        </Text>
        <Text maxWidth={820} mb="xl" mt="sm" variant="h1">
          All the components you need to create a delightful React webapp
        </Text>
        <Text maxWidth={640} variant="lg">
          Welcome UI is a customizable design system library made with react, typescript,
          styled-components, ariakit and a lot of love 💛
        </Text>
        <Button as={NextLink} href="/foundations/getting-started" mt="3xl" size="lg">
          <span>Install amazing components</span>
          <RightIcon size="lg" />
        </Button>
      </Section>
      <Section>
        <Text as="h2" mb="xl" mt="sm" variant="h1">
          Some of our components
        </Text>
        <Text maxWidth={640} mb="3xl" variant="lg">
          More than 50 amazing components!
        </Text>
        <Components />
      </Section>
      <Section backgroundColor="beige-30">
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box flex="0 0 auto" maxWidth={{ md: 600 }} mb={{ xs: '5xl', lg: 0 }}>
            <Text as="span" color="neutral-90" textTransform="uppercase" variant="subtitle-md">
              Open source
            </Text>
            <Text as="h2" mb="xl" mt="sm" variant="h1">
              Contribute!
            </Text>
            <Text maxWidth={640} variant="lg">
              Welcome UI is open-sourced on GitHub. Contributions, feedback and issues are welcome –
              we want you to be a part of this great project.
            </Text>
            <Button
              as="a"
              href="https://github.com/WTTJ/welcome-ui"
              mt="3xl"
              rel="noopener nofollow"
              size="lg"
              target="_blank"
              variant="secondary"
            >
              <GithubIcon size="lg" />
              <span>Contribute on Github</span>
            </Button>
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
      <Section backgroundColor="beige-30">
        <Text as="span" color="neutral-90" textTransform="uppercase" variant="subtitle-md">
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
      <Section overflow="hidden" pt={{ xs: '3xl', md: '6xl' }}>
        <Logo h={67} />
        <Text
          as="span"
          color="neutral-90"
          mb="0"
          mt="3xl"
          textTransform="uppercase"
          variant="subtitle-md"
        >
          Who we are?
        </Text>
        <Text as="h2" color="neutral-90" maxWidth={950} mb="xl" mt="sm" variant="h1">
          THE JOB IS YOURS
        </Text>
        <Text maxWidth={640} variant="lg">
          80,000 opportunities to find the job that’s made for you.
        </Text>
        <Box display={{ md: 'flex' }} mt="5xl">
          <Button
            as="a"
            href="https://www.welcometothejungle.com/en/companies/wttj/jobs"
            mr="md"
            rel="noopener nofollow"
            size="lg"
            target="_blank"
          >
            <span>We are recruiting</span>
            <HeartIcon size="lg" />
          </Button>
          <Button
            as="a"
            href="https://www.welcometothejungle.com/en"
            mt={{ xs: 'md', md: 0 }}
            rel="noopener nofollow"
            size="lg"
            target="_blank"
            variant="ghost"
          >
            <span>Visit our website</span>
            <RightIcon size="lg" />
          </Button>
        </Box>
        <Box
          bottom={-150}
          display={{ _: 'none', lg: 'block' }}
          opacity={0.1}
          position="absolute"
          right={-120}
        >
          <Symbol h={400} />
        </Box>
      </Section>
    </main>
  )
}

export default Home
