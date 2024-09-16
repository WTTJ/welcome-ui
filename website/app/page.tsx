import { Text } from '@welcome-ui/text'
import NextLink from 'next/link'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'
import { GithubIcon, HeartIcon, RightIcon } from '@welcome-ui/icons'

import { Components } from '@/build-app/components/Homepage/Components'
import { Stats } from '@/build-app/components/Homepage/Stats'
import { Expectations } from '@/build-app/components/Homepage/Expectations'
import { LogoWttj } from '@/build-app/components/LogoWttj'
import { Section } from '@/build-app/components/Section'

const Home = () => {
  return (
    <main>
      <Section backgroundColor="nude-200">
        <Text as="span" color="dark-900" textTransform="uppercase" variant="subtitle-md">
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
      <Section backgroundColor="nude-200">
        <Box
          alignItems="center"
          display="flex"
          flexDirection={{ xs: 'column', lg: 'row' }}
          justifyContent="space-between"
        >
          <Box flex="0 0 auto" maxWidth={{ md: 600 }} mb={{ xs: '5xl', lg: 0 }}>
            <Text as="span" color="dark-900" textTransform="uppercase" variant="subtitle-md">
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
      <Section backgroundColor="nude-200">
        <Text as="span" color="dark-900" textTransform="uppercase" variant="subtitle-md">
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
        <LogoWttj h={67} w={210} />
        <Text
          as="span"
          color="white"
          mb="0"
          mt="3xl"
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
          alt="Welcome to the jungle illustration"
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
    </main>
  )
}

export default Home
