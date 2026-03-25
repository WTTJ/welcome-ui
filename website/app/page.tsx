import NextLink from 'next/link'
import React from 'react'

import { Button } from '@/components/Button'
import { GithubIcon, HeartIcon, RightIcon } from '@/components/Icon'
import { Logo, Symbol } from '@/components/Logo'
import { Text } from '@/components/Text'

import { Components } from '~/build-app/components/Homepage/Components'
import { Expectations } from '~/build-app/components/Homepage/Expectations'
import { Stats } from '~/build-app/components/Homepage/Stats'
import { Section } from '~/build-app/components/Section'

const Home = () => {
  return (
    <main>
      <Section className="nine:bg-beige-30">
        <Text as="span" className="nine:text-neutral-90" variant="subtitle-md">
          Welcome UI
        </Text>
        <Text className="nine:max-w-[820px] nine:mb-xl nine:mt-sm" variant="h1">
          All the components you need to create a delightful React webapp
        </Text>
        <Text className="nine:max-w-[640px]" variant="lg">
          Welcome UI is a customizable design system library made with react, typescript,
          tailwindcss, ariakit and a lot of love 💛
        </Text>
        <Button as={NextLink} className="nine:mt-3xl" href="/foundations/getting-started" size="lg">
          <span>Install amazing components</span>
          <RightIcon size="lg" />
        </Button>
      </Section>
      <Section>
        <Text as="h2" className="nine:mb-xl nine:mt-sm" variant="h1">
          Some of our components
        </Text>
        <Text className="nine:max-w-[640px] nine:mb-3xl" variant="lg">
          More than 50 amazing components!
        </Text>
        <Components />
      </Section>
      <Section className="nine:bg-beige-30">
        <div className="nine:flex nine:items-center nine:justify-between nine:lg:flex-row nine:flex-col">
          <div className="nine:flex-initial nine:lg:mb-0 nine:mb-5xl nine:md:max-w-[37.5rem]">
            <Text as="span" className="nine:text-neutral-90" variant="subtitle-md">
              Open source
            </Text>
            <Text as="h2" className="nine:mb-xl nine:mt-sm" variant="h1">
              Contribute!
            </Text>
            <Text className="nine:max-w-[640px]" variant="lg">
              Welcome UI is open-sourced on GitHub. Contributions, feedback and issues are welcome –
              we want you to be a part of this great project.
            </Text>
            <Button
              as="a"
              className="nine:mt-3xl"
              href="https://github.com/WTTJ/welcome-ui"
              rel="noopener nofollow"
              size="lg"
              target="_blank"
              variant="secondary"
            >
              <GithubIcon size="lg" />
              <span>Contribute on Github</span>
            </Button>
          </div>
          <Stats />
        </div>
      </Section>
      <Section>
        <Text as="h2" className="nine:max-w-[500px] nine:mb-xl" variant="h1">
          All you’d expect from a design system...
        </Text>
        <Text className="nine:max-w-[640px] nine:mb-5xl" variant="lg">
          ...and a lot more!
        </Text>
        <Expectations />
      </Section>
      <Section className="nine:bg-beige-30">
        <Text as="span" className="nine:text-neutral-90" variant="subtitle-md">
          Example
        </Text>
        <Text as="h2" className="nine:mb-xl nine:mt-sm" variant="h1">
          Going straight to the point!
        </Text>
        <Text className="nine:max-w-[450px]" variant="lg">
          Leave the UI code to our team and focus on building your astonishing project.
        </Text>
        <iframe
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          className="nine:border-0 nine:md:h-[37.5rem] nine:h-[18.75rem] nine:mt-3xl nine:w-full"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          src="https://stackblitz.com/edit/ew8gehqm?embed=1&file=demo.tsx&hideNavigation=1"
          title="homepage-example"
        />
      </Section>
      <Section className="nine:pt-3xl nine:md:pt-6xl">
        <Logo className="nine:h-[67px]" />
        <Text
          as="span"
          className="nine:text-neutral-90 nine:mt-3xl"
          color="neutral-90"
          variant="subtitle-md"
        >
          Who we are?
        </Text>
        <Text
          as="h2"
          className="nine:max-w-[950px] nine:mb-xl nine:mt-sm"
          color="neutral-90"
          variant="h1"
        >
          THE JOB IS YOURS
        </Text>
        <Text className="nine:max-w-[640px]" variant="lg">
          80,000 opportunities to find the job that’s made for you.
        </Text>
        <div className="nine:md:flex nine:mt-5xl">
          <Button
            as="a"
            className="nine:!mr-md"
            href="https://www.welcometothejungle.com/en/companies/wttj/jobs"
            rel="noopener nofollow"
            size="lg"
            target="_blank"
          >
            <span>We are recruiting</span>
            <HeartIcon size="lg" />
          </Button>
          <Button
            as="a"
            className="nine:mt-0 xs:md-md"
            href="https://www.welcometothejungle.com/en"
            rel="noopener nofollow"
            size="lg"
            target="_blank"
            variant="ghost"
          >
            <span>Visit our website</span>
            <RightIcon size="lg" />
          </Button>
        </div>
        <div className="nine:-bottom-[9.375rem] nine:-right-[7.5rem] nine:absolute nine:hidden nine:lg:block nine:opacity-[10]">
          <Symbol className="nine:h-[400px]" />
        </div>
      </Section>
    </main>
  )
}

export default Home
