import SanityImageWrapper from '@/components/SanityImageWrapper'
import Section from '@/components/Section'
import ViewButton from '@/components/ViewButton'
import { BioQueryResult } from '@/sanity-types'
import { sanityFetch } from '@/sanity/lib/fetch'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import invariant from 'tiny-invariant'

const bioQuery = groq`*[_type == 'about'][0] {
  ..., 
  'bioURL': cv.asset->url
}`

export default async function About() {
  const bio = await sanityFetch<BioQueryResult>({ query: bioQuery })
  invariant(bio)

  return (
    <Section>
      <div className='w-[50%] max-w-[300px] float-left mr-4 mb-4'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={bio.headshot!.asset!._ref}
          className='w-full h-full rounded-lg'
        />
      </div>

      <PortableText value={bio.bio!} />
      {bio.cv && <ViewButton href={bio.bioURL!}>CV</ViewButton>}
    </Section>
  )
}
