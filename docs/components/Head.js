import React from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { generateTitle } from '../utils'

export const Head = () => {
  const router = useRouter()
  const title = generateTitle(router?.pathname)

  return (
    <NextHead>
      <title>{title}</title>
      <link
        href="https://cdn.welcomehome.io/production/assets/favicon.png"
        rel="shortcut icon"
        type="image/png"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@wttj_fr" name="twitter:site" />
      <meta content="@wttj_fr" name="twitter:create" />
      <meta content="Welcome UI - Customizable design system with react" property="twitter:title" />
      <meta
        content="Here you'll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react • styled-components • styled-system and reakit."
        property="twitter:description"
      />
      <meta content="http://welcome-ui.com" property="og:url" />
      <meta content="Welcome UI - Customizable design system with react" property="og:title" />
      <meta
        content="Here you'll find all the core components you need to create a delightful webapp. Customizable design system from Welcome to the jungle with react • styled-components • styled-system and reakit."
        property="og:description"
      />
      <meta
        content="https://cdn.welcometothejungle.co/images/welcome-ui-og-image-2.png"
        property="og:image"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-56009608-24" />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-56009608-24');
          `
        }}
      />
    </NextHead>
  )
}
