import NextLink from 'next/link'
import React from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'

import { Components } from '~/build-app/components/Homepage/Components'
import { Expectations } from '~/build-app/components/Homepage/Expectations'
import { Stats } from '~/build-app/components/Homepage/Stats'
import { Section, SectionDescription, SectionTitle } from '~/build-app/components/Section'

const Home = () => {
  return (
    <main className="flex flex-col gap-xl md:gap-3xl mt-xl md:mt-3xl">
      <Section className="flex flex-col md:flex-row md:justify-between md:items-center gap-lg">
        <div className="flex flex-col gap-md">
          <SectionTitle className="max-w-900">
            All the components you need to create a delightful React webapp
          </SectionTitle>
          <SectionDescription>
            Welcome UI is a customizable design system library made with react, typescript,
            tailwindcss, ariakit and a lot of love 💛
          </SectionDescription>
          <Button as={NextLink} className="w-fit" href="/foundations/getting-started">
            <span>Let’s started!</span>
          </Button>
        </div>
        <Stats />
      </Section>
      <Section>
        <SectionTitle>Some of our components</SectionTitle>
        <SectionDescription>More than 50 amazing components!</SectionDescription>
        <Components />
      </Section>
      <Section>
        <SectionTitle>All you’d expect from a design system...</SectionTitle>
        <SectionDescription>...and a lot more!</SectionDescription>
        <Expectations />
      </Section>
      <Section>
        <SectionTitle>Going straight to the point!</SectionTitle>
        <SectionDescription>
          Leave the UI code to our team and focus on building your astonishing project.
        </SectionDescription>
        <iframe
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          className="border-0 md:h-600 h-300 mt-3xl w-full"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          src="https://stackblitz.com/edit/ew8gehqm?embed=1&file=demo.tsx&hideNavigation=1"
          title="homepage-example"
        />
      </Section>
      <Section>
        <div className="flex justify-between items-center gap-lg">
          <div>
            <Logo className="h-67 mb-xl" />
            <SectionTitle>FIND YOUR PEOPLE</SectionTitle>
            <SectionDescription>
              +90,000 opportunities to find the job that’s made for you.
              <br />
              We guide candidates to their future teams through immersive job listings and support
              them throughout their job search with a personalized candidate experience.
            </SectionDescription>
            <div className="flex flex-col md:flex-row gap-md">
              <Button
                as="a"
                className="w-fit"
                href="https://www.welcometothejungle.com/en/companies/wttj/jobs"
                rel="noopener nofollow"
                target="_blank"
              >
                <span>We are recruiting</span>
                <Icon name="heart" size="lg" />
              </Button>
              <Button
                as="a"
                className="w-fit"
                href="https://www.welcometothejungle.com/en"
                rel="noopener nofollow"
                target="_blank"
                variant="secondary"
              >
                <span>Visit our website</span>
                <Icon name="angle-right-b" size="lg" />
              </Button>
            </div>
          </div>
          <div className="w-450 mr-xl rounded-xl overflow-hidden rotate-6 hidden md:flex">
            <img src="https://cdn-images.welcometothejungle.com/pnLF3TuZFTN4HhSaDrWKbm9i0Lvu45qESWp5RwoSOYk/rs:auto:1500::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9pbWFnZS9maWxlLzU3NzIvMTc2MTczLzEwZDE1OTJkLTU5ZTYtNDk2YS05NGI0LTBmZDNjNmNjNTc0My5qcGc" />
          </div>
        </div>
      </Section>
    </main>
  )
}

export default Home
