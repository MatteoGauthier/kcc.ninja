import React from "react"
import { NextSeo } from "next-seo"

function SEO() {
  return (
    <NextSeo
      title="kcc.ninja - Curated list of Kucoin Community Chain dApps"
      canonical="https://kcc.ninja/"
      openGraph={{
        url: "https://kcc.ninja",
        title: "kcc.ninja - Curated list of Kucoin Community Chain dApps",
        description: "Looking for a DEX, a swaping platform on the Kucoin Community Chain ? Find out KCC dApps of your need :D",
        images: [
          {
            url: "https://kcc.ninja/og-image.jpg",
            width: 1920,
            height: 1080,
            alt: "Og Image of kcc.ninja",
          },
        ],
        site_name: "kcc.ninja",
      }}
      twitter={{
        handle: "@matteogauthier_",
        site: "@matteogauthier_",
        cardType: "summary_large_image",
      }}
    />
  )
}

export default SEO
